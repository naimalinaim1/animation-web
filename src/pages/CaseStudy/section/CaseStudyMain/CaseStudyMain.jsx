import storyBoard from "../../../../assets/case-study-img/image/storyboard-sketches.png";
import storyboardWithIllustrations from "../../../../assets/case-study-img/image/storyboard-with-illustrations.png";
import illustrationsCompilation from "../../../../assets/case-study-img/image/illustrations-compilation.png";
import studyAnimation from "../../../../assets/case-study-img/image/casa-case-study-animation.png";
// animation gif
import reportingDashboard from "../../../../assets/case-study-img/gif/crm-reporting-dashboard.gif";

const CaseStudyMain = () => {
  return (
    <section>
      <div className="my_container my-20 md:my-44">
        {/* image */}
        <div>
          <img className="w-full" src={storyBoard} alt="story Board" />
          <img
            className="w-full"
            src={storyboardWithIllustrations}
            alt="storyboard With Illustrations"
          />
          <img
            className="w-full"
            src={illustrationsCompilation}
            alt="illustrations Compilation"
          />
          <img className="w-full" src={studyAnimation} alt="study Animation" />
        </div>

        {/* animation */}
        <div className="grid md:grid-cols-2 border">
          <div className="border-2 border-[#ff9344]">
            <img src={reportingDashboard} alt="reportingDashboard" />
          </div>
          <div className="border-2 border-[#ff9344]">
            <img src={reportingDashboard} alt="reportingDashboard" />
          </div>
          <div className="border-2 border-[#ff9344]">
            <img src={reportingDashboard} alt="reportingDashboard" />
          </div>
          <div className="border-2 border-[#ff9344]">
            <img src={reportingDashboard} alt="reportingDashboard" />
          </div>
          <div className="border-2 border-[#ff9344]">
            <img src={reportingDashboard} alt="reportingDashboard" />
          </div>
          <div className="border-2 border-[#ff9344]">
            <img src={reportingDashboard} alt="reportingDashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyMain;
