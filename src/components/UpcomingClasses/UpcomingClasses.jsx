import React, { useState } from 'react';
import './UpcomingClasses.css';
import basic from './courses/basic.webp';
import auto from './courses/autocad.webp';
import C from './courses/C.webp';
import ccna from './courses/ccna.webp';
import digital from './courses/digital.webp';
import spring from './courses/spring.jpeg';
import web from './courses/webdesign.webp';
import python from './courses/python.png'
import Popup from './Popup'; // Import the popup component

const UpcomingClasses = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  const classes = [
    {
      title: 'Basic Computer Course',
      trainer: 'Shankar',
      date: '2024-11-24',
      time: '07:00-08:30',
      image: basic,
      discount: null,
    },
    {
      title: 'AutoCAD Training',
      trainer: 'Sopan',
      date: '2024-11-17',
      time: '07:00-08:00',
      image: auto,
      discount: null,
    },
    {
      title: 'CCNA Training',
      trainer: 'Pawan',
      date: '2024-11-17',
      time: '07:00-08:30',
      image: ccna,
      discount: null,
    },
    {
      title: 'Advanced Java Training',
      trainer: 'Shirish',
      date: '2024-11-17',
      time: '07:00-08:30',
      image: spring,
      discount: '20%',
    },
    {
      title: 'C/C++ Programming',
      trainer: 'Shirish',
      date: '2024-11-24',
      time: '07:00-08:30',
      image: C,
      discount: '30%',
    },
    {
      title: 'Digital Marketing',
      trainer: 'Suraj',
      date: '2024-11-17',
      time: '07:00-08:30',
      image: digital,
      discount: '15%',
    },
    {
      title: 'Python Programming',
      trainer: 'Dhan',
      date: '2024-11-20',
      time: '10:30-12:00',
      image: python,
      discount: '20%',
    },
    {
      title: 'Web Designing',
      trainer: 'Dhan',
      date: '',
      time: '',
      image: web,
      discount: null,
    },
  ];
  const handleRegisterClick = (courseTitle) => {
    setSelectedCourse(courseTitle);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="upcoming-classes">
      <h2>Upcoming Classes</h2>
      <div className="class-cards">
        {classes.map((classItem, index) => (
          <div className="class-card" key={index}>
            <img src={classItem.image} alt={`${classItem.title} Image`} className="class-image" />
            <h3>{classItem.title}</h3>
            <div className="trainer">
              <p>Trainer</p>
              <span>{classItem.trainer}</span>
            </div>
            <div className="date-time">
              <p>Date</p>
              <span>{classItem.date || 'TBD'}</span>
            </div>
            <div className="date-time">
              <p>Time</p>
              <span className="time-label">{classItem.time || 'TBD'}</span>
            </div>
            {classItem.discount && <p className="discountp">Discount: {classItem.discount}</p>}
            <button className="register-btn" onClick={() => handleRegisterClick(classItem.title)}>
              Register
            </button>
          </div>
        ))}
      </div>

      {showPopup && (
        <Popup
          course={selectedCourse}
          onClose={closePopup}
        />
      )}
    </div>
  );
};

export default UpcomingClasses;
