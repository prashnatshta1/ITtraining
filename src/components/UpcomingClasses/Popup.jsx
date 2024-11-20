import React from 'react';
import './Popup.css';

const Popup = ({ course, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Register</h2>
        <form>
          <label>
            Full Name *
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Email *
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Phone *
            <input type="tel" placeholder="Enter your phone" required />
          </label>
          <label>
            Course *
            <input type="text" value={course} readOnly />
          </label>
          <label>
            Date *
            <input type="date" required />
          </label>
          <label>
            Time *
            <input type="time" required />
          </label>
          <button type="submit" className="submit-btn">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
