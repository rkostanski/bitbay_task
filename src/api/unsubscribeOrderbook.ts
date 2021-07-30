export const unsubscribeOrderbook = (pair: string) => {
  return {
    action: "unsubscribe",
    module: "trading",
    path: `orderbook/${pair}`,
  };
};
