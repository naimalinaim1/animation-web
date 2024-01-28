import PropTypes from "prop-types";

const MainTitle = ({ children }) => {
  return (
    <h2 className="primary-color text-3xl md:text-[36px] font-bold">
      {children}
    </h2>
  );
};

MainTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MainTitle;
