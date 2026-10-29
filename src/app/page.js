import { site } from "@/config/site";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24">
      <h1 className="text-4xl font-bold">{site.name}</h1>
      <p className="mt-4 text-lg text-black/70">
        Homepage placeholder — rebuild the sections of quaternity.com.au here.
      </p>
    </section>
  );
}
