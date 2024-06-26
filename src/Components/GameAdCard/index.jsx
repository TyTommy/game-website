import React from "react";
import "./index.css";

function GameAdCard() {
  return (
    <div className="game-ad-card">
      <img src="/images/img.png" alt="NFS" />
      <div className="game-info">
        <h1>Need for Speed</h1>
        <p className="category">Racing</p>
        <p className="rating">4.5 ⭐⭐⭐⭐⭐</p>
        <p className="description">
          Interactively synergize revolutionary viasustaina communities.
          Energistically foster distinctiveide resource maximizing.
        </p>
        <a href="#download" className="download-button">
          Download Now
        </a>
      </div>
    </div>
  );
}

export default GameAdCard;
