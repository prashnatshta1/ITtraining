import React, { useState } from "react";
import "./RustProgramming.css";
import Syllabus from "./Syllabus/Syllabus";
import FAQ from "./Syllabus/FAQ";
import FAQs from "./Syllabus/FAQ";
import Course from "./Syllabus/Course";
import Rust from "./Syllabus/Rust";


const RustProgramming = () => {
    const [showMore, setShowMore] = useState(false); // Default to collapsed view
    const [openIndex, setOpenIndex] = useState(null);
    const [allExpanded, setAllExpanded] = useState(false); // Track if all FAQs are expanded
  
    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const toggleAllAnswers = () => {
        // Toggle all FAQs between expanded and collapsed
        setAllExpanded(!allExpanded);
        setOpenIndex(!allExpanded ? "all" : null);
      };

  
    return (
    
        
      <div className="container">
        <Rust />
        <h2>
          Looking for the best Rust Training in Kathmandu, Nepal? Or looking for
          the best Rust Training in Nepal? Our computer training institute is
          highly dedicated and equipped with resources for providing the best
          Rust Training in Nepal.
        </h2>
        <div className="flex-container">
          {/* Content Section */}
          <div className="content">
            <h2>Why Rust Programming Course at IT Training Nepal?</h2>
            <p>
              But, why should anyone consider IT Training Nepal to train
              themselves on Rust? Here are some of the benefits of studying at
              this institute:
            </p>
            <ul>
              <li>Covers all the basics of Rust Programming.</li>
              <li>Preparing students for advanced Rust courses.</li>
              <li>Regular practice sessions.</li>
              <li>One-on-one interaction with the instructor.</li>
              <li>Chances of Internships.</li>
              <li>Real-life experience through projects.</li>
            </ul>
  
            <h3>Rust Programming Course</h3>
            <p>
              Rust programming language primarily focuses on safety, productivity,
              and performance. It is a statically typed language which means that
              it improves memory safety and error detection, leading to more
              reliable builds. These aspects made it one of the most desired
              programming languages amongst developers.
            </p>
            <p>
              An employee of Mozilla, Graydon Hoare, created Rust in 2006 as a
              personal project. As of today's date, this programming language
              works as an alternative to C and C++. Programmers who often seek
              scalability and concurrency while coding use Rust.
            </p>
            <p>
              Rust programming is usually used while creating game engines.
              Besides that, it can be used for applications that use virtual
              reality, web development, and machine learning. Rust serves as a
              coding language for the data science backend as well.
            </p>
            <p>
              Top companies like Facebook, Discord, Microsoft, Dropbox, etc., use
              Rust for various purposes. For example, Facebook has joined the
              Rust foundation to utilize it in every way possible for development,
              from source control to compilers.
            </p>
  
            {/* Objectives Section */}
            <section>
              <h2>Objectives of Rust Programming Course</h2>
              <ul className={showMore ? "" : "blur"}>
                <li>To provide a basic understanding of the language.</li>
                <li>
                  Prepare students to code in Rust for web development and
                  developing game engines.
                </li>
                <li>To familiarize students with the syntax of Rust.</li>
                <li>To prepare individuals for projects and real-life applications using the programming language.</li>
                <li>To teach Rust's concurrency model.</li>
              </ul>
              {/* View More Button */}
              {!showMore && (
                <div className="view-more-container d-flex justify-content-center">
                  <button className="view-more-btn" onClick={toggleShowMore}>
                    View More <span>&#9660;</span> {/* Down Arrow */}
                  </button>
                </div>
              )} 
            </section>
  
            {/* Additional Sections */}
            <div style={{ display: showMore ? 'block' : 'none' }}>
            <section >
              <h2>How are the Rust Programming Classes Conducted?</h2>
              <p>
                The initial phase of the Rust Programming Classes covers the
                syllabus designed by IT Training Nepal. During this time, the
                instructor will provide you with a basic understanding of the
                language and introduce the syntax.
              </p>
              <p>
                By the end of the course, students have to do a project. Students
                carry it out based on the requirement of a real-time scenario. It
                is to be noted that the instructor will be available to guide
                students in their projects.
              </p>
              <p>
                The classes are normally divided into two parts: the first one is
                when the basic concepts and theory of the topics are discussed
                while the second half of the classes focuses on practice sessions
                and classwork.
              </p>
            </section>
  
            <section>
              <h2>Who can Join Rust Programming Courses?</h2>
              <p>
                There is no certain rule of thumb to determine who can join the
                Rust programming course and who cannot. Generally, anyone
                interested in learning Rust can enroll for the training.
              </p>
              <p>
                However, here is the list of people who might find this training
                program helpful:
              </p>
              <ul>
                <li>
                  Individuals who want to build their career in game development
                  can join the training as Rust is one of the most popular coding
                  languages for designing game engines.
                </li>
                <li>
                  Software engineers with prior knowledge of programming languages
                  can also join the class to upscale their knowledge and build
                  their portfolio.
                </li>
                <li>
                  IT students and enthusiasts who seek to learn Rust can enroll
                  for the course.
                </li>
                <li>
                  Data scientists can also learn the programming language as a
                  part of the curriculum or an additional skill set.
                </li>
                <li>
                  Anyone who wants to work on applications that use virtual
                  reality can also take this training.
                </li>
              </ul>
            </section>
  
            <section>
              <h2>Prerequisites</h2>
              <p>
                There are no certain prerequisites to learn Rust programming. IT
                Training Nepal designs its syllabus in such a way that even a
                complete beginner can start from scratch.
              </p>
              <p>
                However, here is the list of things that can be beneficial in your
                Rust learning process:
              </p>
              <ul>
                <li>Understanding of coding languages</li>
                <li>Concepts of <strong>C and C++</strong></li>
                <li>Basic Computer Skills</li>
              </ul>
            </section>
  
            <section>
              <h2>Duration</h2>
              <p>
                The duration of this course is 2.5 months. During this period,
                students will learn to use Rust to design websites and build
                software. They will also take their programming knowledge to the
                next level through real-life projects.
              </p>
            </section>
  
            <section>
              <h2>Scope and Career</h2>
              <p>
                Rust Programming has become popular amongst web developers and
                software programmers. Along with this, job opportunities are
                opening up in system programming and in areas that concern safety
                and performance.
              </p>
              <p>
                Having said that, here are some of the job titles that Rust
                programmers can work as:
              </p>
              <ul>
                {showMore ? (
                  <>
                    <li>Web Developer</li>
                    <li>Game Developer</li>
                    <li>Rust Developer</li>
                    <li>Blockchain Developer</li>
                    <li>Embedded Systems Engineer</li>
                    <li>Rust Backend Developer</li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
              {/* View Less Button */}
              {showMore && (
                <div className="view-more-container d-flex justify-content-center">
                  <button className="view-more-btn" onClick={toggleShowMore}>
                    View Less <span>&#9650;</span> {/* Up Arrow */}
                  </button>
                </div>
              )}
            </section>
            </div>
          </div>
  
          {/* Inquiry Form Section */}
          <div className="inquiry-container">
            <form className="inquiry-form">
              <h3>Send Inquiry</h3>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label>Phone *</label>
                <input type="text" placeholder="Enter your phone: +977" />
              </div>
              <div className="form-group">
                <label>Course</label>
                <select>
                  <option>Rust Programming</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message *</label>
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <button className="submit-btn">Send Inquiry</button>
            </form>
          </div>
        </div>
        <Syllabus />
        <FAQs />
        <Course />
   

      </div>
    );
  };
  

export default RustProgramming