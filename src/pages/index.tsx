import NavBar from "@/components/navbar";
import Hero from "./website/Hero";
import SmarterInvestment from "./website/SmarterInvestment";
import RiskLevel from "./website/RiskLevel";
import Custom from "./website/Custom";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SmarterInvestment />
      <RiskLevel />
      <Custom/>
    </div>
  );
}
