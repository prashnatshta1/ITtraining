import React from "react";
import "./Ui.css";

const Ui = () => {
  return (
    <div className="workshop-page">
      {/* Banner Section */}
      <div className="banner">
        <div className="banner-content">
          <div className="breadcrumbs">
            Home / Events / <span className="active">free-workshop-on-ui-ux</span>
          </div>
          <h1>Free workshop on UI/UX</h1>
        </div>

      
      </div>

      {/* Workshop Details Section */}
      <div className="workshop-details">
        <p>
          We would like to request students to join our UI/UX workshop, which is
          going to be held from <strong>11th to 13th August, 2024</strong>, from{" "}
          <strong>3:00 PM to 5:00 PM</strong>. The workshop will be conducted for
          3 days. It is targeted for students who have appeared for their +2
          exams. We will give knowledge on UI and UX during the workshop.
          Students who are interested in web designing are highly encouraged to
          join our free workshop.
        </p>
        <p>
          Participants of the workshop will be awarded certificates on the last
          day. Along with it, those students who are interested in joining our 3
          months course of UI/UX will be awarded a discount on the course.
        </p>
        <h3>Highlights of the program:</h3>
        <ul>
          <li>Basic principles of UI/UX</li>
          <li>Generating wireframes</li>
          <li>Designing user interfaces in Figma</li>
          <li>Prototyping</li>
          <li>Generating HTML/CSS</li>
          <li>Publishing content on the web</li>
        </ul>
        <p>
          Register to reserve your seat:{" "}
          <a
            href="https://shorturl.at/VwJ5w"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://shorturl.at/VwJ5w
          </a>
        </p>
        <p>
          <strong>Date:</strong> 14 August, 2024 to 16 August, 2024
          <br />
          <strong>Time:</strong> 3 pm to 5 pm
          <br />
          <strong>Requirement:</strong> +2 appeared
        </p>
        <p>Certificates will be awarded at the end of the workshop.</p>
      </div>
    </div>
  );
};

export default Ui;

  