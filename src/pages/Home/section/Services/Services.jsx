import MainTitle from "../../../../components/MainTitle";

import img1 from "../../../../assets/services-icon/1.png";
import img2 from "../../../../assets/services-icon/2.png";
import img3 from "../../../../assets/services-icon/3.png";
import img4 from "../../../../assets/services-icon/4.png";
import Service from "./Service";
import SubTitle from "../../../../components/SubTitle";
import Button from "../../../../components/Button";

const Services = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "Explainer Video",
      description:
        "Our innovative Explainer Videos specialize in simplifying complex concepts through the power of visual storytelling. We skillfully break down intricate ideas, explain the features of products, and teach effective strategies in a concise and engaging manner. With our simple yet captivating approach, we ensure that viewers easily grasp and retain information, making Explainer Videos an invaluable tool for effective communication and knowledge transfer.",
    },
    {
      id: 2,
      img: img2,
      title: "Promotional Video",
      description:
        "Unleash the power of simplicity with our Explainer Videos - effortlessly conveying complex ideas, presenting products, and educating on strategies through captivating visuals. Simplify the way you communicate and engage your audience with our concise yet impactful Explainer Videos.",
    },
    {
      id: 3,
      img: img3,
      title: "Logo Animation.",
      description:
        "Capture attention and boost brand recognition with our Animated Promotional Videos. Through vibrant animation, we effectively convey your mission and tell the compelling story of your business, leaving a lasting impression on your audience.",
    },
    {
      id: 4,
      img: img4,
      title: "Saas Product Video",
      description:
        "Embark on an immersive journey through our SaaS Product video, offering a guided tour that showcases its features and highlights the numerous benefits it delivers. Let us captivate your audience with a clear and engaging visual experience that leaves an indelible impression",
    },
  ];

  return (
    <section className="mt-52">
      {/* service title */}
      <div className="text-center">
        <MainTitle>Our Services</MainTitle>
        <SubTitle>
          Crafting professional videos for discerning professionals.
        </SubTitle>
        <div className="mt-6">
          <Button>Pricing</Button>
        </div>
      </div>
      {/* service items */}
      <div className="grid grid-cols-2 mt-20 gap-x-6 gap-y-12">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
