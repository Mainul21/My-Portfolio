
import { SiAnkermake } from "react-icons/si";

const Header = ({ scrollToSection }) => {
  const items = (
    <>
      <li onClick={()=>scrollToSection("education")} 
      className="btn bg-zinc-400 rounded-xl text-black hover:text-white mr-3">
        <a href="#">Education</a>
      </li>
      <li  onClick={()=>scrollToSection("projects")}
      className="btn bg-zinc-400 rounded-xl text-black hover:text-white mr-3">
        <a href="#">Projects</a>
      </li>
      <li
        onClick={()=>scrollToSection("skills")}
        className="btn bg-zinc-400 rounded-xl text-black hover:text-white mr-3"
      >
        <a href="#">Skills</a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 p-4 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <SiAnkermake />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <a onClick={()=>scrollToSection("contact")} className="btn">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
