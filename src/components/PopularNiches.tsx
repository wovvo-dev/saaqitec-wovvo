'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';

const niches = [
  { title: 'Beauty', subtitle: 'Skincare', image: 'niches01.jpg' },
  { title: 'Health', subtitle: 'Wellness', image: 'niches02.jpg' },
  { title: 'Fashion', subtitle: 'Apparel', image: 'niches03.jpg' },
  { title: 'Tech', subtitle: 'Gadgets', image: 'niches04.jpg' },
  { title: 'Food', subtitle: 'Beverage', image: 'niches05.jpg' },
  { title: 'Home', subtitle: 'Lifestyle', image: 'niches06.jpg' },
  { title: 'Travel', subtitle: 'Experiences', image: 'niches07.jpg' },
  { title: 'Parenting', subtitle: 'Family', image: 'niches08.jpg' },
];

const PopularNiches = () => {
  return (
    <section id="popularniches" className="py-12 md:py-24">
      <h2 className="text-4xl font-bold">
        <span className="gradient-text">Niches </span>
        for Every Kind of Creator
      </h2>

      <Marquee
        className="niches-slider"
        gradient={false}
        speed={40}
        pauseOnHover={true}
      >
        {niches.map((niche, index) => (
          <div className="item" key={index}>
            <h3>
              {niche.title}
              <span>{niche.subtitle}</span>
            </h3>
            <img src={niche.image} alt="niches-img" />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default PopularNiches;