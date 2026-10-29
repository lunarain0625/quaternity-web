import { site } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white/70">
      <div className="mx-auto max-w-6xl px-4 py-5 text-center text-sm">
        版权所有 © {site.name} {site.nameEn}
      </div>
    </footer>
  );
}
