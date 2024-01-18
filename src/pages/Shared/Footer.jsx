import image from "../../assets/footer-logo.png";
const Footer = () => {
  return (
    <footer className="bg-[#1A2233]">
      <div className="w-full max-w-7xl mx-auto  py-28">
        <div className="grid grid-cols-4 text-gray-300">
          {/* logo and social link */}
          <aside>
            <img src={image} alt="Logo" className="w-[240px] h-[58px]" />
            <p className="text-lg my-5 text-gray-300">
              Vidiosa produces stunning video content such as explainer videos,
              product videos, walkthrough videos, and promotional videos for
              large brands and innovative startups.
            </p>
          </aside>
          {/* services link */}
          <nav className="space-y-6 pl-16">
            <header className="text-2xl font-bold text-white mb-8">
              Services
            </header>
            <a className="text-xl cursor-pointer block hover:text-white">
              Explainer Video
            </a>
            <a className="text-xl cursor-pointer block hover:text-white">
              SaaS Product Videos
            </a>
            <a className="text-xl cursor-pointer block hover:text-white">
              Partnership
            </a>
            <a className="text-xl cursor-pointer block hover:text-white">
              Referral Program
            </a>
          </nav>
          {/* More */}
          <nav className="space-y-6 pl-20">
            <header className="text-2xl font-bold text-white mb-8">More</header>
            <a className="text-xl cursor-pointer block hover:text-white">
              About us
            </a>
            <a className="text-xl cursor-pointer block hover:text-white">
              Contact us
            </a>
            <a className="text-xl cursor-pointer block hover:text-white">
              Clutch reviews
            </a>
          </nav>
          {/* Contact us */}
          <nav className="space-y-6">
            <header className="text-2xl font-bold text-white mb-8">
              Contact Us
            </header>
            <a className="text-xl cursor-pointer block">
              Phone: <span className="text-lg">+88 01568-123456</span>
            </a>
            <a className="text-xl cursor-pointer block ">
              Email: <span className="text-lg">hello@animation.web.com</span>
            </a>
            <a className="text-xl cursor-pointer block">
              Address:{" "}
              <span className="text-lg">
                Zirabo, Ashulia, Dhaka, Bangladesh.
              </span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
