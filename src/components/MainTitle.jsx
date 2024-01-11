import PropTypes from "prop-types";

const MainTitle = ({ children }) => {
  return <h2 className="primary-color title-size font-bold">{children}</h2>;
};

MainTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainTitle;
