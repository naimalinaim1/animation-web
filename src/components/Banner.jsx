import PropTypes from "prop-types";

import Button from "./Button";

const Banner = ({ title, description }) => {
  return (
    <section className="bg-[#1A2233]">
      <div className="my_container py-24">
        <article className="grid grid-cols-12 items-center text-white">
          <div className="col-span-8">
            <h1 className="text-6xl leading-snug pr-10 font-bold">{title}</h1>
            <p className="text-lg leading-8 mt-6 w-11/12">{description}</p>
          </div>
          <div className="col-span-4 flex justify-end">
            <Button link="/contact-us/">Get Started</Button>
          </div>
        </article>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Banner;
