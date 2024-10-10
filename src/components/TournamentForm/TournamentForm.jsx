import React, { useState } from "react";
import "./TournamentForm.css";

const TournamentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    uid: "",
    gameName: "",
    mobile: "",
    level: "",
    whatsapp: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // You can add form submission logic here, like sending the data to a backend.
  };

  return (
    <div className="form-container">
      <h2>Game Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="uid">UID:</label>
          <input
            type="text"
            id="uid"
            name="uid"
            value={formData.uid}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gameName">Game Name:</label>
          <input
            type="text"
            id="gameName"
            name="gameName"
            value={formData.gameName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile No.:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
            pattern="[0-9]{10}" // ensures 10-digit number
          />
        </div>

        <div className="form-group">
          <label htmlFor="level">Level:</label>
          <input
            type="text"
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="whatsapp">WhatsApp No.:</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            pattern="[0-9]{10}" // ensures 10-digit number
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TournamentForm;
