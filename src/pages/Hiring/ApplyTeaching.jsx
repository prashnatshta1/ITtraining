import React from "react";
import "./ApplyTeaching.css";

const ApplyTeaching = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <header className="breadcrumb-header">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a> / <span>join-us</span>
          </nav>
          <h1>Apply for Teaching</h1>
          <a href="#" className="apply-btn">
            Apply Now
          </a>
        </div>
      </header>

      {/* Content Section */}
      <main className="content-section">
        <div className="container">
          <p>
            IT Training Nepal, a dynamic learning platform that is continuously striving to provide the best training
            facility in town, is proud to call interested instructors to join Nepal’s fully professional training
            institute to offer their knowledge and expertise to potential learners.
          </p>
          <p>
            We, IT Training Nepal, have established ourselves as a training and development pioneer with the best
            faculty members in town. We believe that teaching and learning is a two-way communication process, and we
            are keen to facilitate our students with well-qualified teachers and a structured syllabus.
          </p>
          <p>
            We request individuals who excel in communication skills and have confidence in delivering knowledge and
            expertise in their respective fields to be part of IT Training Nepal. If you think you can contribute to
            this teaching-learning process, you can post your CV, and we will contact you for your contribution.
          </p>
          <p>We welcome instructors for the following subjects:</p>
          <ul>
            <li>PHP Programming</li>
            <li>Multimedia and Animation</li>
            <li>Basic Computer Training</li>
            <li>C Programming</li>
            <li>Web Designing</li>
            <li>Microcontroller Programming</li>
            <li>ASP.NET</li>
            <li>Graphic Designing</li>
            <li>AutoCAD</li>
            <li>Java</li>
            <li>Networking</li>
            <li>Android</li>
          </ul>
          <p>
            Additionally, if you have expertise in any relevant field and wish to join as an instructor, email us at{" "}
            <a href="mailto:hiring@ittrainingnepal.com">hiring@ittrainingnepal.com</a>. We will contact you soon.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ApplyTeaching;
