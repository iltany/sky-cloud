import React from "react";
import FeaturesSection from "./FeaturesSection";
import PersonalAndBusiness from "./PersonalAndBusiness";
import PriceSection from "../../components/tariff-plans/PriceSection";
import StatsPanel from "../../components/stats-panel/StatsPanel";

const Home = () => {
  return (
    <>
      <PersonalAndBusiness />
      <FeaturesSection />
      <PriceSection />
      <StatsPanel />
    </>
  );
};

export default Home;
