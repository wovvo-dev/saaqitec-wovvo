'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const generateImageArray = (start: number, end: number) => {
  const images = [];
  for (let i = start; i <= end; i++) {
    const formatted = i.toString().padStart(2, '0');
    images.push(`/about-gallery/about-gallery${formatted}.jpg`);
  }
  return images;
};

const AboutGallerySlider = () => {
  const allImages = generateImageArray(1, 14);

  const [modal, setModal] = useState(false);
  const [modalImgs, setModalImgs] = useState<string[]>([]);
  const [startIdx, setStartIdx] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let loaded = 0;
    allImages.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded++;
        if (loaded === allImages.length) {
          setIsReady(true);
        }
      };
    });
  }, []);

  const openModal = (imgs: string[], idx: number) => {
    setModalImgs(imgs);
    setStartIdx(idx);
    setModal(true);
  };

  if (!isReady) {
    return <div className="text-center py-10 text-white">Loading gallery...</div>;
  }

  const breakpoints = {
    0: { slidesPerView: 3.2, spaceBetween: 10 },
    640: { slidesPerView: 5.2, spaceBetween: 20 },
  };

  return (
    <div className="about-gallery">
      {/* 🌀 Marquee-style Main Slider (autoplay only) */}
      <Swiper
        // modules={[Navigation]}
        // navigation
        modules={[Autoplay]}
        centeredSlides={false}
        speed={8000}
        loop
        breakpoints={breakpoints}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        allowTouchMove={false}
        className="overflow-visible"
      >
        {allImages.map((img, idx) => (
          <SwiperSlide
            key={img}
            style={{ width: 'auto' }} // Continuous scrolling look
          >
            <img
              src={img}
              alt=""
              onClick={() => openModal(allImages, idx)}
              className="cursor-pointer object-cover w-auto rounded-[10px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🖼 Modal for Image View */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="relative bg-white max-w-4xl w-full p-4 rounded-lg galler-pop-up-slider">
            <button
              onClick={() => setModal(false)}
              className="absolute top-2 right-3 text-2xl close-btn"
            >
              &times;
            </button>
            <Swiper
              modules={[Navigation]}
              navigation
              initialSlide={startIdx}
              slidesPerView={1}
            >
              {modalImgs.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt=""
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutGallerySlider;