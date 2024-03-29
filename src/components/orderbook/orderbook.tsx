import React from "react";
import S from "./orderbook.styles";
import { Order } from "./parts/order/order";
import { Header } from "./parts/header/header";
import { TOrder } from "../../types/TOrder";

const headerValues = ["Kurs", "Ilość", "Wartość", "Liczba ofert"];

export const Orderbook = ({
  orders,
  title,
  currency,
}: {
  orders: TOrder[];
  title: string;
  currency: string;
}) => (
  <S.Orderbook>
    <S.Title>{title}</S.Title>
    <Header values={headerValues} />
    <S.OrdersWrapper>
      {orders.map((order, index) => (
        <Order
          key={order.ra}
          order={order}
          currency={currency}
          transitionDelay={150 + 150 * index}
        />
      ))}
    </S.OrdersWrapper>
  </S.Orderbook>
);
