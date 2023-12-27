import { Link } from "react-router-dom";
import logo from "./Images/navlogo.png";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          margin: "0px 100px",
          borderBottom: "1px solid white",
        }}
      >
        <div
          className=""
          style={{
            // padding: "10px 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="col-sm-12 col-md-6"
            style={{
              width: "500px",
            }}
          >
            <img
              src={logo}
              alt=""
              style={{ width: "280px", height: "270px", marginTop: "-3%" }}
            />
          </div>
          <hr />
          <div
            className="col-xs-6 col-md-3"
            style={{
              textAlign: "center",
            }}
          >
            <p
              className="text-justify"
              style={{
                color: "white",
                fontSize: "17px",
              }}
            >
              Nestled in the heart of the city, Foodfest is a haven for food
              enthusiasts seeking a gastronomic adventure. Our restaurant is a
              celebration of diverse cuisines, expertly crafted by our talented
              chefs who are passionate about delivering unforgettable meals.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <div
              className="col-xs-6 col-md-3"
              style={{
                width: "300px",
                textAlign: "left",
              }}
            >
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/burgers" style={{ color: "white" }}>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/cart" style={{ color: "white" }}>
                    Cart
                  </Link>
                </li>
                <li>Contact us at foodfest@gmail.com</li>
                <FontAwesomeIcon icon={faInstagram} className="footer-icons" />
                <FontAwesomeIcon icon={faLinkedin} className="footer-icons" />
                <FontAwesomeIcon icon={faWhatsapp} className="footer-icons" />
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div
        className="container"
        style={{ textAlign: "center", marginTop: "20px" }}
      >
        <div
          className="row"
          style={{ textAlign: "center", marginLeft: "30px" }}
        >
          <div
            className="col-md-8 col-sm-6 col-xs-12"
            style={{
              padding: "0px 40px",
            }}
          >
            <p className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by
              <Link to="/"> FoodFest</Link>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
