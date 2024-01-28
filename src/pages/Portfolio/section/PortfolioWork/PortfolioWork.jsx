import Works from "../../../Shared/Works/Works";

const PortfolioWork = () => {
  return (
    <section className="my_container">
      <div className="grid sm:grid-cols-2 gap-6 lg:gap-16 my-24">
        <Works />
      </div>
    </section>
  );
};

export default PortfolioWork;
