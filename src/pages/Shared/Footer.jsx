import image from "../../assets/footer-img/footer-logo.png";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A2233] border-t-8 border-[#ff9344]">
        <div className="my_container text-center md:text-left">
          {/* footer link */}
          <div className="py-36 pb-16 md:pb-36">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-0 lg:grid-cols-4 text-gray-300">
              {/* logo and social link */}
              <aside>
                <img src={image} alt="Logo" className="w-[240px] h-[58px] mx-auto md:mx-0" />
                <p className="text-lg my-5 text-gray-300">
                  Vidiosa produces stunning video content such as explainer
                  videos, product videos, walkthrough videos, and promotional
                  videos for large brands and innovative startups.
                </p>
              </aside>
              {/* services link */}
              <nav className="space-y-6 lg:pl-16">
                <header className="text-2xl font-bold text-white mb-8">
                  Services
                </header>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  Explainer Video
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  SaaS Product Videos
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  Partnership
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  Referral Program
                </a></p>
              </nav>
              {/* More */}
              <nav className="space-y-6 lg:pl-20">
                <header className="text-2xl font-bold text-white mb-8">
                  More
                </header>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  About us
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  Contact us
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block hover:text-white">
                  Clutch reviews
                </a></p>
              </nav>
              {/* Contact us */}
              <nav className="space-y-6">
                <header className="text-2xl font-bold text-white mb-8">
                  Contact Us
                </header>
                <p><a className="text-xl cursor-pointer inline-block">
                  Phone: <span className="text-lg">+88 01568-123456</span>
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block ">
                  Email:{" "}
                  <span className="text-lg">hello@animation.web.com</span>
                </a></p>
                <p><a className="text-xl cursor-pointer inline-block">
                  Address:{" "}
                  <span className="text-lg">
                    Zirabo, Ashulia, Dhaka, Bangladesh.
                  </span>
                </a></p>
              </nav>
            </div>
          </div>
          {/* copyright section */}
          <div className="py-6 md:py-14 md:text-xl md:flex justify-between text-white">
            <p>
              Copyright &copy; -{" "}
              <span className="primary-color">Animation LLC</span> | All Right
              Reserved.
            </p>
            <div>
              <p>
                <span className="primary-color">Terms & Conditions </span> |
                <span className="primary-color"> Privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
