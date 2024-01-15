import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="bg-[#ff9344] text-white text-lg font-medium py-4 px-6 rounded-md hover:bg-[#ffad64] uppercase">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
