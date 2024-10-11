import React from "react";
import "./Info.css";

// Data array with details for each tournament, including prizes
const tournamentDetails = [
  {
    entryFee: "₹50 (coming soon...)",
    title: "Champion's Arena",
    description: "This tournament offers the following prize money:",
    per_kill: "₹35 per/kill",
    prizes: [
      { position: "Winner", prizeMoney: "₹100" },
      { position: "2nd Prize", prizeMoney: "₹80" },
      { position: "3rd Prize", prizeMoney: "₹50" },
    ],
  },
  {
    entryFee: "₹30",
    title: "Crisis Control",
    description: "In Crisis Control, the top performers receive:",
    per_kill: "₹20 per/kill",
    prizes: [
      { position: "Winner", prizeMoney: "₹50" },
      { position: "2nd Prize", prizeMoney: "₹30" },
      { position: "3rd Prize", prizeMoney: "₹20" },
    ],
  },
  {
    entryFee: "₹20 (coming soon...)",
    title: "Survivor’s Arena",
    description: "Survivor's Arena rewards the top 3 with:",
    per_kill: "₹10 per/kill",
    prizes: [
      { position: "Winner", prizeMoney: "₹30" },
      { position: "2nd Prize", prizeMoney: "₹20" },
      { position: "3rd Prize", prizeMoney: "₹10" },
    ],
  },
];

const Info = () => {
  return (
    <div className="grid-container">
      {/* Mapping through the tournamentDetails array */}
      {tournamentDetails.map((tournament, index) => (
        <div className="grid-item" key={index}>
          <h2>
            <span>Entry fee {tournament.entryFee}</span>
          </h2>
          <h1>{tournament.title}</h1>
          <p style={{ fontSize: "18px" }}>{tournament.description}</p>
          <p style={{ color: "white" }}>{tournament.per_kill}</p>

          {/* Displaying prizes */}
          <ul className="prize-list">
            {tournament.prizes.map((prize, i) => (
              <li key={i}>
                {prize.position}: {prize.prizeMoney}
              </li>
            ))}
          </ul>

          {/* Optional button for additional interaction
          {index === 2 && <button className="read-more-btn">Read More</button>} */}
        </div>
      ))}
    </div>
  );
};

export default Info;
