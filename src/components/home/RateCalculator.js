"use client";

import { useState } from "react";
import { currencies, rates } from "@/data/rates";

// Rate for converting 1 unit of `from` into `to`, or null if we don't quote it.
// Selling the base currency of a pair uses our buy price; buying it back
// uses our sell price.
function getRate(from, to) {
  if (from === to) return 1;
  const direct = rates.find((r) => r.from === from && r.to === to);
  if (direct) return direct.buy;
  const reverse = rates.find((r) => r.from === to && r.to === from);
  if (reverse) return 1 / reverse.sell;
  return null;
}

const codes = Object.keys(currencies);

function format(n) {
  return Number.isFinite(n) ? n.toFixed(4) : "";
}

function CurrencySelect({ id, label, value, onChange }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-11 rounded-full border border-brand bg-white px-4 text-brand outline-none focus:ring-2 focus:ring-brand/30"
      >
        {codes.map((code) => (
          <option key={code} value={code}>
            {currencies[code].name}
          </option>
        ))}
      </select>
    </label>
  );
}

function AmountInput({ id, label, value, onChange, readOnly }) {
  return (
    <label htmlFor={id} className="flex flex-col gap-1.5 text-sm font-medium">
      {label}
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min="0"
        value={value}
        readOnly={readOnly}
        onChange={onChange && ((e) => onChange(e.target.value))}
        className="h-11 rounded-full border border-brand bg-white px-4 tabular-nums outline-none read-only:bg-surface focus:ring-2 focus:ring-brand/30"
      />
    </label>
  );
}

export default function RateCalculator() {
  const [from, setFrom] = useState("AUD");
  const [to, setTo] = useState("CNY");
  // Whichever amount the user typed last drives the other one.
  const [amount, setAmount] = useState("1000");
  const [driver, setDriver] = useState("sell");

  const rate = getRate(from, to);
  const value = parseFloat(amount);
  let sellAmount = "";
  let buyAmount = "";
  if (driver === "sell") {
    sellAmount = amount;
    buyAmount = rate && amount !== "" ? format(value * rate) : "";
  } else {
    buyAmount = amount;
    sellAmount = rate && amount !== "" ? format(value / rate) : "";
  }

  function swap() {
    setFrom(to);
    setTo(from);
  }

  return (
    <section className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-semibold">货币兑换计算器</h2>
        <div className="rounded-xl bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-end">
            <CurrencySelect id="from" label="卖出货币" value={from} onChange={setFrom} />
            <button
              type="button"
              onClick={swap}
              aria-label="交换货币"
              className="mx-auto flex size-11 items-center justify-center rounded-full border border-brand text-brand hover:bg-brand hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="size-5 rotate-90 md:rotate-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 7h13l-4-4M17 17H4l4 4" />
              </svg>
            </button>
            <CurrencySelect id="to" label="买入货币" value={to} onChange={setTo} />
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <AmountInput
              id="sell-amount"
              label="卖出金额"
              value={sellAmount}
              onChange={(v) => {
                setAmount(v);
                setDriver("sell");
              }}
            />
            <AmountInput
              id="buy-amount"
              label="买入金额"
              value={buyAmount}
              onChange={(v) => {
                setAmount(v);
                setDriver("buy");
              }}
            />
            <AmountInput id="rate" label="兑换汇率" value={rate ? format(rate) : ""} readOnly />
          </div>

          <p className="mt-4 text-sm text-black/60" aria-live="polite">
            {rate
              ? `1 ${currencies[from].name} ≈ ${format(rate)} ${currencies[to].name}，此汇率仅供参考。`
              : `暂不提供 ${currencies[from].name} 兑 ${currencies[to].name} 的报价，请联系我们获取。`}
          </p>
        </div>
      </div>
    </section>
  );
}
