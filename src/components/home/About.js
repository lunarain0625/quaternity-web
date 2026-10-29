import Image from "next/image";

const reasons = [
  {
    title: "安全",
    icon: "/images/icons/safe.png",
    text: "经过多年的经营，秉承着安全合规，便利快捷，最优汇率的服务理念，大湾金融在多国积累了众多的客户资源。",
  },
  {
    title: "便捷高效",
    icon: "/images/icons/convenient.png",
    text: "大湾金融为国际贸易商，投资者，移民人士，留学生提供便捷的汇兑服务，让客户通过网络操作完成汇款。",
  },
  {
    title: "诚信服务",
    icon: "/images/icons/integrity.png",
    text: "多年来我们的专业团队为多国客户提供严谨，诚信的服务，我们有专人即时跟进客户的诉求。我们的服务申请简易，费用透明，绝无隐藏收费。",
  },
  {
    title: "最优汇率",
    icon: "/images/icons/best-rate.png",
    text: "我们专业的交易专员将随时帮助客户关注汇率变动，在最佳时机帮助客户锁定最佳汇率。",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14">
      <h2 className="text-center text-2xl font-semibold">关于我们</h2>
      <div className="mx-auto mt-6 max-w-3xl space-y-4 leading-relaxed text-black/75">
        <p>
          大湾金融是一家以国际汇款为主营业务的专业金融公司，为广大的投资人、移民、进出口企业和商业人士提供货币结算及国际汇款的金融服务。
        </p>
        <p>
          公司拥有与澳洲银行密切的合作关系、实时的交易系统以及行业领先的合规系统，为客户提供最安全、稳定，价格最优的国际汇款业务。大湾金融为您的资金安全保驾护航。
        </p>
      </div>

      <h2 className="mt-14 text-center text-2xl font-semibold">选择我们的原因</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-xl border border-black/10 p-6 text-center transition hover:border-brand hover:shadow-md">
            <Image src={r.icon} alt="" width={64} height={64} className="mx-auto" />
            <h3 className="mt-4 text-lg font-semibold text-brand">{r.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-black/65">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
