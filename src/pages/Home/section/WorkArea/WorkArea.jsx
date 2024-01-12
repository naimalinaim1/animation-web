import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";

import img1 from "../../../../assets/work-img/1.webp";
import img2 from "../../../../assets/work-img/2.webp";
import img3 from "../../../../assets/work-img/3.webp";
import img4 from "../../../../assets/work-img/4.webp";
import img5 from "../../../../assets/work-img/5.webp";
import img6 from "../../../../assets/work-img/6.webp";
import Work from "./Work";

const WorkArea = () => {
  const ourWorks = [
    { id: 1, img: img1, name: "Enrollio", category: "SaaS Explainer Video" },
    {
      id: 2,
      img: img2,
      name: "Casa Digital Media",
      category: "SaaS Explainer Video",
    },
    { id: 3, img: img3, name: "Alculus", category: "SaaS Explainer Video" },
    { id: 4, img: img4, name: "Rizzy Crm", category: "SaaS Explainer Video" },
    { id: 5, img: img5, name: "Hydro Chat", category: "SaaS Explainer Video" },
    { id: 6, img: img6, name: "Microfone", category: "SaaS Explainer Video" },
  ];

  return (
    <section className="my-52">
      <div className="text-center">
        <MainTitle>Years of experience and dedication</MainTitle>
        <SubTitle>Our Works</SubTitle>
      </div>
      {/* single work */}
      <div className="mt-24 grid grid-cols-2 gap-16">
        {ourWorks.map((work) => (
          <Work key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
};

export default WorkArea;
