'use client';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as mounted
    setIsClient(true);
  }, []);

  return (
    <section id="popularniches" className='py-12 md:py-24'>
      <h2 className="text-4xl font-bold">
        <span className="gradient-text">Niches </span>
        for Every Kind of Creator
      </h2>

      {isClient && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 6 },
          }}
          className="niches-slider"
        >
          {niches.map((niche, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <h3>
                  {niche.title}
                  <span>{niche.subtitle}</span>
                </h3>
                <img src={niche.image} alt="niches-img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default PopularNiches;