// Exchange rates shown on the homepage, copied from the live site on 2026-10-29.
// Each pair has a mid rate plus the spreads the old PHP backend applied:
//   现汇买入价 (buy)  = mid + buySpread
//   现汇卖出价 (sell) = mid + sellSpread
// TODO: replace with the real rate source once the backend/API is decided.
export const ratesUpdatedAt = "2026-10-29";

export const currencies = {
  AUD: { name: "澳元", flag: "/images/flags/aud.gif" },
  CNY: { name: "人民币", flag: "/images/flags/cny.gif" },
  USD: { name: "美元", flag: "/images/flags/usd.gif" },
  GBP: { name: "英镑", flag: "/images/flags/gbp.gif" },
  EUR: { name: "欧元", flag: "/images/flags/eur.gif" },
  NZD: { name: "纽元", flag: "/images/flags/nzd.gif" },
  CAD: { name: "加元", flag: "/images/flags/cad.gif" },
  JPY: { name: "日元", flag: "/images/flags/jpy.gif" },
  HKD: { name: "港元", flag: "/images/flags/hkd.gif" },
  SGD: { name: "新加坡元", flag: "/images/flags/sgd.gif" },
};

const pairs = [
  { from: "AUD", to: "CNY", mid: 4.7018, buySpread: -0.1822, sellSpread: 0.11 },
  { from: "USD", to: "CNY", mid: 6.6661, buySpread: -0.12, sellSpread: 0.3 },
  { from: "GBP", to: "CNY", mid: 8.8815, buySpread: -0.05, sellSpread: 0.2 },
  { from: "EUR", to: "CNY", mid: 7.4308, buySpread: 0.2, sellSpread: 0.48 },
  { from: "NZD", to: "CNY", mid: 3.7479, buySpread: -0.05, sellSpread: 0.25 },
  { from: "AUD", to: "CAD", mid: 0.9863, buySpread: -0.05, sellSpread: 0.2 },
  { from: "AUD", to: "JPY", mid: 111.243, buySpread: -0.1, sellSpread: 0.2 },
  { from: "AUD", to: "HKD", mid: 5.5336, buySpread: -0.0982, sellSpread: 0.03 },
  { from: "AUD", to: "EUR", mid: 0.6327, buySpread: -0.01, sellSpread: 0.1 },
  { from: "AUD", to: "SGD", mid: 0.903, buySpread: -0.01, sellSpread: 0.1 },
  { from: "AUD", to: "GBP", mid: 0.5294, buySpread: -0.05, sellSpread: 0.2 },
  { from: "AUD", to: "USD", mid: 0.7053, buySpread: -0.007, sellSpread: 0.08 },
];

export const rates = pairs.map(({ from, to, mid, buySpread, sellSpread }) => ({
  from,
  to,
  buy: Number((mid + buySpread).toFixed(4)),
  sell: Number((mid + sellSpread).toFixed(4)),
}));
