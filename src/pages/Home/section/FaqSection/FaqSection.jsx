import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";
import FaqItems from "../../../Shared/FAQ/FaqItems";

const FaqSection = () => {
  return (
    <section className="mt-52">
      <div className="my_container">
        {/* title */}
        <div className="text-center">
          <MainTitle>FAQ_</MainTitle>
          <SubTitle>
            We{"’"}ve already answered some of our commonly asked questions.
          </SubTitle>
        </div>
        {/* faq_ */}
        <div className="mt-20">
          {/* faq_ item */}
          <div className="md:w-11/12 lg:w-2/3 mx-auto">
            <FaqItems />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
