import MainTitle from "../../../../components/MainTitle";
import SubTitle from "../../../../components/SubTitle";

import productIcon from "../../../../assets/discussion-icon/product-concept-icon.svg";
import boostIcon from "../../../../assets/discussion-icon/engagement-boost-icon.svg";
import audienceIcon from "../../../../assets/discussion-icon/audience-intrigue-icon.svg";
import brandIcon from "../../../../assets/discussion-icon/brand-awareness-icon.svg";
import conversionIcon from "../../../../assets/discussion-icon/conversion-boost-icon.svg";
import highValueIcon from "../../../../assets/discussion-icon/high-value-leads-icon.svg";
import DiscussionItem from "./DiscussionItem";

const Discussion = () => {
  const discussionData = [
    {
      id: 1,
      img: productIcon,
      title: "Introduce products & concepts",
      description:
        "Whether you’ve got a product/service you think would help your customers, or you’ve got a basic concept you’d like to explain, we can make a fun and easy-to-watch video that gets the point across.",
    },
    {
      id: 2,
      img: boostIcon,
      title: "Boost your engagement",
      description:
        "Quickly level up your engagement on your website with an explainer video. These short videos are easy to watch compared to paragraphs of text, and are highly digestible to new or recurring visitors.",
    },
    {
      id: 3,
      img: audienceIcon,
      title: "Intrigue your audience",
      description:
        "You have something your audience is interested in, so why not make it interesting to watch? Video content is a great way to develop a good relationship with your visitors and get them in the loop on new & exciting products or topics.",
    },
    {
      id: 4,
      img: brandIcon,
      title: "Spread your awareness",
      description:
        "Increase brand awareness along with your mission. Introducing your purpose as a business can help tremendously with sales, especially when it is in a form that people like to watch!",
    },
    {
      id: 5,
      img: conversionIcon,
      title: "Upgrade conversion-rates",
      description:
        "One of the most important things when selling your product or service is letting your prospects know why they would benefit from your product. The easier people can grasp the benefits, the higher your conversion rates will go.",
    },
    {
      id: 6,
      img: highValueIcon,
      title: "Gain high-value leads",
      description:
        "With a prospect watching one of your videos, when they decide to get serious and take action, they will already know a majority of the information needed to buy. Make it a simple process for your visitors with an explainer video.",
    },
  ];

  return (
    <section className="my-20 md:my-48">
      <div className="my_container">
        {/* title */}
        <div className="text-center">
          <MainTitle>Why use animated video content on your website?</MainTitle>
          <SubTitle>
            <span className="block text-lg md:text-2xl md:w-4/5 mx-auto">
              With increased conversions, longer customer retention, and higher
              click-through rates, the real question is why not choose animated
              video content?
            </span>
          </SubTitle>
        </div>
        {/* discussion item */}
        <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-3 lg:gap-8 mt-20">
          {discussionData.map((discussionItem) => (
            <DiscussionItem
              key={discussionItem.id}
              discussionItem={discussionItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discussion;
