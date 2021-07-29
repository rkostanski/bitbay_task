import React from "react";
import { IOrder } from "../../../../App";
import S from "./order.styles";

export const Order = ({ order }: { order: IOrder }) => {
  return (
    <S.Order>
      <span>{order.ra}</span>
      <span>{order.ca}</span>
      <span>{Number(order.ca) * Number(order.ra)}</span>
      <span>{order.co}</span>
    </S.Order>
  );
};
