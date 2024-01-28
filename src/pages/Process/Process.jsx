import { lazy, Suspense } from "react";
import CallToAction from "../Shared/CallToAction/CallToAction";

// Lazy-loaded components
const ProcessHero = lazy(() => import("./ProcessHero/ProcessHero"));
const ProcessMakeVideo = lazy(() =>
  import("./ProcessMakeVideo/ProcessMakeVideo")
);

const Process = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <ProcessHero />
        <ProcessMakeVideo />
        <CallToAction />
      </div>
    </Suspense>
  );
};

export default Process;
