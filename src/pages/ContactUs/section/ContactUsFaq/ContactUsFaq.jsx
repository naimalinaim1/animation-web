import FaqItems from "../../../Shared/FAQ/FaqItems";

const ContactUsFaq = () => {
  return (
    <section className="w-[94%] max-w-4xl mx-auto my-10 md:my-24 py-10 px-2">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-[36px] font-bold mb-2">
          Frequently asked questions
        </h2>
        <p>We{"'"}ve already answered some of our commonly asked questions.</p>
      </div>
      <FaqItems />
    </section>
  );
};

export default ContactUsFaq;
