import simpleVideo from "../../../../assets/case-study-img/gif/crm-reporting-dashboard.gif";

const CaseStudyHero = () => {
  return (
    <section>
      <div className="my_container">
        <article className="grid grid-cols-12 items-center mt-16">
          <div className="col-span-7">
            <h2 className="text-4xl font-bold">
              Animation Web x Casa Digital Media
            </h2>
            <div className="text-lg space-y-3 my-6 w-10/12">
              <p>
                Casa Digital Media is a marketing automation software designed
                specifically for interior designers.
              </p>
              <p>
                Casa Digital Media partnered with Animation Web to create a
                custom explainer video to showcase the software{"'"}s
                capabilities.
              </p>
            </div>
            <p className="text-center mt-8">
              <a className="primary-color text-lg">Watch the Video</a>
            </p>
          </div>
          <div className="col-span-5">
            <img src={simpleVideo} alt="reporting dashboard gif" />
          </div>
        </article>
      </div>
    </section>
  );
};

export default CaseStudyHero;
