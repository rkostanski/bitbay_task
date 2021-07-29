import React, { useEffect, useState } from "react";
import './app.less';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { getOrderSchema } from "./api/getOrderSchema";
import { subscribeOrderbook } from "./api/subscribeOrderbook";
import S from "./styles";
import { Layout } from "antd";
import { Row, Col } from "antd";

const client = new W3CWebSocket("wss://api.bitbay.net/websocket/");

const { Header, Footer, Content } = Layout;

interface IOrder {
  ra: string;
  ca: string;
  sa: string;
  pa: string;
  co: number;
}

export const App = () => {
  const [buyOrders, setBuyOrders] = useState<IOrder[]>([]);
  const [sellOrders, setSellOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    client.onopen = () => {
      client.send(JSON.stringify(getOrderSchema));
      client.send(JSON.stringify(subscribeOrderbook));
    };

    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data as string);

      if (dataFromServer.action === "proxy-response") {
        setBuyOrders(dataFromServer.body.buy);
        setSellOrders(dataFromServer.body.sell);
      }

      if (
        dataFromServer.action === "push" &&
        dataFromServer.topic === "trading/orderbook/btc-pln"
      ) {
        client.send(JSON.stringify(getOrderSchema));
      }
    };

    return () => {
      client.close();
    };
  }, []);

  return (
    <Layout>
      <Header>Header</Header>
      <Content>
        <S.PageWrapper>
          <Row>
            <Col span={12}>
              <ul>
                {buyOrders.map((value) => (
                  <li>
                    {value.ra}: {value.co}
                  </li>
                ))}
              </ul>
            </Col>
            <Col span={12}>
              <ul>
                {sellOrders.map((value) => (
                  <li>
                    {value.ra}: {value.co}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </S.PageWrapper>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};
