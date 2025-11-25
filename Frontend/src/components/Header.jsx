import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="pr-4 flex justify-between text-white font-semibold bg-black pl-4">
      {/* Right side image */}

      <div>
        <img src={assets.logo} alt="logo" />
      </div>

      {/* Mid portion tags  */}

      <ul className="py-6   hidden  sm:flex md:flex lg:flex gap-3.5">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          HOME
        </NavLink>

        <NavLink
          to={"/courses"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          COURSES
        </NavLink>

        <NavLink
          to={"/contact-us"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          CONTACT_US
        </NavLink>

        <NavLink
          to={"/about-us"}
          className={({ isActive }) => (isActive ? "underline" : "")}
        >
          ABOUT-US
        </NavLink>
      </ul>

      {/* login logout */}
      <span className="py-4">
        <button className=" bg-amber-50 text-black rounded-full py-2 px-2  hover:bg-black hover:text-white">
          LOGIN
        </button>
      </span>
    </div>
  );
};

export default Header;
