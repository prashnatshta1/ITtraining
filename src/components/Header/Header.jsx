import React from 'react';
import './Header.css'; // External CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle navigation to Apply Teaching page
  const handleInstructorClick = () => {
    navigate('/applyteaching');
  };

  // Function to handle navigation to Contact Us page
  const handleInquiryClick = () => {
    navigate('/contactus');
  };

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
          {/* Button to navigate to Apply Teaching */}
          <button className="btn instructor-btn" onClick={handleInstructorClick}>
            Become an Instructor ➔
          </button>
          {/* Button to navigate to Contact Us */}
          <button className="btn inquiry-btn" onClick={handleInquiryClick}>
            Send Inquiry ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
