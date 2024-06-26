import React from "react";
import HeaderComponent from "./Components/HeaderComponent";
import BannerComponent from "./Components/BannerComponent";
import GameCardComponent, {
  GAME_CARD_VARIANTS,
} from "./Components/GameCardComponent";
import "./App.css"; // Custom CSS file for overall styling
import AvatarComponent from "./Components/AvatarComponent";
import GameAdCard from "./Components/GameAdCard";

const mostPopularGames = [
  {
    image: "/images/bg_1.png",
    title: "Sniper 2",
    rating: "8.6 / 10",
    category: "Action-Rpg",
  },
  {
    image: "/images/bg_2.png",
    title: "Motor Race",
    rating: "8.6 / 10",
    category: "Action-Rpg",
  },
  {
    image: "/images/bg_3.png",
    title: "Witcher Hunt",
    rating: "8.6 / 10",
    category: "Action-Rpg",
  },
  {
    image: "/images/bg_4.png",
    title: "Pabg War",
    rating: "8.6 / 10",
    category: "Action-Rpg",
  },
  {
    image: "/images/bg_5.png",
    title: "Sniper 2",
    rating: "8.6 / 10",
    category: "Action-Rpg",
  },
];

const newReleasedGames = [
  {
    image: "/images/new_release_1.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_1.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_1.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_1.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_8.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_8.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_8.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
  {
    image: "/images/new_release_8.png",
    title: "Ghost of Tsushima",
    rating: "4.5",
    category: "war Battle",
  },
];

const liveGames = [
  {
    image: "/images/live_1.png",
    title: "Pubg war",
    category: "war Battle",
  },
  {
    image: "/images/live_2.png",
    title: "Ghost of Tsushima",
    category: "war Battle",
  },
  {
    image: "/images/live_3.png",
    title: "Ghost of Tsushima",
    category: "war Battle",
  },
];

const App = () => {
  return (
    <div className="app-container">
      <div className="left-section">
        <HeaderComponent />
        <BannerComponent
          title="The Forbidden Kingdom Adventure War"
          imageUrl="/images/banner-background.png"
          buttonText="More Details"
          buttonLink="#"
        />
        <h2>Most popular Game</h2>
        <div className="game-list most-popular">
          {mostPopularGames.map((game, index) => (
            <GameCardComponent
              key={index}
              image={game.image}
              title={game.title}
              category={game.category}
              rating={game.rating}
            />
          ))}
        </div>
        <h2>New Released Games</h2>
        <div className="game-list">
          {newReleasedGames.map((game, index) => (
            <GameCardComponent
              key={index}
              image={game.image}
              title={game.title}
              category={game.category}
              rating={game.rating}
              variant={GAME_CARD_VARIANTS.HORIZONTAL}
            />
          ))}
        </div>
      </div>
      <div className="right-section">
        <AvatarComponent />

        <h2>Live Game</h2>
        <div className="rectangle"></div>
        <div className="game-list">
          {liveGames.map((game, index) => (
            <GameCardComponent
              key={index}
              image={game.image}
              title={game.title}
              category={game.category}
              rating={game.rating}
              variant={GAME_CARD_VARIANTS.LIVE}
            />
          ))}
        </div>
        <GameAdCard />
      </div>
    </div>
  );
};

export default App;
