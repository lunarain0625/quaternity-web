import Image from "next/image";
import { site } from "@/config/site";

// The banner artwork already contains the logo and slogan, so the text is
// repeated in a visually hidden heading for search engines and screen readers.
export default function Hero() {
  return (
    <section className="bg-surface">
      <h1 className="sr-only">{site.name} — 专业换汇服务，连接全球机遇</h1>
      <Image
        src="/images/hero.jpg"
        alt="专业换汇服务，连接全球机遇。安全 · 专业 · 高效 · 信赖"
        width={1600}
        height={900}
        priority
        sizes="100vw"
        className="mx-auto h-auto w-full max-w-[1600px]"
      />
    </section>
  );
}
