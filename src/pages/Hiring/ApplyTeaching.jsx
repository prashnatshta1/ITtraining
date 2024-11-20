import React from "react";
import "./ApplyTeaching.css";

const ApplyTeaching = () => {
  return (
    <section className="teaching-apply-section">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <a>Home</a> / <span>join-us</span>
        </nav>
        
        {/* Header */}
        <h1>Apply for Teaching</h1>
        
        {/* Apply Button */}
        <a href="/apply" className="apply-button">
          Apply Now <span className="arrow">→</span>
        </a>
        
        {/* Main Content */}
        <div className="content">
          <p>
            IT Training Nepal, a dynamic learning platform continuously striving
            to provide the best training facility in town, is proud to call
            interested instructors to join Nepal's fully professional training
            institute to offer their best knowledge and expertise to our
            potential learners.
          </p>
          <p>
            We, at IT Training Nepal, have established ourselves as a training
            and development pioneer with the best faculty members in town. We
            believe that teaching and learning is a two-way communication
            process, and we are keen to facilitate our students with
            well-qualified teachers and a structured syllabus.
          </p>
          <p>
            We request various individuals who are excellent in their
            communication skills and have the belief that they can deliver
            their knowledge and expertise in a relevant field to be a part of
            IT Training Nepal. If you think that you can contribute to this
            teaching-learning process, then you can post your curriculum vitae
            (CV), and we will contact you soon for your contribution. IT
            Training Nepal also provides competent value to your contribution.
            Those who think that they are capable of addressing the following
            subject areas are encouraged to be part of this institute.
          </p>
          
          {/* Subject Areas */}
          <ul>
            <li>PHP Programming</li>
            <li>Multimedia and Animation</li>
            <li>Basic Computer Training</li>
            <li>C Programming</li>
            <li>Web Designing</li>
            <li>Micro Controller Programming</li>
            <li>ASP.NET</li>
            <li>Graphic Designing</li>
            <li>Auto CAD</li>
            <li>Java</li>
            <li>Networking</li>
            <li>Android</li>
          </ul>
          <p>
            Additionally, if you have any expertise in any relevant field that
            you think qualifies you as an instructor, you are also encouraged
            to send us an email at{" "}
            <a href="mailto:hiring@ittrainingnepal.com">hiring@ittrainingnepal.com</a>.
            We will contact you soon for the golden opportunity to be part of
            the leading institute in Nepal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplyTeaching;
