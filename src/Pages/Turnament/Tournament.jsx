import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Tournament.css";
import TournamentForm from "../../components/TournamentForm/TournamentForm.jsx";
import GameCard from "../../components/GameCard/GameCard";

const Tournament = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get tournamentName from the location state, if available
  const initialTournamentName = location.state?.tournamentName || null;

  // Use state to track the selected tournament
  const [selectedTournament, setSelectedTournament] = useState(
    initialTournamentName
  );

  // Handle tournament selection from the GameCard component
  const handleSelectTournament = (tournamentName) => {
    setSelectedTournament(tournamentName);
  };

  // Function to render either the form or the GameCard component
  return (
    <div className="tournament">
      {selectedTournament ? (
        // If a tournament is selected, display the registration form
        <>
          <h1>{selectedTournament}</h1>
          <TournamentForm />
        </>
      ) : (
        // If no tournament is selected, display the GameCard component for selection
        <>
          <h1>Select a Tournament</h1>
          <GameCard
            className="gameCard-tournament"
            onSelectTournament={handleSelectTournament}
          />
        </>
      )}
    </div>
  );
};

export default Tournament;
