import { TCurrencyPair } from "../types/TCurrencyPair";
import { TFiatCurrency } from "../types/TFiatCurrency";

export interface ICurrencyPair {
  label: string;
  value: TCurrencyPair;
  fiat: TFiatCurrency;
}

export default [
  { label: "BTC/PLN", value: "btc-pln", fiat: "pln" },
  { label: "BTC/USD", value: "btc-usd", fiat: "usd" },
  { label: "BTC/EUR", value: "btc-eur", fiat: "eur" },
  { label: "ETH/PLN", value: "eth-pln", fiat: "pln" },
] as ICurrencyPair[];
