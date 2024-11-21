import React from "react";
import "./Events.css";
import Digital from "./events/Digital.jpg";
import Python from "./events/Python.jpg";
import ui from "./events/UI.webp";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    image: ui,
    title: "3 Days Workshop of UI/UX",
    location: "Putalisadak",
    description: "Free workshop on UI/UX",
    readMoreLink: "/ui", // Navigation path
  },
  {
    id: 2,
    image: Python,
    title: "FREE Python Workshop",
    location: "Putalisadak",
    description: "FREE Workshop on Python",
    readMoreLink: "/Python",
  },
  {
    id: 3,
    image: Digital,
    title: "Free Digital Marketing Workshop",
    location: "Putalisadak",
    description: "Free Workshop on Digital Marketing",
    readMoreLink: "/DigitalMarketing",
  },
];

const Events = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleReadMore = (link) => {
    if (link.startsWith("/")) {
      navigate(link); // Navigate to internal route
    } else {
      window.open(link, "_blank"); // Open external link
    }
  };

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
              <span
                onClick={() => handleReadMore(event.readMoreLink)}
                className="read-more"
                style={{ cursor: "pointer"  }}
              >
                Read More →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
