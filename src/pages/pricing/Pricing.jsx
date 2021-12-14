import React from "react";
import useBreakpoint from "use-breakpoint";
import StatsPanel from "../../components/stats-panel/StatsPanel";
import PriceSection from "../../components/tariff-plans/PriceSection";
import { BREAKPOINTS } from "../../constants";
import useStyles from "./styles";

const Pricing = () => {
  const classes = useStyles();
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  const isMobile = ["smallMobile", "mobile"].includes(breakpoint);

  return (
    <div>
      <div className="page-title">{isMobile ? "price" : "tariff plans"}</div>
      <div className="page-subtitle">Online storage</div>
      <div className={classes.priceWrapper}>
        <PriceSection />
      </div>
      <StatsPanel />
    </div>
  );
};

export default Pricing;
