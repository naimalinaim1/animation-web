import PropTypes from "prop-types";

const SubTitle = ({ children }) => {
  return <p className="text-2xl mt-2">{children}</p>;
};

SubTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SubTitle;
