import PropTypes from "prop-types";

const ContactUsDiscussItem = ({ discussItem }) => {
  return (
    <div className="flex items-center gap-4 border-b py-5 mb-1">
      <p className="text-4xl">O</p>
      <p className="text-[18px] leading-relaxed">{discussItem}</p>
    </div>
  );
};

ContactUsDiscussItem.propTypes = {
  discussItem: PropTypes.string.isRequired,
};

export default ContactUsDiscussItem;
