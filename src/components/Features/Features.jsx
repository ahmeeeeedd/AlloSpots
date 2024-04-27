import React from "react";
import "./Features.css";
import { featuresData } from "../../data/featuresData";
import RightArrow from "../../assets/rightArrow.png";
const Features = () => {
  return (
    <div className="Features" id="features">
      <div className="features-header">
        <span className="stroke-text">Explore our</span>
        <span>AlloSpots</span>
        <span className="stroke-text">Features</span>
      </div>
      <div className="features-categories">
        {featuresData.map((feature) => (
          <div className="category">
            {feature.image}
            <span>{feature.heading}</span>
            <span>{feature.details}</span>
            <div className="go">
              <span>try it</span>
              <img src={RightArrow} alt="Eye Cane" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
