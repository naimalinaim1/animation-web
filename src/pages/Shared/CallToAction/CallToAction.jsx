import Button from "../../../components/Button";
import image from "../../../assets/storytellingPowerhouse.gif";

const CallToAction = () => {
  return (
    <section
      className="py-16 mt-6"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(255,255,255,0.74) 0%,rgba(255,246,235,0.97) 99%)",
      }}
    >
      <div className="my_container">
        <div className="grid grid-cols-12 gap-6 items-center">
          {/* first column */}
          <div className="col-span-7 xl:col-span-6">
            <h1 className="text-6xl font-bold leading-tight animate-text bg-gradient-to-r from-[#1A2233] via-[#FF9243] to-[#FF9243] inline-block text-transparent bg-clip-text">
              Let us tell your story, loud and clear!
            </h1>
            <p className="mt-6 mb-8 text-lg xl:w-3/4">
              Don{"'"}t let confusion and lack of understanding hold your
              business back any longer.
            </p>
            <Button link="/contact-us/">Schedule A Call</Button>
          </div>
          {/* second column */}
          <div className="col-span-5 xl:col-span-6 px-10">
            <img
              className="pb-10"
              src={image}
              alt="Story telling power house"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
