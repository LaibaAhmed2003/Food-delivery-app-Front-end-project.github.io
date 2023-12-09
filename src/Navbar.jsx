import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Header">
      <div className="leftnav">
        <h3>FoodFest</h3>
      </div>
      <div className="navlinksBar">
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavLink to="/burgers" className="navlinks">
          Burgers
        </NavLink>
        <NavLink to="/profile" className="navlinks">
          Profile
        </NavLink>
        <NavLink to="/signup" className="navlinks">
          Sign Up
        </NavLink>
        <NavLink to="/signin" className="navlinks">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
