import Button from "../../../../components/Button";
import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";
import img1 from "../../../../assets/getstarted-icon/product-consultation-icon.svg";
import img2 from "../../../../assets/getstarted-icon/custom-proposal-icon.svg";
import img3 from "../../../../assets/getstarted-icon/onboarding-session-icon.svg";

const GetStarted = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Let's chat about your product",
      description:
        "We chat to better understand your product, target audience, and goals.",
    },
    {
      id: 2,
      img: img2,
      title: "A tailored plan just for you",
      description:
        "We send a custom proposal based on your needs and expectations.",
    },
    {
      id: 3,
      img: img3,
      title: "Let's get started!",
      description:
        "We start with an onboarding session once you accept the proposal.",
    },
  ];

  return (
    <section className="my-44">
      <div className="my_container">
        {/* title */}
        <div className="text-center">
          <MainTitle>Our Process</MainTitle>
          <SubTitle>Getting started is easy with Animation Web</SubTitle>
          <div className="mt-6">
            <Button link="/contact-us/">Schedule A Call</Button>
          </div>
        </div>
        {/* get started */}
        <div className="grid grid-cols-3 gap-4 mt-28">
          {data.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-2xl">
              <div className="indicator-item indicator-start">
                <span className="bg-[#ff9344] text-white text-3xl font-medium py-4 px-7 rounded-full uppercase inline-block">
                  {item.id}
                </span>
              </div>
              <figure className="px-10 pt-10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-xl w-20 h-20 shadow-lg"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{item.title}</h2>
                <p className="text-xl mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
