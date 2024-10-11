import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const goTOHomePag = () => {
    navigate("/home");
  };

  return (
    <>
      <section class="subscribe-section">
        <div class="subscribe-container">
          <input
            type="email"
            placeholder="ENTER YOUR E-MAIL"
            class="email-input"
          />
          <button class="subscribe-button">SUBSCRIBE</button>
        </div>
      </section>

      {/* <!-- Footer Section --> */}
      <footer>
        <div class="footer-container">
          {/* <!-- Footer Links --> */}
          <div class="footer-links">
            {/* <div class="footer-logo">
              <img src={assets.logo} width={"400px"} alt="" />
            </div> */}
            {/* <!-- Characters --> */}
            <div class="characters">
              <img
                src={assets.logo}
                alt="Right Character"
                className="footer-logo"
              />
              <img
                src={assets.footerRight}
                alt="Left Character"
                class="character left"
              />
            </div>
            <ul class="nav-links">
              <li onClick={goTOHomePag}>Home</li>
              <li>Tournament</li>
              <li>Contact</li>
            </ul>

            {/* <div class="social-icons">
              <i class="fab fa-pinterest"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-behance"></i>
            </div> */}
          </div>

          <div class="footer-bottom">
            <p>Colorlib 2018 @ All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
