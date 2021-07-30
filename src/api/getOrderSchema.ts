export const getOrderSchema = (pair: string) => {
  return {
    requestId: "78539fe0-e9b0-4e4e-8c86-70b36aa93d4f",
    action: "proxy",
    module: "trading",
    path: `orderbook-limited/${pair}/10`,
  };
};
