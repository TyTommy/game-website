import React from "react";
import "./GameCardComponent.css";

export const GAME_CARD_VARIANTS = {
  VERTICAL: 1,
  HORIZONTAL: 2,
  LIVE: 3,
};

const GameCardComponent = ({
  image,
  title,
  category,
  rating,
  variant = GAME_CARD_VARIANTS.VERTICAL,
}) => {
  console.log({ image });
  if (variant === GAME_CARD_VARIANTS.VERTICAL) {
    return (
      <div
        className="game-card vertical"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="game-info">
          <h3>{title}</h3>
          <p>
            ⭐ {rating} {category}
          </p>
        </div>
      </div>
    );
  }
  if (variant === GAME_CARD_VARIANTS.HORIZONTAL) {
    return (
      <div className="game-card horizontal">
        <img src={image} alt={title} />
        <div className="game-info">
          <h5>{title}</h5>
          <p className="category">{category}</p>
          <p>{rating} ⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    );
  }

  return (
    <div className="game-card live">
      <img src={image} alt={title} />
      <div className="game-info">
        <h5>{title}</h5>
        <p className="category">{category}</p>
      </div>
    </div>
  );
};

export default GameCardComponent;
