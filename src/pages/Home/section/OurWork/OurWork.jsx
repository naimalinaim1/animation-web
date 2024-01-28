import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";
import Button from "../../../../components/Button";
import Works from "../../../Shared/Works/Works";

const OurWork = () => {
  return (
    <section className="my-44 bg-[#FFF9F7] py-20 px-1">
      <div className="my_container ">
        {/* title */}
        <div className="text-center">
          <MainTitle>Our Works</MainTitle>
          <SubTitle>Years of experience and dedication</SubTitle>
          <div className="mt-6">
            <Button link="/contact-us/">Pricing</Button>
          </div>
        </div>
        {/* single work */}
        <div className="mt-24 grid md:grid-cols-2 gap-6 lg:gap-16">
          <Works />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
