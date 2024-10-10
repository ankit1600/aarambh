import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navabe.jsx";
import Home from "./Pages/Home/Home.jsx";
// import Tournament from "./Pages/Turnament/Tournament.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import LoginPopup from "./components/LoginPopup/LoginPopup.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Rules from "./Pages/Rules/Rules.jsx";
import GameCard from "./components/GameCard/GameCard.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<GameCard />} />
          {/* <Route path="/tournament" element={<Tournament />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
