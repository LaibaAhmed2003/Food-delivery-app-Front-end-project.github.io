// import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("authToken");
    navigate("/signup");
  };

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
          Menu
        </NavLink>
        {localStorage.getItem("authToken") ? (
          <NavLink to="/myorder" className="navlinks">
            My Orders
          </NavLink>
        ) : (
          ""
        )}

        {/* <NavLink to="/profile" className="navlinks">
          Profile
        </NavLink> */}
        {!localStorage.getItem("authToken") ? (
          <NavLink to="/signup" className="navlinks">
            Sign Up
          </NavLink>
        ) : (
          <a
            className="navlinks cursor-pointer hover:text-red-500"
            onClick={handlelogout}
          >
            Logout
          </a>
        )}
      </div>

      <div className="rightdiv">
        <NavLink to="/search" className="nav-icons">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </NavLink>
        {localStorage.getItem("authToken") ? (
          <NavLink to="/cart" className="nav-icons">
            <FontAwesomeIcon icon={faBagShopping} />
          </NavLink>
        ) : (
          ""
        )}
        {localStorage.getItem("authToken") ? (
          <NavLink to="/profile" className="nav-icons">
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        ) : (
          ""
        )}
        {localStorage.getItem("authToken") ? (
          <NavLink to="/checkout">Checkout</NavLink>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
