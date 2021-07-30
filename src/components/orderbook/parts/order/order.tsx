import React from "react";
import S from "./order.styles";
import formatCurrency from "@utils/formatCurrency";
import { TOrder } from "../../../../types/TOrder";

export const Order = ({
  order,
  currency,
  transitionDelay,
}: {
  order: TOrder;
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
