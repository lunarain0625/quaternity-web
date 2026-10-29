import PageBanner from "@/components/PageBanner";
import { site } from "@/config/site";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "联系我们",
  description: "大湾金融墨尔本、悉尼、堪培拉门店的电话、邮箱和地址。",
};

function Icon({ d }) {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
      <svg viewBox="0 0 24 24" className="size-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} />
      </svg>
    </span>
  );
}

const icons = {
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z",
  email: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm18 2-10 7L2 6",
  address: "M12 22s7-6.1 7-12a7 7 0 0 0-14 0c0 5.9 7 12 7 12zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
};

function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function StoreCard({ store }) {
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`;
  return (
    <div className="rounded-xl border border-black/10 p-5">
      <h3 className="text-lg font-semibold">{store.name}</h3>
      <dl className="mt-4 space-y-3 text-sm">
        <div className="flex items-start gap-3">
          <Icon d={icons.phone} />
          <div>
            <dt className="text-black/50">电话</dt>
            <dd><a href={telHref(store.phone)} className="hover:text-brand">{store.phone}</a></dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon d={icons.email} />
          <div>
            <dt className="text-black/50">邮箱</dt>
            <dd><a href={`mailto:${store.email}`} className="break-all hover:text-brand">{store.email}</a></dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Icon d={icons.address} />
          <div>
            <dt className="text-black/50">地址</dt>
            <dd>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                {store.address}
              </a>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageBanner title="联系我们" />
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-semibold">请与我们联系</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {site.stores.map((store) => (
              <StoreCard key={store.name} store={store} />
            ))}
          </div>
          <div className="rounded-xl bg-surface p-6">
            <h2 className="mb-5 text-xl font-semibold">在线留言</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
