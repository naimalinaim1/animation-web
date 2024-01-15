// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./section/Hero/Hero";
import Services from "./section/Services/Services";
import TrustBar from "./section/TrustBar/TrustBar";
import WorkArea from "./section/WorkArea/WorkArea";
import GetStarted from "./section/GetStarted/GetStarted";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <TrustBar />
      <WorkArea />
      <GetStarted />
    </div>
  );
};

export default Home;
