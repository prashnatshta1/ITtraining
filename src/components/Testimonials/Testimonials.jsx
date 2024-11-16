import React, { useState } from 'react';
import './Testimonials.css';
import logo from './image.png'; // replace with the correct path to your logo

const testimonials = [
  {
    name: 'Shyam Sundar Darnal',
    feedback: 'After completing web designing training, I was hired as a web designer at IT Training Nepal. I am working as a graphic designer and web designer at IT Training Nepal. Along with that I also teach graphic designing here.',
  },
  {
    name: 'Lila Thapa Magar',
    feedback: 'I am learning web designing and SEO at IT Training Nepal. Along with that I am working as a designer at IT Training Nepal.',
  },
  {
    name: 'Punit Jajodia',
    feedback: 'I think IT Training Nepal is one of the best training centers. I highly recommend it for all who want professional training. After my training at IT Training Nepal, my performance was best during my internship at one of the software companies.',
  },
  {
    name: 'Niben Mali',
    feedback: `IT training in Nepal is the best place to gain theoretical as well
    as practical knowledge. The teachers are very friendly, and the
    classes are divided into small groups. I did a Java Training
    program in 2014, where I was guided to understand the JAVA
    programming language and the best practices with hands-on
    practices. Then I got to enhance my skills through the internship
    program.`,
  },
  
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonials-container">
      <h2>Student's <span className="highlight">Feedback</span></h2>
      
      <div className="testimonial-card">
        <img src={logo} alt="Logo" className="testimonial-logo" />
        <p className="testimonial-quote">"</p>
        <p className="testimonial-feedback">{testimonials[currentIndex].feedback}</p>
        <p className="testimonial-name">{testimonials[currentIndex].name}</p>
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev} className="carousel-button">&lt;</button>
        <button onClick={handleNext} className="carousel-button">&gt;</button>
      </div>

      <div className="pagination-dots">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
</div>
  );
};

export default Testimonials;
