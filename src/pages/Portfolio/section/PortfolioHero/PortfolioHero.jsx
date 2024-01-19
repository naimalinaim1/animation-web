import Button from "../../../../components/Button";

const PortfolioHero = () => {
  return (
    <section className="bg-[#1A2233]">
      <div className="my_container py-28">
        <article className="grid grid-cols-12 items-center text-white">
          <div className="col-span-9">
            <h1 className="text-[80px] font-bold">
              We create videos for growth seeking businesses
            </h1>
            <p className="text-lg leading-8 mt-6">
              See how we{"'"}ve helped companies communicate their unique values
              Recommend and drive conversions with our expertly crafted videos.
              Browse our portfolio to discover how we can help your business
              grow and prosper
            </p>
          </div>
          <div className="col-span-3 flex justify-end">
            <Button>Get Started</Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PortfolioHero;
