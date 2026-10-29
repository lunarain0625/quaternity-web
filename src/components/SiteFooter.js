import { site } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-black/60">
        © {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
