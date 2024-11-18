import React, { useState } from "react";

import "./InternshipOpportunity.css"; // Shared CSS for internship details

const InternshipOpportunity = () => {
  const [showFull, setShowFull] = useState(false);

  const toggleDetails = () => {
    setShowFull(!showFull);
  };

  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="breadcrumb-section">
        <div className="container">
          <nav className="breadcrumb">
            <span><a href="/">Home</a> /</span>
            <span> Internship</span>
          </nav>
          <h1>Internship Opportunity</h1>
        </div>
      </section>

      {/* Internship Details Section */}
      <section className="internship-details">
        <div className="container">
          <p>
            Step into the world of IT with IT Training Nepal's intensive internship program, tailored for students pursuing computer-related courses like BCA, BSc CSIT, BIT, BIM, BEd ICT, BE Computer, BE Electronics, and more. Our program offers a unique opportunity to gain real-world industry exposure in various IT domains, setting the stage for a successful career.
          </p>
          <h2>Our Internship Process</h2>
          <ul>
            <li>
              <strong>Application process:</strong> Upon application, our HR team evaluates your CV and invites you for an interview to assess your skills and interests. Based on this, you may be directly placed into an internship or provided with a crash course to enhance your fundamentals.
            </li>
            <li>
              <strong>Hands-On Experience:</strong> During the internship, you’ll be assigned a dedicated supervisor who will guide you through real projects with set deadlines. You’ll receive daily feedback and gradually take on more challenging tasks, honing your skills for independent work.
            </li>
            <li>
              <strong>Pathways to Success:</strong> After completing the initial internship phase, you’ll have the opportunity to join a company based on your interests, with our HR team assisting you in finding the perfect fit. Alternatively, you can kickstart your career with us as a paid intern, working on real projects and receiving mentorship from seniors.
            </li>
            <li>
              <strong>Paid Internship Perks:</strong> As a paid intern, you’ll not only gain valuable experience but also receive compensation for your work. With performance-based promotions within just a few months, you’ll be well on your way to a fulfilling career in the dynamic IT industry.
            </li>
          </ul>
          {showFull ? (
            <p>
              Embark on this exciting internship journey with us and turn your passion for IT into a rewarding career!
            </p>
          ) : null}
          <button className="toggle-button" onClick={toggleDetails}>
            {showFull ? "View Less ↑" : "View More ↓"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default InternshipOpportunity;
