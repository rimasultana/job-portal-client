import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-amber-200 text-black" : ""
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
            isActive ? "bg-amber-200 text-black" : ""
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
            isActive ? "bg-amber-200 text-black" : ""
          }
        >
          Service
        </NavLink>
      </li>
      <li>
        {" "}
        <NavLink
          to={"/login"}
          className={({ isActive }) =>
            isActive ? "bg-amber-200 text-black" : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-amber-400 py-4">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div>
          <h1>Rima</h1>
        </div>
        <nav>
          <ul className="gap-5 hidden md:flex relative">{links}</ul>
        </nav>
        <div className="md:flex hidden">
          <Link to={"/login"} className="btn bg-red-500">Login</Link>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <GiTireIronCross /> : <FaBars />}
          </button>
        </div>
      </div>
      <nav className={`${open ? "block" : "hidden"}`}>
        <ul className="absolute bg-amber-400">{links}</ul>
      </nav>
    </div>
  );
};

export default Navbar;
