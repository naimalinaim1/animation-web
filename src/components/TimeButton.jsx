import PropTypes from "prop-types";

const TimeButton = ({ children, selectedTime, handleButtonClick }) => {
  return (
    <button
      onClick={() => handleButtonClick(children)}
      className={`border border-[var(--primary-color)] rounded-md py-2 w-36 text-center cursor-pointer hover:text-white ${
        selectedTime == children
          ? "bg-[var(--primary-color)]"
          : "hover:bg-[var(--primary-color)]"
      }`}
    >
      {children}
    </button>
  );
};

TimeButton.propTypes = {
  children: PropTypes.any.isRequired,
  selectedTime: PropTypes.any.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default TimeButton;
