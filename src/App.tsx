import React, { useEffect, useState } from "react";
import "./app.less";
import Big from "big.js";
import { Row, Col, Layout } from "antd";
import { SelectValue } from "antd/lib/select";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { getOrderSchema } from "@api/getOrderSchema";
import { subscribeOrderbook } from "@api/subscribeOrderbook";
import { unsubscribeOrderbook } from "@api/unsubscribeOrderbook";
import { tradingStats } from "@api/tradingStats";
import { ThemeProvider } from "@context/theme.provider";
import { Orderbook } from "@components/orderbook/orderbook";
import Select from "@components/select/select";
import { Spinner } from "@components/spinner/spinner";
import formatCurrency from "@utils/formatCurrency";
import availablePairs, { ICurrencyPair } from "@data/availablePairs";
import { TCurrencyPair } from "./types/TCurrencyPair";
import { TOrder } from "@types_/TOrder";
import S from "./app.styles";

Big.RM = Big.roundHalfUp;

const client = new W3CWebSocket("wss://api.bitbay.net/websocket/");

const { Content } = Layout;

export const App = () => {
  const [buyOrders, setBuyOrders] = useState<TOrder[]>([]);
  const [sellOrders, setSellOrders] = useState<TOrder[]>([]);
  const [selectedPair, setSelectedPair] = useState<ICurrencyPair>(
    availablePairs[0]
  );
  const [stats, setStats] = useState({ h: "0", l: "0" });

  const onPairChange = (selectedValue: SelectValue) => {
    const pickedPair = selectedValue as TCurrencyPair;

    client.send(JSON.stringify(unsubscribeOrderbook(selectedPair.value)));
    client.send(JSON.stringify(getOrderSchema(pickedPair)));
    client.send(JSON.stringify(subscribeOrderbook(pickedPair)));
    setSelectedPair(availablePairs.find((pair) => pair.value === pickedPair)!);
  };

  const spread = Big(stats.h).minus(stats.l).round(2);

  useEffect(() => {
    client.onopen = () => {
      client.send(JSON.stringify(getOrderSchema(selectedPair.value)));
      client.send(JSON.stringify(subscribeOrderbook(selectedPair.value)));
    };

    return () => {
      client.close();
    };
  }, []);

  useEffect(() => {
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data as string);

      const { action, topic } = dataFromServer;

      if (action === "proxy-response") {
        setBuyOrders(dataFromServer.body.buy);
        setSellOrders(dataFromServer.body.sell);
      }

      if (
        action === "push" &&
        topic === `trading/orderbook/${selectedPair.value}`
      ) {
        client.send(JSON.stringify(getOrderSchema(selectedPair.value)));
      }
    };

    (async () => {
      const statsResponse = await tradingStats(selectedPair.value);
      const { stats } = await statsResponse.json();

      setStats({
        h: stats.h,
        l: stats.l,
      });
    })();
  }, [selectedPair.value]);

  if (!buyOrders.length || !sellOrders.length) {
    return <Spinner fullSize />;
  }

  return (
    <ThemeProvider>
      <Layout>
        <Content>
          <S.PageWrapper>
            <Row>
              <Col xs={24}>
                <S.PairInfoSection>
                  <Select
                    options={availablePairs}
                    defaultValue={selectedPair.value}
                    onChange={onPairChange}
                  />
                  <div>Spread {spread.toString()}</div>
                  <S.MaxMinWrapper>
                    <div>
                      <span>24h max: </span>
                      {formatCurrency({
                        value: stats.h,
                        currency: selectedPair.fiat,
                      })}
                    </div>
                    <div>
                      <span>24h min: </span>
                      {formatCurrency({
                        value: stats.l,
                        currency: selectedPair.fiat,
                      })}
                    </div>
                  </S.MaxMinWrapper>
                </S.PairInfoSection>
              </Col>
            </Row>

            <S.OrderbookWrapper>
              <Col xs={24} sm={24} md={24} lg={12}>
                <Orderbook
                  title="Bid"
                  orders={Array.from(buyOrders).reverse()}
                  currency={selectedPair.fiat}
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={12}>
                <Orderbook
                  title="Ask"
                  orders={sellOrders}
                  currency={selectedPair.fiat}
                />
              </Col>
            </S.OrderbookWrapper>
          </S.PageWrapper>
        </Content>
      </Layout>
    </ThemeProvider>
  );
};
