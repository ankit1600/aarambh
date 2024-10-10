import React from "react";
import Header from "../../components/Header/Header.jsx";
import Info from "../../components/Information/Info.jsx";
import GameCard from "../../components/GameCard/GameCard.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Info />
      <GameCard />
    </div>
  );
};

export default Home;
