export const subscribeOrderbook = (pair: string) => {
  return {
    action: "subscribe-public",
    module: "trading",
    path: `orderbook/${pair}`,
  };
};
