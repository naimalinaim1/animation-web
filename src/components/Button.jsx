import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ children, link }) => {
  return (
    <Link
      to={link}
      className="bg-[#ff9344] text-white inline-block text-lg font-medium py-4 px-6 rounded-md hover:bg-[#ffad64] uppercase"
    >
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
