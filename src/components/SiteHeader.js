import Link from "next/link";
import { site } from "@/config/site";

export default function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold">
          {site.name}
        </Link>
        <nav className="flex gap-6 text-sm">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
