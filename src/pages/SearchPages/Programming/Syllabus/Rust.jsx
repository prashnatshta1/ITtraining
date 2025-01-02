import React from "react";
import "./Rust.css";

const Rust = () => {
  const backgroundImage =
    "https://www.ittrainingnepal.com/images/public/uploads/courses/IMG-65a6055a823e88.03632810.webp";

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-content">
        <p className="breadcrumb">
          <a href="/" className="home-link">Home</a> / rust-programming
        </p>
        <h1 className="hero-title">Rust Programming</h1>
        <div className="hero-buttons">
          <button className="btn btn-light dropdown-toggle">
            Get Inquiry
          </button>
          <button className="btn btn-light dropdown-toggle">Syllabus</button>
        </div>
      </div>
    </section>
  );
};

export default Rust;
