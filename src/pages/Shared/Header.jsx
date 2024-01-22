import { Link } from "react-router-dom";

const Header = () => {
  const headerLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/portfolio/">Portfolio</Link>
      </li>
      <li>
        <Link to="/video-process/">Process</Link>
      </li>
      <li>
        <Link to="/case-study/">Case Study</Link>
      </li>
    </>
  );

  return (
    <header className="my_container navbar py-4 px-0 my-6">
      <div className="navbar-start">
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
        <h2 className="primary-color font-bold text-2xl">Animation Web</h2>
      </div>
      <div className="navbar-end hidden lg:flex px-0">
        <ul className="menu menu-horizontal pr-0">{headerLink}</ul>
      </div>
    </header>
  );
};

export default Header;
