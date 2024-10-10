import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="main-contaner">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or queries, feel free to reach out to us!
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
