import React from 'react';
import './OfferSection.css';
import img1 from './internship_1.jpg';
import img2 from './placement_1.jpg';
import img3 from './training_1.jpg';

const OfferSection = () => {
  const offers = [
    {
      id: 1,
      image: img3,
      buttonText: 'Apply',
      buttonColor: 'blue',
      type: 'Training'
    },
    {
      id: 2,
      image: img1,
      buttonText: 'Apply Now',
      buttonColor: 'orange',
      type: 'Internship'
    },
    {
      id: 3,
      image: img2,
      buttonText: 'Read More',
      buttonColor: 'blue',
      type: 'Placement'
    },
  ];

  return (
    <div className="offer-section">
      {offers.map((offer) => (
        <div key={offer.id} className="offer-card-container">
          <div className="offer-card">
            <img src={offer.image} alt={offer.title} className="offer-image" />
            <div className="overlay">
              <p className="overlay-text">{offer.title}</p>
            </div>
            <h3 className="offer-title">{offer.title}</h3>
            <button className={`offer-button ${offer.buttonColor}`}>
              {offer.buttonText} <span className="arrow">→</span>
            </button>
          </div>
          <div className={`type-offer ${offer.buttonColor}`}>
            {offer.type}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OfferSection;
