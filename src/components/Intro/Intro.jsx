import React from "react";
import "./Intro.css";
import Header from "../Header/Header";
import about_image from "../../assets/about.png";
import NumberCounter from "number-counter";
import { Link } from "react-scroll";
const Intro = () => {
  return (
    <div className="Intro" id="home">
      <div className="left-A">
        <Header />
        <div className="Intro-text">
          <div>
            <span className="stroke-text">Empowering</span>
            <br />
            <span>Accessibility</span>
          </div>
          <div>
            <span className="stroke-text">Sharing</span>
            <br />
            <span>Freedom</span>
          </div>
          <div>
            <span> AlloSpots : Your guide to accessible travel.</span>{" "}
          </div>
        </div>
        {/* STATISTIQUES*/}
        <div className="stats">
          <div>
            <span>
              <NumberCounter end={6} start={1} delay="1" preFix="+" />
            </span>
            <span>
              % Of the general population, thus,
              <br /> is considered to have
              <br /> a 'motor disability'
            </span>
          </div>
          <div>
            <span>
              <NumberCounter end={43} start={10} delay="4" preFix="+" />
            </span>
            <span>
              % People with disabilities
              <br /> in Tunisia
              <br /> have a motor disability.
            </span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={40} start={5} delay="5" preFix="+" />{" "}
            </span>
            <span>
              % of the population in <br />
              France faces a situation of <br /> disability either temporarily{" "}
              <br /> or permanently."
            </span>
          </div>
        </div>
        {/*buttons*/}
        <div className="button-about">
          <Link to="features" smooth={true} duration={800} className="btn">
            Get Started
          </Link>{" "}
          <Link to="about" smooth={true} duration={800} className="btn">
            Learn More
          </Link>{" "}
        </div>
      </div>
      <div className="right-A">
        <Link to="contact_us" smooth={true} duration={800} className="btn">
          LOG OUT{" "}
        </Link>
        <img src={about_image} alt="Eye Cane" className="Intro_pic" />
      </div>
    </div>
  );
};

export default Intro;
