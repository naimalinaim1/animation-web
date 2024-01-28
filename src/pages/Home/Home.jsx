import { lazy, Suspense } from "react";

const Hero = lazy(() => import("./section/Hero/Hero"));
const Services = lazy(() => import("./section/Services/Services"));
const TrustBar = lazy(() => import("./section/TrustBar/TrustBar"));
const OurWork = lazy(() => import("./section/OurWork/OurWork"));
const GetStarted = lazy(() => import("./section/GetStarted/GetStarted"));
const Testimonial = lazy(() => import("./section/Testimonial/Testimonial"));
const Discussion = lazy(() => import("./section/Discussion/Discussion"));
const WhyNeedVideo = lazy(() => import("./section/WhyNeedVideo/WhyNeedVideo"));
const FaqSection = lazy(() => import("./section/FaqSection/FaqSection"));
const Team = lazy(() => import("./section/Team/Team"));
const CallToAction = lazy(() => import("../Shared/CallToAction/CallToAction"));

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Hero />
        <Services />
        <TrustBar />
        <OurWork />
        <GetStarted />
        <Testimonial />
        <Discussion />
        <WhyNeedVideo />
        <FaqSection />
        <Team />
        <CallToAction />
      </div>
    </Suspense>
  );
};

export default Home;
