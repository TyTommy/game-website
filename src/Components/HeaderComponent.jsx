import React from "react";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="menu-item active">Game</div>
      <div className="menu-item">Live score</div>
      <div className="menu-item">Statistics</div>
      <div className="menu-item">Analytics</div>
      <div className="menu-item">Forecasts</div>
    </div>
  );
};

export default HeaderComponent;
