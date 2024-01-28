import Button from "../../../../components/Button";
import storytellingPowerhouse from "../../../../assets/hero-img/storytellingPowerhouse.gif";
const Hero = () => {
  return (
    <section className="mt-16">
      <div className="my_container">
        <article className="text-center grid lg:grid-cols-2 gap-4 xl:gap-8 2xl:gap-24 items-center">
          {/* text */}
          <div>
            <h1 className="text-3xl md:text-left md:text-6xl md:leading-normal lg:text-5xl xl:text-6xl lg:leading-[64px] xl:leading-[80px]  font-bold">
              Bringing your imagination to life, one frame at a time.
            </h1>
            <p className="mt-4 mb-8 leading-relaxed text-lg md:text-justify pr-4">
              Animat Studio is an animated company. We work with explainer
              videos, promotional videos, feature showcasing videos, and
              onboarding videos.
              <strong>
                We are a highly skilled team capable of crafting captivating
                videos that convert effectively.
              </strong>
            </p>
            <p className="md:text-left">
            <Button link="/contact-us/">GET IN TOUCH</Button>
            </p>
          </div>
          {/* image */}
          <div>
            <img src={storytellingPowerhouse} alt="" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
