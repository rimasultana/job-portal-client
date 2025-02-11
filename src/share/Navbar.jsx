import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import logo from "../assets/jobstack.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-cyan-400 border-cyan-400 rounded-b-md"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-cyan-400 border-cyan-400 rounded-b-md"
              : ""
          }
        >
          About
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/service"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-cyan-400 border-cyan-400 rounded-b-md"
              : ""
          }
        >
          Service
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-cyan-50 py-4 sticky top-0 z-10">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="jobstack-logo" className="w-14" />
          <h1 className="md:text-3xl text-xl text-cyan-400 font-bold">
            JobStack
          </h1>
        </div>
        <nav>
          <ul className="gap-5 hidden md:flex relative">{links}</ul>
        </nav>
        <div className="md:flex hidden">
          <Link
            to={"/login"}
            className="btn bg-cyan-400 py-2 px-3 rounded-md text-white font-bold"
          >
            Login
          </Link>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <GiTireIronCross /> : <FaBars />}
          </button>
        </div>
      </div>
      <nav className={`${open ? "block" : "hidden"}`}>
        <ul className="absolute bg-amber-400">
          {links}
          <Link to={"/login"} className="btn bg-cyan-400 text-white">
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
