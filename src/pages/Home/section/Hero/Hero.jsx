import Button from "../../../../components/Button";
import storytellingPowerhouse from "../../../../assets/storytellingPowerhouse.gif";
const Hero = () => {
  return (
    <section className="mt-16">
      <div className="grid lg:grid-cols-2 gap-4 xl:gap-8 items-center">
        <div>
          <h1 className="lg:text-5xl xl:text-6xl lg:leading-[64px] xl:leading-[80px]  font-bold">
            Bringing your imagination to life, one frame at a time.
          </h1>
          <p className="mt-4 mb-8 leading-relaxed text-lg text-justify pr-4">
            Animat Studio is an animated company. We work with explainer videos,
            promotional videos, feature showcasing videos, and onboarding
            videos.
            <strong>
              We are a highly skilled team capable of crafting captivating
              videos that convert effectively.
            </strong>
          </p>
          <Button>GET IN TOUCH</Button>
        </div>
        <div>
          <img src={storytellingPowerhouse} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
