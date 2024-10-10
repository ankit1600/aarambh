import React from "react";
import "./GameCard.css";
import { assets } from "../../assets/assets";

// Data array with details for each game card, adding a unique form URL for each
const gameDetails = [
  {
    image: assets.card1,
    category: "Champion's Arena",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdjlh2kKrxOSgB8yZSAra7sT-7KzQNHgg78s15gg5wdRNnb8g/viewform?usp=sf_link",
  },
  {
    image: assets.card2,
    category: "Crisis Control",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdjlh2kKrxOSgB8yZSAra7sT-7KzQNHgg78s15gg5wdRNnb8g/viewform?usp=sf_link",
  },
  {
    image: assets.card3,
    category: "Survivor’s Arena",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdjlh2kKrxOSgB8yZSAra7sT-7KzQNHgg78s15gg5wdRNnb8g/viewform?usp=sf_link",
  },
];

const GameCard = () => {
  // Handle when a tournament is selected
  const handletournament = (formUrl) => {
    window.open(formUrl, "_blank"); // Open the form URL in a new tab
  };

  return (
    <div className="game-card-container">
      {/* Mapping through the gameDetails array */}
      {gameDetails.map((game, index) => (
        <div className="game-card" key={index}>
          <div className="game-image">
            <img src={game.image} alt={`Game ${index + 1}`} />
          </div>
          <div className="game-info">
            <span className="date-category">
              <span className="category">{game.category}</span>
            </span>
            <button
              onClick={() => handletournament(game.formUrl)}
              className="read-more"
            >
              Register »
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCard;
