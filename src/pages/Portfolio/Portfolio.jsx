import { lazy, Suspense } from "react";
import CallToAction from "../Shared/CallToAction/CallToAction";

// Lazy-loaded components
const PortfolioHero = lazy(() =>
  import("./section/PortfolioHero/PortfolioHero")
);
const PortfolioWork = lazy(() =>
  import("./section/PortfolioWork/PortfolioWork")
);

const Portfolio = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <PortfolioHero />
        <PortfolioWork />
        <CallToAction />
      </div>
    </Suspense>
  );
};

export default Portfolio;
