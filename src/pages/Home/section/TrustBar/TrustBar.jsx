import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";
import img1 from "../../../../assets//company-logo/auto-patient-logo-final.png";
import img2 from "../../../../assets/company-logo/homewerx.png";
import img3 from "../../../../assets/company-logo/microphone.png";
import img4 from "../../../../assets/company-logo/rapid.png";
import img5 from "../../../../assets/company-logo/project-vangurds.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const TrustBar = () => {
  return (
    <section className="mt-24 md:my-52">
      <div className="my_container">
        <div className="text-center">
          <MainTitle>Trusted by 4000+ clients</MainTitle>
          <SubTitle>They trust our creative works</SubTitle>
        </div>
        <div className="mt-24">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            effect="slide"
            speed={1000}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} className="block mx-auto" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} className="block mx-auto" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} className="block mx-auto" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} className="block mx-auto" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} className="block mx-auto" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
