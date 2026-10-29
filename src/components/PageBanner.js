import Image from "next/image";

// Skyline banner with the page title, shared by the inner pages.
export default function PageBanner({ title }) {
  return (
    <section className="relative h-40 overflow-hidden md:h-56">
      <Image
        src="/images/page-banner.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/35" />
      <h1 className="relative flex h-full items-center justify-center text-2xl font-semibold text-white md:text-3xl">
        {title}
      </h1>
    </section>
  );
}
