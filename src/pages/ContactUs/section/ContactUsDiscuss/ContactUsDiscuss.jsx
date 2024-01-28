import ContactUsDiscussItem from "./ContactUsDiscussItem";
import "./custom-contactus-styles.css";

const ContactUsDiscuss = () => {
  // discuss data
  const discussData = [
    "The importance of video in today’s digital landscape and how it can help businesses stand out and attract more customers.",
    "The different types of videos we offer, including explainer videos, promotional videos, and walkthrough videos, and how each one can be used to achieve specific marketing goals.",
    "Our process for creating custom videos, including scripting, storyboarding, animation, and post-production, and how we work with clients to ensure their vision is brought to life.",
    "Our portfolio of past work and client testimonials to demonstrate our expertise and the success of our videos in driving results for businesses.",
    "Our pricing options and how we can work with a client’s budget to create a high-quality video that delivers results.",
    "Our fast turnaround time for video production and how we can work efficiently to meet tight deadlines without compromising on quality.",
  ];

  return (
    <section className="w-[94%] max-w-4xl mx-auto my-10 md:my-24 py-10 px-2">
      <h2 className="text-3xl md:text-[36px] font-bold text-center leading-normal mb-10 px-8">
        Below are some points that we will discuss in the meeting.
      </h2>
      <div className="contact-us-discuss px-10 md:px-20">
        {discussData.map((discussItem, index) => (
          <ContactUsDiscussItem key={index} discussItem={discussItem} />
        ))}
      </div>
    </section>
  );
};

export default ContactUsDiscuss;
