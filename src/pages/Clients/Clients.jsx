import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css';

import './Clients.css'; // Assuming you already have custom styling
import { Autoplay } from 'swiper/modules';

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
  {
    id: 7,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461db2a845661.10877889.webp',
    name: 'Patan College of Professional Studies',
  },
  {
    id: 8,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461dbef00b739.70243249.webp',
    name: 'Nepal Electricity Authority, Ratnapark',
  },
  {
    id: 9,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461dd3f6a1623.48780765.webp',
    name: 'Kathmandu University School of Management (BBA & MBA)',
  },
  {
    id: 10,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461de2dd11fe1.68367836.webp',
    name: 'LGCDP',
  },
  {
    id: 11,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461df56937348.10245690.webp',
    name: 'Micronutrient Initiative',
  },
  {
    id: 12,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461dfd55e99c3.89846473.webp',
    name: 'TBI Group Nepal',
  },
  {
    id: 13,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e160a8c257.21992354.webp',
    name: 'Sunaulo Parivar Nepal (Marie Stopes International Nepal)',
  },
  {
    id: 14,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e2647b3d65.43941611.webp',
    name: 'SAARC Secretariat',
  },
  {
    id: 15,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e3362d7913.36638752.webp',
    name: 'Rastriya Banijya Bank Retirement Fund',
  },
  {
    id: 16,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e4984fa459.92728912.webp',
    name: 'ECPAT Luxembourg Nepal',
  },
  {
    id: 17,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e5e0cc3939.44539238.webp',
    name: 'Canadian Cooperation Office',
  },
  {
    id: 18,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e723d9b4e3.36412498.webp',
    name: 'ESSKAY Pvt. Ltd.',
  },
  {
    id: 19,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461e893e0f167.42753768.webp',
    name: 'The Nepal Distillery',
  },
  {
    id: 20,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f3d3bbf5f0.89750628.webp',
    name: 'Value Chain Development',
  },
  {
    id: 21,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f5448048a9.96476082.webp',
    name: 'Kathford International College Of Engineering And Management',
  },
  {
    id: 22,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f6108d8646.87808846.webp',
    name: 'Kantipur College Of Management And Information Technology (KCMIT)',
  },
  {
    id: 23,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f6cc44b449.66320817.webp',
    name: 'Kantipur City College',
  },
  {
    id: 24,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f773537dc8.12642151.webp',
    name: 'Divya Gyan College',
  },
  {
    id: 25,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f801002662.33559276.webp',
    name: 'Nepal Rastra Bank',
  },
  {
    id: 26,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f8cd524b88.18127999.webp',
    name: 'Save The Children (Twice)',
  },
  {
    id: 27,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6461f970c00761.68455457.webp',
    name: 'IPAS NEPAL',
  },
  {
    id: 28,
    logo: 'https://www.ittrainingnepal.com/images/public/uploads/partners/IMG-6463255a98c693.09522044.webp',
    name: 'Kathmandu Capital Limited',
  },
];

const Clients = () => {
  return (
    <section className="clients-section py-6 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Clients</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={6} // Display 6 slides by default
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          
          }}
          
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="client-slide">
              <img src={client.logo} alt={`Client logo ${client.id}`} className="client-logo" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
