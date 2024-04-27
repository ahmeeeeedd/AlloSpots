import React from "react";
import "./AboutUs.css";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

const AboutUs = () => {
  return (
    <div className="about-us" id="about">
      <div className="about-us-content">
        <h1>About us</h1>
        <p>
          Our goal is to assist these individuals in choosing adapted
          destinations and to facilitate their travels by offering accessible
          transportation options. By collaborating with local partners and
          assessing the accessibility of educational establishments, we aim to
          create a more inclusive environment for all.
        </p>
        <div className="additional-info">
          <div className="info-item">
            <AccessibilityIcon className="icon" />
            <h3>Accessibility</h3>
            <p>
              Our Objective:
              <br />
              "We will help you to identify and choose destinations that are
              adapted to their needs"
            </p>
          </div>
          <div className="info-item">
            <DirectionsBusIcon className="icon" />
            <h3>Transport</h3>
            <p>
              Our Objectif:
              <br />" We will simplify the process of booking accessible
              transportation, enabling users to travel with ease and
              independence."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
