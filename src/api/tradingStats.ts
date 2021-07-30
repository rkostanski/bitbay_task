import { TCurrencyPair } from "../types/TCurrencyPair";

export const tradingStats = (pair: TCurrencyPair) => {
  return fetch(`https://api.bitbay.net/rest/trading/stats/${pair}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
