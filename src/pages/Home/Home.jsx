// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./section/Hero/Hero";
import Services from "./section/Services/Services";
import TrustBar from "./section/TrustBar/TrustBar";
import OurWork from "./section/OurWork/OurWork";
import GetStarted from "./section/GetStarted/GetStarted";
import Testimonial from "./section/Testimonial/Testimonial";
import Discussion from "./section/Discussion/Discussion";
import WhyNeedVideo from "./section/WhyNeedVideo/WhyNeedVideo";
import FaqSection from "./section/FaqSection/FaqSection";
import Team from "./section/Team/Team";

const Home = () => {
  return (
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
    </div>
  );
};

export default Home;
