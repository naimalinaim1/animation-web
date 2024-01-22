import FaqItem from "./FaqItem";

const FaqItems = () => {
  // faq data
  const faqData = [
    {
      id: 1,
      question:
        "Why should you choose Animation Web as your explainer video company?",
      answerList: [
        "Here at Animation Web, not only do we care for your company and your results, but we take pride in our own work. And with each and every member included in our team having outstanding qualifications and talent, there’s no reason for you not to!",
        "Plus, when it comes to making animated video content, there’s no one more skilled or more enthusiastic about our industry as us. With an Ironclad and air-tight creation process, we’re bound to create the perfect pieces of content for your unique business.",
        "Let’s make Animation Web your go-to explainer video company.",
      ],
    },
    {
      id: 2,
      question: "How much do our video production services cost?",
      answerList: [
        "Although the pricing of any given piece of content we may create ranges on length, detail, creation time, and other factors, most animated videos we create for our clients can range from $2000 to $10000",
        "Unfortunately, we can’t give you an exact quote before discussing the scope of your project beforehand. However, if you’d like to get a quote on your project, feel free to contact us anytime or use our pricing estimator!",
      ],
    },
    {
      id: 3,
      question: "How long does It take?",
      answerList: [
        "Although it may seem like an easy feat, it takes quite a bit of effort and time in order to put together one of our animated explainer videos. There’s tons of time allotted to research, preparation, production, revisions, and finalizing your animated video.",
        "With that said, we still like to maintain a timeline for each project that will leave us the time needed to create an amazing finished project without keeping you waiting too long. You can expect your project to be completed within 14 days to 2 Months.",
        "However, if that’s already too long, we do offer an expedited delivery option, meaning you’ll get your animated video quicker for a higher price.",
      ],
    },
    {
      id: 4,
      question: "What includes our explainer video production service?",
      answerList: [
        "Included in our explainer video production service is everything needed to have an immersive, compelling video that perfectly tells your brand’s, product’s, or concept’s story. You’ll be getting everything from input to the initial style of the video to making changes to the final product once it’s done!",
        "You’ll also be getting exclusive attention from our team of experts, who all specialize in specific aspects of creating a phenomenal explainer video for your business. From the director to the scriptwriter to the animator, you’ll have the best in the business at your side, all contracted from one spot!",
      ],
    },
    {
      id: 5,
      question: "Can you benefit from more than one video?",
      answerList: [
        "Of Course you can! We know all kinds of businesses that have ordered another or multiple more videos after seeing how the first one came out. Tons of businesses like to have these explainer videos spread out through their sales funnels, in their training courses, or for different products on their website.",
        "Depending on your business structure, there could absolutely be a use for having multiple of our animated videos in your business, and we’d love to create them!",
      ],
    },
    {
      id: 6,
      question: "What’s the best way to get started?",
      answerList: [
        "The best and easiest way to get started is by going to our ‘contact us’ page and filling out the form in order to fill us in on the general scope of the project and what kind of business you’re a part of.",
        "From there we’ll get you a quote based on the scope of the project and get a good time scheduled to hop on the phone and fill out the rest of the details before beginning your custom animated video.",
        "If you’re unsure about the general details of your project but have a few questions for us, feel free to use one of the alternative communication methods listed at the top of our contact us page. We’d love to hear from you!",
      ],
    },
    {
      id: 7,
      question: "What payment options are available?",
      answerList: [
        "Sometimes having limited payment options can make it difficult to get a project started, which is why we’ve gone out of our way to make this part of the process as easy as possible.",
        "Regarding payment options, you’re able to use either electronic transfer, or direct deposit. If you have any questions or concerns regarding payment methods don’t hesitate to reach out to us. We’ll be sure to answer your questions as soon as possible",
      ],
    },
    {
      id: 8,
      question: "What languages do you cover with your services?",
      answerList: [
        "Communication between our team and you and your team is essential when creating a piece of animated video content. The main language we use when working with our clients is English. However, we can also work in other languages if you require.",
      ],
    },
  ];

  return (
    <div>
      {faqData.map((faqItem) => (
        <FaqItem key={faqItem.id} faqItem={faqItem} />
      ))}
    </div>
  );
};

export default FaqItems;
