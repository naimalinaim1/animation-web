import PropTypes from "prop-types";

const Service = ({ service }) => {
  const { img, title, description } = service;
  return (
    <div>
      <div className="flex justify-center">
        <img src={img} alt="" />
      </div>
      <p className="text-2xl font-medium text-center my-6">{title}</p>
      <p className="text-lg text-justify w-[85%] mx-auto md:w-full">{description}</p>
    </div>
  );
};

Service.propTypes = {
  service: PropTypes.object.isRequired,
};

export default Service;
