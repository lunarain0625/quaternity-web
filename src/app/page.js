import Hero from "@/components/home/Hero";
import RatesTable from "@/components/home/RatesTable";
import RateCalculator from "@/components/home/RateCalculator";
import About from "@/components/home/About";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RatesTable />
      <RateCalculator />
      <About />
    </>
  );
}
