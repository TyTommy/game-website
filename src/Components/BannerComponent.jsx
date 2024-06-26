import React from "react";
import "./BannerComponent.css";

const BannerComponent = ({
  title,
  subtitle,
  imageUrl,
  buttonText,
  buttonLink,
}) => {
  return (
    <div
      className="banner-container"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="banner-content">
        <h1>{title}</h1>
        <a href={buttonLink} className="banner-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default BannerComponent;
