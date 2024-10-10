import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/rules");
  };

  return (
    <div className="header">
      <div className="header-contants">
        <h2>Game on!</h2>
        <p>
          Join the Ultimate Gaming Experience Compete, Conquer and claim Your
          Prize
        </p>
        <button onClick={handleNavigate}>Read Rules</button>
      </div>
    </div>
  );
};

export default Header;
