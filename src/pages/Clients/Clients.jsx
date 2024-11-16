import React from 'react';
import './Clients.css';

const clients = [
  {
    id: 1,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-64568106b14589.80788542.webp',
    name: 'Subisu Cablenet Ltd.',
  },
  {
    id: 2,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461d6daeee549.96292418.webp',
    name: 'Hotel Shambala',
  },
  {
    id: 3,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461d661a109d7.05238330.webp',
    name: 'Smart Telecom',
  },
  {
    id: 4,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461d7a5eeb461.74648578.webp',
    name: 'Nepal Telecom',
  },
  {
    id: 5,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461d958d1ca83.45571633.webp',
    name: 'Apex Digital',
  },
  {
    id: 6,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461da7577d673.69776157.webp',
    name: 'Kings College',
  },
];

const Clients = () => {
  return (
    <section className="clients-section py-6 bg-light">
      <div className="container-fluid">
        <div className="d-flex mb-3 align-items-center">
          <h2 className='sas'>Our Clients</h2>
        </div>
        <div className="clients-container client__slider with-gap">
          {clients.map((client) => (
            <div key={client.id} className="client__slider__item">
              <div className="bg-white d-flex align-items-center justify-content-center py-3 mb-2">
                <div
                  title={client.name}
                  className="client__img background-image contain"
                  style={{
                    backgroundImage: `url(${client.logo})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
