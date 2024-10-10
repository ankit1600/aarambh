import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  // const handleMenuToggle = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };
  // Close mobile menu after clicking on an item
  const handleMenuItemClick = (menuItem) => {
    setMenu(menuItem);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src={assets.logo}
          style={{ width: "110px", height: "100px" }}
          alt="Logo"
        />
      </Link>

      {/* Mobile Menu Icon */}
      {/* <div className="mobile-menu-icon" onClick={handleMenuToggle}>
        &#9776; 
      </div> */}

      {/* Navbar Menu */}
      <ul className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
        <li
          onClick={() => handleMenuItemClick("home")}
          className={menu === "home" ? "active" : ""}
        >
          <Link to="/"> Home</Link>
        </li>
        <li
          onClick={() => handleMenuItemClick("tournament")}
          className={menu === "tournament" ? "active" : ""}
        >
          <Link to="/tournament">Tournaments </Link>
        </li>
        <li
          onClick={() => handleMenuItemClick("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          <Link to="/contact"> Contact Us</Link>
        </li>

        {/* SignIn Button for Mobile Menu */}
        <li className="mobile-signin">
          <button onClick={() => handleMenuItemClick(setShowLogin(true))}>
            SignIn
          </button>
        </li>
      </ul>

      {/* Navbar right-side section (only visible on larger screens) */}
      <div className="navbar-right">
        <button onClick={() => setShowLogin(true)}>SignIn</button>
      </div>
    </nav>
  );
};

export default Navbar;
