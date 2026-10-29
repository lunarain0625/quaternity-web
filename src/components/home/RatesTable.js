import Image from "next/image";
import { currencies, rates, ratesUpdatedAt } from "@/data/rates";

function Currency({ code }) {
  const c = currencies[code];
  return (
    <span className="flex items-center gap-2 whitespace-nowrap">
      <Image src={c.flag} alt="" width={27} height={17} unoptimized />
      {c.name}
    </span>
  );
}

export default function RatesTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-4 text-center text-2xl font-semibold">实时汇率</h2>
      <div className="overflow-x-auto rounded-md border border-black/10">
        <table className="w-full text-sm">
          <thead className="whitespace-nowrap bg-brand text-left text-white">
            <tr>
              <th className="px-4 py-3 font-medium" colSpan={2}>货币对</th>
              <th className="px-4 py-3 text-right font-medium">现汇买入价</th>
              <th className="px-4 py-3 text-right font-medium">现汇卖出价</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((r) => (
              <tr key={`${r.from}-${r.to}`} className="border-t border-black/5 even:bg-surface">
                <td className="px-4 py-2.5"><Currency code={r.from} /></td>
                <td className="px-4 py-2.5"><Currency code={r.to} /></td>
                <td className="px-4 py-2.5 text-right tabular-nums">{r.buy.toFixed(4)}</td>
                <td className="px-4 py-2.5 text-right tabular-nums">{r.sell.toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-sm text-red-600">
        更新时间为：{ratesUpdatedAt} 此汇率仅供参考
      </p>
    </section>
  );
}
