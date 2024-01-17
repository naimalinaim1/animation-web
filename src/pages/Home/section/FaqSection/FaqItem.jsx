import PropTypes from "prop-types";

const FaqItem = ({ faqItem }) => {
  const { question, answerList } = faqItem;
  return (
    <div className="collapse collapse-plus border shadow-md mb-3">
      <input type="radio" name="my-accordion" />
      <div className="collapse-title text-lg font-bold">{question}</div>
      <div className="collapse-content text-gray-700">
        {answerList.map((answerItem, index) => (
          <p className="mb-3" key={index}>
            {answerItem}
          </p>
        ))}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faqItem: PropTypes.object.isRequired,
};
export default FaqItem;
