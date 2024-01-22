import CallToAction from "../Shared/CallToAction/CallToAction";
import PortfolioHero from "./section/PortfolioHero/PortfolioHero";
import PortfolioWork from "./section/PortfolioWork/PortfolioWork";

const Portfolio = () => {
  return (
    <main>
      <PortfolioHero />
      <PortfolioWork />
      <CallToAction />
    </main>
  );
};

export default Portfolio;
