import './Testimonials.css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

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
      
      <Swiper
  spaceBetween={30}
  slidesPerView={3}
  loop={true}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
  className="mySwiper"
>
  {testimonials.map((testimonial, index) => (
    <SwiperSlide key={index}>
      <div className="testimonial-card">
        <img src={logo} alt="Logo" className="testimonial-logo" />
        <p className="testimonial-quote">"</p>
        <p className="testimonial-feedback">{testimonial.feedback}</p>
        <p className="testimonial-name">{testimonial.name}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
      
</div>
  );
};

export default Testimonials;