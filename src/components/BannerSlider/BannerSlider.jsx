import React from 'react';
import './BannerSlider.css';
import img1 from './internship_1.jpg'
import img2 from './placement_1.jpg'
import img3 from './training_1.jpg'





const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <div className="banner">
        <img src={img3} alt="Special Offer" />
        <button className="apply-btn">Apply</button>
      </div>
      <div className="banner">
        <img src={img1} alt="Intensive Internship" />
        <button className="apply-btn">Apply Now</button>
      </div>
      <div className="banner">
        <img src={img2} alt="Industry Placement" />
        <button className="apply-btn">Read More</button>
      </div>
    </div>
  );
};

export default BannerSlider;
