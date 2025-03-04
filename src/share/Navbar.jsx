import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import logo from "../assets/jobstack.png";
import AuthContext from "@/provider/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
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
      <li>
        {" "}
        <NavLink
          to={"/myapplication"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-cyan-400 border-cyan-400 rounded-b-md"
              : ""
          }
        >
          My Application
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/myapplication"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 text-cyan-400 border-cyan-400 rounded-b-md"
              : ""
          }
        >
          My Application
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-cyan-50 py-4 sticky top-0 z-10 w-full shadow-md">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="jobstack-logo" className="w-14" />
          <h1 className="md:text-3xl text-xl text-cyan-400 font-bold">
            JobStack
          </h1>
        </div>
        <nav className="hidden md:flex gap-5">
          <ul className="flex items-center gap-5">{links}</ul>
        </nav>
        {user ? (
          <button
            onClick={() => logOut()}
            className="btn bg-cyan-400 font-bold py-2 px-3 rounded-md text-white"
          >
            LogOut
          </button>
        ) : (
          <div className="hidden md:flex">
            <Link
              to={"/login"}
              className="btn bg-cyan-400 py-2 px-3 rounded-md text-white font-bold"
            >
              Login
            </Link>
          </div>
        )}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-cyan-400 text-2xl"
          >
            {open ? <GiTireIronCross /> : <FaBars />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-48 bg-cyan-50 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="text-2xl font-bold text-cyan-400">JobStack</h1>
          <button
            onClick={() => setOpen(false)}
            className="text-cyan-400 text-2xl"
          >
            <GiTireIronCross />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-5 mt-5">{links}</ul>
        <div className="flex justify-center mt-5">
          <Link
            to={"/login"}
            className="btn bg-cyan-400 text-white py-2 px-4 rounded-md"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
