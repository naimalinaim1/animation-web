import PropTypes from "prop-types";

const Work = ({ work }) => {
  const { img, name, category } = work;
  return (
    <div className="card bg-base-100 border rounded-md">
      <figure>
        <img src={img} alt="Work" />
      </figure>
      <div className="py-8 px-2 flex justify-between">
        <h2 className="text-2xl font-medium">{name}</h2>
        <p className="text-2xl text-gray-500">{category}</p>
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.object.isRequired,
};

export default Work;
