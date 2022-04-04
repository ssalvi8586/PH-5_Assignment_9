import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex space-x-7 justify-center my-5">
        <Link to="/home">HOME</Link>
        <Link to="/reviews">REVIEWS</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/blogs">BLOGS</Link>
        <Link to="/about">ABOUT</Link>
      </nav>
    </div>
  );
};

export default Header;
