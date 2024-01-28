import { lazy, Suspense } from "react";

import CallToAction from "../Shared/CallToAction/CallToAction";
const CaseStudyHero = lazy(() =>
  import("./section/CaseStudyHero/CaseStudyHero")
);
const CaseStudyMain = lazy(() =>
  import("./section/CaseStudyMain/CaseStudyMain")
);

const CaseStudy = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <CaseStudyHero />
        <CaseStudyMain />
        <CallToAction />
      </div>
    </Suspense>
  );
};

export default CaseStudy;
