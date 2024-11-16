
import React from 'react';
import './Onlineclass.css';

const OnlineClass = () => {
  const classes = [
    {
      id: 1,
      image: 'digital-marketing.png', // Replace with actual image path
      title: 'Digital Marketing',
      trainer: 'Suraj',
      date: '2024-11-10',
      time: '14:00 - 15:30',
      duration: 'Contact Us',
    },
    {
      id: 2,
      image: 'qa-training.png', // Replace with actual image path
      title: 'QA Course',
      trainer: 'Reshma',
      date: '2024-11-10',
      time: '08:00 - 09:30',
      duration: 'Contact Us',
    },
    // Add more classes as needed
  ];

  return (
    <div className="upcoming-classes">
      <h2>Upcoming Online Classes</h2>
      <div className="classes-list">
        {classes.map((classItem) => (
          <div key={classItem.id} className="class-card">
            <img src="" alt={classItem.title} className="class-image" />
            <h3>{classItem.title}</h3>
            <p><strong>Trainer:</strong> {classItem.trainer}</p>
            <p><strong>Starting At:</strong> {classItem.date}</p>
            <p className="time"><strong>Time:</strong> {classItem.time}</p>
            <p><strong>Duration:</strong> {classItem.duration}</p>
            <button className="register-btn">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnlineClass;
