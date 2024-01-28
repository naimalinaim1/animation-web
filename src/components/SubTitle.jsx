import PropTypes from "prop-types";

const SubTitle = ({ children }) => {
  return <p className="text-xl md:text-2xl mt-2">{children}</p>;
};

SubTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SubTitle;
