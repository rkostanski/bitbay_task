import React from "react";
import Big from "big.js";
import formatCurrency from "@utils/formatCurrency";
import { TOrder } from "../../../../types/TOrder";
import S from "./order.styles";

export const Order = ({
  order,
  currency,
  transitionDelay,
}: {
  order: TOrder;
  currency: string;
  transitionDelay: number;
}) => {
  const worth = Big(order.ca).times(order.ra).round(2);

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
              value: worth.toString(),
            })
          : order.ra}
      </span>
      <span>{order.co}</span>
    </S.Order>
  );
};
