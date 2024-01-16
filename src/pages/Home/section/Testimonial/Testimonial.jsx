// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";
import Button from "../../../../components/Button";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      companyName: "Agency Armory",
      name: "DAVID BUSTLE",
      rating: "Highly recommend",
      description:
        "Vidiosa team are awesome. I’ve ran multiple projects with them. They can take my crazy scripts and ideas and make animation magic.",
    },
    {
      id: 2,
      companyName: "Bookvip.com",
      name: "MARCO TORRES",
      rating: "Highly recommend",
      description:
        "I highly recommend Vidiosa for all of your video production needs. They have done outstanding work for us on multiple projects and have consistently delivered high-quality videos with a quick turnaround time.",
    },
    {
      id: 3,
      companyName: "gfunnel",
      name: "CAM GARLICK",
      rating: "Amazing",
      description:
        "I’d suggest not buying it so this way all of us that do buy it have an amazing product while you have nothing. ????",
    },
    {
      id: 4,
      companyName: "Hydro Chat",
      name: "CODY LUNSFORD",
      rating: "Would recommend",
      description:
        "It was great working with Vidiosa. They responded to all of my requests and made sure the video was how I wanted it. They do all of their videos custom, so you can pretty much change anything that you want in the video.",
    },
    {
      id: 5,
      companyName: "Strategy Maverick",
      name: "JARED WARNER",
      rating: "Fantastic finished product",
      description:
        "The video Vidiosa team created gets lots of compliments. Great work. I will use their service again.",
    },
    {
      id: 6,
      companyName: "High Lead",
      name: "CHRIS HELMS",
      rating: "Very satisfied",
      description:
        "Vidiosa went the extra mile to understand our product and hear from our team members to capture our ideas and translate them into a visual narrative. Very satisfied with their team, process, creativity, and video produced.",
    },
  ];

  return (
    <section className="mt-52 bg-[#1A2233] py-20 text-white">
      <div className="text-center">
        <MainTitle>Clients Testimonials</MainTitle>
        <SubTitle>
          Collaborate with us for an easy, exciting, and beneficial experience.
        </SubTitle>
        <div className="mt-6">
          <Button>Schedule A Call</Button>
        </div>
      </div>
      <div className="mt-20 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          initialSlide={3}
          loop={true}
          className="mySwiper select-none"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="card bg-[#1A2233]"
                style={{ boxShadow: "1px 2px 2px 2px #ff9344" }}
              >
                <figure className="px-10 pt-10">
                  <img
                    src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="rounded-full w-44 h-44"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <p className="primary-color font-medium">
                    {item.companyName}
                  </p>
                  <h2 className="card-title">{item.name}</h2>
                  <p className="mt-5  primary-color text-5xl">*****</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
