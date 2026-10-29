import Image from "next/image";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "产品与服务",
  description: "大湾金融提供人民币、澳币、美元、港币等国际主要货币之间的汇款和兑换业务。",
};

const steps = [
  {
    icon: "/images/process/step-1.png",
    title: "咨询专业顾问 注册成为会员",
    text: "客户提供汇款人及收款人KYC资料，完成信息审核，通过信息审核之后客户可进行交易。",
  },
  {
    icon: "/images/process/step-2.png",
    title: "确认汇率 索取账号",
    text: "我们专业的汇款交易员会和您确认实时牌价，客户可以随时锁定汇率及索取收款账户详细信息。",
  },
  {
    icon: "/images/process/step-3.png",
    title: "完成汇款并提供凭证",
    text: "客户通过网络汇款或者柜台转账的方式，将外币转入到大湾金融的账户，完成汇款后，请将转款截图发送到大湾金融的客服邮箱。",
  },
  {
    icon: "/images/process/step-4.png",
    title: "提供澳洲收款账户信息",
    text: "我们将核对客户汇款信息及金额，确认收款后，我们将在24-48小时内将客户所需货币转入到客户的注册收款账户。",
  },
];

const services = [
  { title: "投资移民换汇", image: "/images/services/immigration.jpg" },
  { title: "投资置业换汇", image: "/images/services/property.jpg" },
  { title: "留学换汇", image: "/images/services/study.jpg" },
  { title: "进出口贸易换汇", image: "/images/services/trade.jpg" },
];

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="产品与服务" />

      <section className="mx-auto max-w-3xl px-4 py-14 text-center">
        <h2 className="text-2xl font-semibold">我们的服务</h2>
        <p className="mt-5 leading-relaxed text-black/75">
          大湾(Quaternity)金融为广大的个人、企业客户提供国际主要流通货币之间的汇款和兑换业务。
        </p>
        <p className="mt-2 leading-relaxed text-black/75">其中包括：人民币，澳币，美元，港币等。</p>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-center text-2xl font-semibold">人民币兑换澳币流程</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="relative rounded-xl bg-white p-6 text-center shadow-sm">
                <span className="absolute top-4 left-4 flex size-7 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                  {i + 1}
                </span>
                <Image src={step.icon} alt="" width={56} height={56} className="mx-auto" />
                <h3 className="mt-4 font-semibold text-brand">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-semibold">主营服务项目</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <figure key={s.title} className="group overflow-hidden rounded-xl border border-black/10">
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="py-4 text-center font-medium">{s.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
