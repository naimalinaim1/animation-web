import { Link } from "react-router-dom";
import ActiveLink from "../../components/ActiveLink";

const Header = () => {
  const headerLink = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/portfolio/">Portfolio</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/video-process/">Process</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/case-study/">Case Study</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/contact-us/">Contact Us</ActiveLink>
      </li>
    </>
  );

  return (
    <header className="my_container navbar py-4 px-0 my-6">
      <div className="navbar-start w-full lg:w-2/3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {headerLink}
          </ul>
        </div>
        <Link to="/">
          <h2 className="primary-color font-bold text-2xl">Animation Web</h2>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex px-0">
        <ul className="flex gap-10 font-bold">{headerLink}</ul>
      </div>
    </header>
  );
};

export default Header;
