// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./section/Hero/Hero";
import Services from "./section/Services/Services";
import TrustBar from "./section/TrustBar/TrustBar";
import WorkArea from "./section/WorkArea/WorkArea";
import GetStarted from "./section/GetStarted/GetStarted";
import Testimonial from "./section/Testimonial/Testimonial";
import Discussion from "./section/Discussion/Discussion";
import WhyNeedVideo from "./section/WhyNeedVideo/WhyNeedVideo";
import FaqSection from "./section/FaqSection/FaqSection";
import Team from "./section/Team/Team";
import CallToAction from "./section/CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <TrustBar />
      <WorkArea />
      <GetStarted />
      <Testimonial />
      <Discussion />
      <WhyNeedVideo />
      <FaqSection />
      <Team />
      <CallToAction />
    </div>
  );
};

export default Home;
