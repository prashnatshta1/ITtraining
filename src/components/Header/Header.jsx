import React from 'react';
import './Header.css'; // External CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <div className="header-container">
      {/* Discount Message Section */}
      <div className="header-message">
        <span>50% off for SEE appeared students and 20% off for +2 appeared students on Coding</span>
      </div>
      
      {/* Contact and Action Section */}
      <div className="header-content">
        <div className="contact-info">
          <span className="contact-item">
            <i className="fas fa-phone-alt"></i> 977-01-5340005 / 9801169144
          </span>
          <span className="contact-item">
            <i className="fas fa-envelope"></i> info@ittrainingnepal.com
          </span>
        </div>
        
        <div className="action-buttons">
          <button className="btn instructor-btn">Become an Instructor ➔</button>
          <button className="btn inquiry-btn">Send Inquiry ➔</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
