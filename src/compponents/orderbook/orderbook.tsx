import React from "react";
import S from "./orderbook.styles";
import { IOrder } from "../../App";
import { Order } from "./parts/order/order";
import { Header } from "./parts/header/header";

export const Orderbook = ({ orders }: { orders: IOrder[] }) => (
  <S.Orderbook>
    <Header values={["Kurs", "Ilość", "Wartość", "Liczba ofert"]} />
    <S.OrdersWrapper>
      {orders.map((order) => (
        <li>
          <Order order={order} />
        </li>
      ))}
    </S.OrdersWrapper>
  </S.Orderbook>
);
