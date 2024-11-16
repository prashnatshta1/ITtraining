
import React from 'react';
import './Placement.css';
import Ad from './industry_placements/Adarsha.webp'
import Aj from './industry_placements/Ajay.webp'
import Gh from './industry_placements/Gehendra.webp'
import DT from './industry_placements/DipeshT.webp'
const placements = [
  {
    id: 1,
    image: Ad, 
    name: 'Adarsha Tamang',
    title: 'PHP Developer',
    company: 'E-Prabidhi'
  },
  {
    id: 2,
    image: Aj,
    name: 'Ajay Rai',
    title: 'Web Designer',
    company: 'E-Prabidhi'
  },
  {
    id: 3,
    image: Gh,
    name: 'Gehendra Ranjit',
    title: 'PHP Developer',
    company: 'ITONICS Nepal Pvt. Ltd.'
  },
  {
    id: 4,
    image: DT,
    name: 'Dipesh Tamang',
    title: 'PHP Developer',
    company: 'Haze Soft Pvt. Ltd.'
  }
];

const Placement = () => {
  return (
    <section className="placement-section">
      <h2>Recent Industry Placement</h2>
      <div className="placement-container">
        {placements.map((placement) => (
          <div key={placement.id} className="placement-card">
            <img src={placement.image} alt={placement.name} className="placement-image" />
            <h3>{placement.name}</h3>
            <p>({placement.title})</p>
            <p className="company-name">{placement.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Placement;
