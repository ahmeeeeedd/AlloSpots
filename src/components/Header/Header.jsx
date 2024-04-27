import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, SetMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="Logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--words)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => SetMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />{" "}
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => SetMenuOpened(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => SetMenuOpened(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="features"
              smooth={true}
              duration={500}
              onClick={() => SetMenuOpened(false)}
            >
              Our Features
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              smooth={true}
              duration={500}
              onClick={() => SetMenuOpened(false)}
            >
              Our team
            </Link>
          </li>
          <li>
            <Link
              to="contact_us"
              smooth={true}
              duration={500}
              onClick={() => SetMenuOpened(false)}
            >
              Contact{" "}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
