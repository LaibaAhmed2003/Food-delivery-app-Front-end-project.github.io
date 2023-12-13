// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "./components/Images/navlogo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signup");
  };

  return (
    <div className="Header">
      <div className="leftnav">
        <img src={logo} alt="" />
      </div>
      <div className="navlinksBar">
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>
        <NavLink to="/burgers" className="navlinks">
          Menu
        </NavLink>

        {!localStorage.getItem("authToken") ? (
          <NavLink to="/signup" className="navlinks">
            Sign Up
          </NavLink>
        ) : (
          <a
            className="nav-icons cursor-pointer hover:text-red-500"
            onClick={handlelogout}
          >
            <FontAwesomeIcon icon={faRightFromBracket} />
          </a>
        )}
        <NavLink to="/search" className="nav-icons hover:text-red-500">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </NavLink>
        {localStorage.getItem("authToken") ? (
          <NavLink to="/cart" className="nav-icons hover:text-red-500">
            <FontAwesomeIcon icon={faBagShopping} />
          </NavLink>
        ) : (
          ""
        )}
        {/* {localStorage.getItem("authToken") ? (
          <NavLink to="/profile" className="nav-icons hover:text-red-500">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        ) : (
          ""
        )} */}
        {localStorage.getItem("authToken") ? (
          <NavLink to="/checkout"></NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
