/* eslint-disable import/no-anonymous-default-export */

export default ({ value, currency }: { value: string; currency: string }) =>
  new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency,
  }).format(Number(value));
