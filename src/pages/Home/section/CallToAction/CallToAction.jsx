import Button from "../../../../components/Button";
import image from "../../../../assets/storytellingPowerhouse.gif";

const CallToAction = () => {
  return (
    <section
      className="py-16 mt-6"
      style={{
        backgroundImage:
          "linear-gradient(180deg,rgba(255,255,255,0.74) 0%,rgba(255,246,235,0.97) 99%)",
      }}
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        <div className="col-span-7">
          <h1 className="text-6xl font-bold leading-tight">
            Let us tell your story, loud and clear!
          </h1>
          <p className="mt-6 mb-8 text-lg">
            Don{"'"}t let confusion and lack of understanding hold your business
            back any longer.
          </p>
          <Button>Schedule A Call</Button>
        </div>
        <div className="col-span-5">
          <img src={image} alt="Story telling power house" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
