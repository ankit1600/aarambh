import React from "react";
import "./GameCard.css";
import { assets } from "../../assets/assets";

// GameCard Component
const GameCard = () => {
  // Handle when a tournament is selected
  const handletournament = (formUrl) => {
    window.open(formUrl, "_blank"); // Open the form URL in a new tab
  };

  return (
    <div className="game-card-container">
      {/* First Card */}
      <div className="game-card">
        <div className="game-image">
          <img src={assets.card1} alt="Champion's Arena" />
        </div>
        <div className="game-info">
          <span className="date-category">
            <span className="category">Crisis Control</span>
          </span>
          with SQUAD
          <butto
            className="read-more"
            onClick={() =>
              handletournament("https://forms.gle/P59A1AVNu6Wq4hU39")
            }
          >
            Register »
          </butto>
        </div>
      </div>

      {/* Second Card */}
      <div className="game-card">
        <div className="game-image">
          <img src={assets.card2} alt="Crisis Control" />
        </div>
        <div className="game-info">
          <span className="date-category">
            <span className="category">Champion's Arena</span>
          </span>
          <button className="read-more">
            Registration will start soon.. »
          </button>
        </div>
      </div>

      {/* Third Card */}
      <div className="game-card">
        <div className="game-image">
          <img src={assets.card3} alt="Survivor’s Arena" />
        </div>
        <div className="game-info">
          <span className="date-category">
            <span className="category">Survivor’s Arena</span>
          </span>
          <button className="read-more">
            Registration will start soon.. »
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
