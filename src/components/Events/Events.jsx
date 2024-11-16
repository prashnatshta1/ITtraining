import React from 'react';
import './Events.css';
import Digital from './events/Digital.jpg'
import Python from './events/Python.jpg'
import ui from './events/UI.webp'
const events = [
  {
    id: 1,
    image: ui,
    title: '3 Days Workshop of UI/UX',
    location: 'Putalisadak',
    description: 'Free workshop on UI/ UX',
    readMoreLink: '#'
  },
  {
    id: 2,
    image: Python,
    title: 'FREE Python Workshop',
    location: 'Putalisadak',
    description: 'FREE Workshop on Python',
    readMoreLink: '#'
  },
  {
    id: 3,
    image: Digital,
    title: 'Free Digital Marketing Workshop',
    location: 'Putalisadak',
    description: 'Free Workshop on Digital Marketing',
    readMoreLink: '#'
  }
];

const Events = () => {
  return (
    <div className="events-container">
      <h2>Events & Seminars</h2>
      <div className="events-cards">
        {events.map((event) => (
          <div className="event-card" key={event.id}>
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-content">
              <h3>{event.title}</h3>
              <p className="event-location">Location: {event.location}</p>
              <p>{event.description}</p>
              <a href={event.readMoreLink} className="read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
