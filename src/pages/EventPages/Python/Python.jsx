import React from "react";
import "./Python.css";

const Python = () => {
  return (
    <div className="python-workshop-page">
      {/* Banner Section */}
      <div className="python-banner">
        <div className="python-banner-content">
          <div className="python-breadcrumbs">
            Home / Events / <span className="python-active">free-python-workshop</span>
          </div>
          <h1>FREE Workshop on Python</h1>
        </div>
      </div>

      {/* Workshop Details Section */}
      <div className="python-workshop-container">
        <p className="python-workshop-description">
          Free 3 Days Python Workshop for students who are interested to start a journey in Python. This workshop will help students to get basic concepts of Python along with the application of Python.
        </p>
        <div className="python-workshop-details">
          <p>
            <strong>Date:</strong> 24th to 26th of July, 2024
          </p>
          <p>
            <strong>Time:</strong> 11:30 to 1:00 PM
          </p>
        </div>
        <button className="python-register-button">Register Now</button>
        <div className="python-workshop-highlights">
          <h3>Key Highlights of the program:</h3>
          <ul>
            <li>Python environment setup</li>
            <li>Basic concepts of Python</li>
            <li>Python modules</li>
            <li>Concepts of OOP</li>
            <li>GUI (Graphic User Interface)</li>
            <li>Introduction to Django Framework</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Python;
