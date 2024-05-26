import React from "react";
import Prize1 from "../../assets/Prize1.png";
import "./Rewards.css";

class Reward extends React.Component {
  render() {
    return (
      <div className="reward-container" id="Rewards">
        <h2 className="title">Rewards</h2>
        <img src={Prize1} className="prize-image" alt="Prize1" />
        <p className="description">Wellness Innovation Bootcamp</p>
      </div>
    );
  }
}

export default Reward;
