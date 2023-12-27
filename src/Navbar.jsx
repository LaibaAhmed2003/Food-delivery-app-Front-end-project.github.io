import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

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
        <NavLink to="/ourstory" className="navlinks">
          Our Story
        </NavLink>
        <NavLink to="/contact" className="navlinks">
          Contact Us
        </NavLink>
        {localStorage.getItem("authToken") ? (
          <NavLink to="/cart" className="navlinks ">
            {/* <FontAwesomeIcon icon={faBagShopping} /> */}
            My Cart
          </NavLink>
        ) : (
          ""
        )}
        {!localStorage.getItem("authToken") ? (
          <NavLink to="/signup" className="signup navlinks">
            Sign Up
          </NavLink>
        ) : (
          <a className="logout cursor-pointer " onClick={handlelogout}>
            {/* <FontAwesomeIcon icon={faRightFromBracket} /> */}
            logout
          </a>
        )}

        {localStorage.getItem("authToken") ? (
          <NavLink to="/checkout"></NavLink>
        ) : (
          ""
        )}
      </div>
      <div className="rightnav">
        <FontAwesomeIcon icon={faInstagram} className="social-icons" />
        <FontAwesomeIcon icon={faLinkedin} className="social-icons" />
        <FontAwesomeIcon icon={faWhatsapp} className="social-icons" />
      </div>
    </div>
  );
};

export default Navbar;
