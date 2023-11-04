import NavBar from "@/components/navbar";
import Hero from "./website/Hero";
import SmarterInvestment from "./website/SmarterInvestment";
import RiskLevel from "./website/RiskLevel";
import Custom from "./website/Custom";
import Taxes from "./website/Taxes";
import Fee from "./website/Fee";
import Invest from "./website/Invest";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <SmarterInvestment />
      <RiskLevel />
      <Taxes />
      <Custom />
      <Fee />
      <Invest/>
    </div>
  );
}
