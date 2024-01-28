import PropTypes from "prop-types";

const DiscussionItem = ({ discussionItem }) => {
  const { img, title, description } = discussionItem;
  return (
    <div className="hover:shadow-md card hover:scale-110 transform transition-transform ease-in-out duration-3000 hover:transform hover:transition-transform hover:ease-in-out hover:duration-3000">
      <figure>
        <img src={img} alt={title} className="w-20 h-20" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="text-lg sm:text-lg md:text-xl card-title">{title}</h2>
        <p className="text-sm sm:text-base mt-2">{description}</p>
      </div>
    </div>
  );
};

DiscussionItem.propTypes = {
  discussionItem: PropTypes.object.isRequired,
};

export default DiscussionItem;
