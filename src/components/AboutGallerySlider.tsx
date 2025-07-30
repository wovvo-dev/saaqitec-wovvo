'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Helper to generate image paths
const generateImageArray = (start: number, end: number) => {
  const images = [];
  for (let i = start; i <= end; i++) {
    const formatted = i.toString().padStart(2, '0');
    images.push(`/about-gallery/about-gallery${formatted}.jpg`);
  }
  return images;
};

// const youtubeVideos = [
//   'https://www.youtube.com/embed/Ef1ta1qpm2s?si=87LbI2FrrTUP_ZoO',
//   'https://www.youtube.com/embed/Ef1ta1qpm2s?si=87LbI2FrrTUP_ZoO',
//   'https://www.youtube.com/embed/Ef1ta1qpm2s?si=87LbI2FrrTUP_ZoO',
// ];

const AboutGallerySlider = () => {
  const allImages = generateImageArray(1, 16);
  const half = Math.ceil(allImages.length / 2);
  const firstRow = allImages.slice(0, half);
  const secondRowImages = allImages.slice(half);

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
      {/* Row 1: Images only */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        centeredSlides={false}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        speed={1000}
        loop
        breakpoints={breakpoints}
        className="overflow-visible"
      >
        {firstRow.map((img, idx) => (
          <SwiperSlide key={img}>
            <img
              src={img}
              alt=""
              onClick={() => openModal(allImages, idx)}
              className="cursor-pointer object-cover w-full rounded-[10px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Row 2: Images + YouTube Shorts */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={1000}
        loop
        breakpoints={breakpoints}
        className="overflow-visible mt-[20px]"
      >
        {/* Images */}
        {secondRowImages.map((img, idx) => (
          <SwiperSlide key={img}>
            <img
              src={img}
              alt=""
              onClick={() => openModal(allImages, half + idx)}
              className="cursor-pointer object-cover w-full rounded-[10px]"
            />
          </SwiperSlide>
        ))}

        {/* YouTube Shorts */}
        {/* {youtubeVideos.map((url, idx) => {
          const embedUrl = url.replace('/shorts/', '/embed/').split('?')[0];
          return (
            <SwiperSlide key={`yt-${idx}`} className="youtube-gallery-item">
              <div className="aspect-[9/11.5] w-full rounded-[10px] overflow-hidden">
                <iframe
                  src={embedUrl}
                  title={`YouTube Shorts ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </SwiperSlide>
          );
        })} */}
      </Swiper>

      {/* Modal for Image View */}
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