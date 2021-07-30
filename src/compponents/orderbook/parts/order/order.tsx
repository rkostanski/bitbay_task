import React, { useEffect, useState } from "react";
import { IOrder } from "../../../../App";
import S from "./order.styles";
import formatCurrency from "../../../../utils/formatCurrency";

export const Order = ({
  order,
  currency,
  transitionDelay,
}: {
  order: IOrder;
  currency: string;
  transitionDelay: number;
}) => {
  return (
    <S.Order transitionDelay={transitionDelay}>
      <span>
        {currency ? formatCurrency({ currency, value: order.ra }) : order.ra}
      </span>
      <span>{order.ca}</span>
      <span>
        {currency
          ? formatCurrency({
              currency,
              value: (Number(order.ca) * Number(order.ra)).toFixed(2),
            })
          : order.ra}
      </span>
      <span>{order.co}</span>
    </S.Order>
  );
};
