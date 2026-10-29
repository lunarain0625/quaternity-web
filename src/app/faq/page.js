import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "常见问答",
  description: "关于大湾金融的资质、跨境交易、锁价规则等常见问题解答。",
};

const faqs = [
  {
    q: "公司有什么的资质和安全保障？",
    a: "我司是澳洲登记注册的公司，受澳洲政府(Australian Government)、澳大利亚证券和投资委员会(ASIC)和澳洲反洗钱中心(AUSTRAC)监管，保证每一笔交易的安全性。",
  },
  {
    q: "人不在澳洲，可以和你们交易吗？",
    a: "可以。我们希望您在第一次交易时能亲临我们的办公室，以便我们能够为您建立客户档案；但是对于确实无法前来的客户，您可以通过传真或电邮的方式进行身份认证。在交易时，只需要联系我们的交易员即可。",
  },
  { q: "锁价之后必须交易吗？", a: "是的，必须交易！" },
  { q: "锁价后，账户有效期多久？", a: "出于安全保障，请您在1小时内完成转账。" },
];

export default function FaqPage() {
  return (
    <>
      <PageBanner title="常见问答" />
      <section className="mx-auto max-w-4xl space-y-3 px-4 py-14">
        {faqs.map((item, i) => (
          // Native <details> accordion; the first answer starts open like the old site.
          <details
            key={item.q}
            open={i === 0}
            className="group rounded-lg bg-surface open:ring-1 open:ring-brand/40"
          >
            <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 font-medium group-open:text-brand [&::-webkit-details-marker]:hidden">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand text-white transition group-open:rotate-90">
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
              {i + 1}. {item.q}
            </summary>
            <p className="px-5 pb-5 pl-14 leading-relaxed text-black/70">{item.a}</p>
          </details>
        ))}
      </section>
    </>
  );
}
