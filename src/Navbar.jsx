import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="rightdiv">
        <NavLink to="/search" className="nav-icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </NavLink>
        <NavLink to="/profile" className="nav-icons">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink to="/cart" className="nav-icons">
          <FontAwesomeIcon icon={faBagShopping} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
