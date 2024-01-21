import Button from "../../../../components/Button";
import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";

const WhyNeedVideo = () => {
  return (
    <section className="mt-52">
      <div className="my_container">
        {/* title */}
        <div className="text-center">
          <MainTitle>Do You Know</MainTitle>
          <SubTitle>
            Why explainer videos are important for your business?
          </SubTitle>
        </div>
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* item */}
            <div className="shadow-xl text-center px-12 py-14">
              <h2 className="text-6xl font-bold primary-color">54%</h2>
              <p className="text-lg font-medium mt-5">
                of consumers want to see more video content from their brands.
              </p>
            </div>
            {/* item */}
            <div className="shadow-xl text-center px-12 py-14">
              <h2 className="text-6xl font-bold primary-color">65%</h2>
              <p className="text-lg font-medium mt-5">
                of marketers are satisfied with their video marketing ROI.
              </p>
            </div>
            {/* item */}
            <div className="shadow-xl text-center px-12 py-14">
              <h2 className="text-6xl font-bold primary-color">95%</h2>
              <p className="text-lg font-medium mt-5">
                of viewers retain a message when they watch it in a video.
              </p>
            </div>
          </div>
          {/* button */}
          <div className="mt-16 text-center">
            <Button link="/contact-us/">Get Yor Video Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeedVideo;
