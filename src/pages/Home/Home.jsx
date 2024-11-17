import React from 'react';
import OfferSection from '../../components/OfferSection/OfferSection';
import UpcomingClasses from '../../components/UpcomingClasses/UpcomingClasses';
import './Home.css';
import Events from '../../components/Events/Events';
import Testimonials from '../../components/Testimonials/Testimonials';
import Placement from '../../components/Placement/Placement';
import Clients from '../Clients/Clients';


const Home = () => {
  return (
    <div className="home">
     <OfferSection />
      <UpcomingClasses />
    
      <Events />
      <Testimonials />
      <Placement />
      <Clients />
    </div>
  );
};

export default Home;
