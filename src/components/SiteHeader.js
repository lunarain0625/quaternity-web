import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";

function NavLink({ item, className }) {
  if (item.external) {
    return (
      <a href={item.href} className={className}>
        {item.label}
      </a>
    );
  }
  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-brand text-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Image src="/images/logo.png" alt="" width={32} height={32} />
          {site.name}
        </Link>

        <nav className="hidden gap-6 text-sm md:flex">
          {site.nav.map((item) => (
            <NavLink key={item.href} item={item} className="hover:opacity-80" />
          ))}
        </nav>

        {/* Mobile menu: native <details> so it works without client JS */}
        <details className="group relative md:hidden">
          <summary
            aria-label="菜单"
            className="flex size-9 cursor-pointer list-none items-center justify-center rounded [&::-webkit-details-marker]:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" className="group-open:hidden" />
              <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
            </svg>
          </summary>
          <nav className="absolute right-0 mt-2 w-44 overflow-hidden rounded-md bg-white text-foreground shadow-lg">
            {site.nav.map((item) => (
              <NavLink
                key={item.href}
                item={item}
                className="block border-b border-black/5 px-4 py-3 text-sm last:border-0 hover:bg-surface"
              />
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
