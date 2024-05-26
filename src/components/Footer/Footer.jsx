// Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <hr />
      <div className="social-icons">
        <a href="lien-vers-la-page-LinkdIn">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="lien-vers-le-profile-github">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="lien-vers-la-page-facebook">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
      </div>
      <p>© 2024 AlloSpots. Tous droits réservés.</p>
      <p>Powered by Ahmed Hnana</p>
    </div>
  );
};

export default Footer;
