import React from "react";
import FeaturesSection from "./FeaturesSection";
import PersonalAndBusiness from "./PersonalAndBusiness";
import PriceSection from "./PriceSection";
import StatsPanel from "./StatsPanel";

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
