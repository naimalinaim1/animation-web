import CallToAction from "../Shared/CallToAction/CallToAction";
import CaseStudyHero from "./section/CaseStudyHero/CaseStudyHero";
import CaseStudyMain from "./section/CaseStudyMain/CaseStudyMain";

const CaseStudy = () => {
  return (
    <main>
      <CaseStudyHero />
      <CaseStudyMain />
      <CallToAction />
    </main>
  );
};

export default CaseStudy;
