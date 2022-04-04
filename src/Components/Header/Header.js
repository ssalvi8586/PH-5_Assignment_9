import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const customStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };

  return (
    <div>
      <nav className="flex flex-col md:space-x-5 justify-center items-center my-5 md:flex-row">
        <NavLink
          className="border-b-4 px-2 text-center w-min"
          style={customStyle}
          to="/home"
        >
          HOME
        </NavLink>
        <NavLink
          className="border-b-4 px-2 text-center w-min"
          style={customStyle}
          to="/reviews"
        >
          REVIEWS
        </NavLink>
        <NavLink
          className="border-b-4 px-2 text-center w-min"
          style={customStyle}
          to="/dashboard"
        >
          DASHBOARD
        </NavLink>
        <NavLink
          className="border-b-4 px-2 text-center w-min"
          style={customStyle}
          to="/blogs"
        >
          BLOGS
        </NavLink>
        <NavLink
          className="border-b-4 px-2 text-center w-min"
          style={customStyle}
          to="/about"
        >
          ABOUT
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
