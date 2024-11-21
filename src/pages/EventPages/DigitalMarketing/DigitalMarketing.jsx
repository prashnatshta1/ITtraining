import React, { useState } from "react";
import "./DigitalMarketing.css";

const DigitalMarketing = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="Digital-workshop-page">
      {/* Banner Section */}
      <div className="Digital-banner">
        <div className="Digital-banner-content">
          <div className="Digital-breadcrumbs">
            Home / Events / <span className="Digital-active">free-Digital-workshop</span>
          </div>
          <h1>FREE Workshop on Digital Marketing</h1>
        </div>
      </div>

      {/* Workshop Details Section */}
      <div className="Digital-workshop-container">
        <p className="Digital-workshop-description">
          We can see a lot of interested candidates in the area of SEO and SMM therefore IT Training Nepal has planned
          a FREE workshop on Digital Marketing from 21st July 2024 to 23rd July 2024 from 12:30 PM to 2:00 PM.
        </p>
        <button className="Digital-register-button">Register Now</button>
        <div className="Digital-workshop-highlights">
          <h3>Main Highlights of the workshop:</h3>
          <ul>
            <li>SEO</li>
            <li>Content Marketing</li>
            <li>Social Media Marketing</li>
            <li>Pay-Per-Click Advertising (PPC)</li>
          </ul>
        </div>

        {/* Expandable Section */}
        {expanded && (
          <div className="Digital-expanded-content">
            <p>
              Apart from this, our resource person will also discuss the latest industry trends that have been in
              practice in the area of SEO and Social Media Marketing. Along with that, they will also discuss the tools
              that can be used to achieve our goals.
            </p>
            <p>
              The workshop will be hosted by IT Training Nepal, and the speaker will be Mr. Suraj Katwal, an MCA
              graduate with 10+ years of experience in the areas of SEO and digital marketing.
            </p>
          </div>
        )}

        {/* Toggle Button */}
        <div className="Digital-toggle-button">
          <span onClick={toggleExpanded} className="Digital-toggle-link">
            {expanded ? "View Less ↑" : "View More ↓"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
