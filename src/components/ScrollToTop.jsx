import { useEffect, useState } from "react";
import arrow from "../assets/basic-icon/arrow-top-icon.svg";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  return (
    showButton && (
      <div
        onClick={handleScrollToTop}
        className="fixed right-4 bottom-4 bg-[#ff9344] p-4 rounded-sm cursor-pointer animate-bounce transition-transform duration-1000"
      >
        <img className="w-8 h-8" src={arrow} alt="" />
      </div>
    )
  );
};

export default ScrollToTop;
