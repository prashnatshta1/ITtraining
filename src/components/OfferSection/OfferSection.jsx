import React from 'react';
import './OfferSection.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import img1 from './internship_1.jpg';
import img2 from './placement_1.jpg';
import img3 from './training_1.jpg';

const OfferSection = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const offers = [
    {
      id: 1,
      image: img3,
      buttonText: 'Apply',
      buttonColor: 'blue',
      type: 'Training',
      action: () => navigate('/contactform'), // Example action for training
    },
    {
      id: 2,
      image: img1,
      buttonText: 'Apply Now',
      buttonColor: 'orange',
      type: 'Internship',
      action: () => navigate('/internship'), // Navigate to internship page
    },
    {
      id: 3,
      image: img2,
      buttonText: 'Read More',
      buttonColor: 'blue',
      type: 'Placement',
      action: () => navigate('/contactus'), // Example action for placement
    },
  ];

  return (
    <div className="offer-section">
      {offers.map((offer) => (
        <div key={offer.id} className="offer-card-container">
          <div className="offer-card">
            <img src={offer.image} alt={offer.type} className="offer-image" />
            <h3 className="offer-title">{offer.type}</h3>
            <button
              className={`offer-button ${offer.buttonColor}`}
              onClick={offer.action} // Trigger action when button is clicked
            >
              {offer.buttonText} <span className="arrow">→</span>
            </button>
          </div>
          <div className={`type-offer ${offer.buttonColor}`}>{offer.type}</div>
        </div>
      ))}
    </div>
  );
};

export default OfferSection;
