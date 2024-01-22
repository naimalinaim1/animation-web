import PropTypes from "prop-types";
import checkMark from "../../../../assets/basic-icon/check-mark-icon.svg";

const ContactUsDiscussItem = ({ discussItem }) => {
  return (
    <div className="flex items-start gap-4 border-b py-5 mb-1">
      <img src={checkMark} className="mt-1" alt="check mark icon" />
      <p className="text-[18px] leading-relaxed">{discussItem}</p>
    </div>
  );
};

ContactUsDiscussItem.propTypes = {
  discussItem: PropTypes.string.isRequired,
};

export default ContactUsDiscussItem;
