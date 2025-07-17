'use client';

import React from 'react';
import { Phone } from '../../data/phoneData';
import Image from 'next/image';

interface PhoneFrameProps {
  phone: Phone;
  isCenter: boolean;
  position: number;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ phone, isCenter, position }) => {
  const scale = isCenter ? 'scale-105 sm:scale-110' : 'scale-75 sm:scale-85 md:scale-90';
  const opacity = isCenter ? 'opacity-100' : 'opacity-60';
  const zIndex = isCenter ? 'z-10' : 'z-0';
  const translateX = position === -1
    ? '-translate-x-1 sm:-translate-x-2 md:-translate-x-4'
    : position === 1
      ? 'translate-x-1 sm:translate-x-2 md:translate-x-4'
      : '';

  return (
    <div
      className={`transform transition-all duration-500 ease-out ${scale} ${opacity} ${zIndex} ${translateX}`}
      style={{
        filter: isCenter ? 'none' : 'blur(1px)',
      }}
    >
      {/* iPhone 15 Pro Max Frame */}
      <div
        className="relative w-[13rem] h-[26rem] sm:w-[14rem] sm:h-[28rem] md:w-[16rem] md:h-[32rem] lg:w-[18rem] lg:h-[36rem] rounded-[40px] p-2 shadow-2xl bg-gradient-to-b from-black to-black"
        style={{
          boxShadow: isCenter
            ? '0 15px 35px -8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 255, 255, 0.05) inset'
            : '0 10px 25px -8px rgba(0, 0, 0, 0.2)'
        }}
      >


        {/* Dynamic Island */}
        <div className="absolute top-1 left-1/2  mt-3 transform -translate-x-1/2 w-[90px] h-[25px] md:w-[100px] md:h-[30px] bg-black rounded-full z-20 flex items-center justify-center">
          <div className="absolute right-[22px]  md:right-[25px] w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#1a1a1a]"></div>
        </div>

        {/* Screen Bezel */}
        <div className="w-full h-full bg-black rounded-[35px] p-0.5 relative overflow-hidden">
          {/* Screen */}
          <div className="w-full h-full rounded-[32px] overflow-hidden relative">
            <Image
              src={phone.image}
              alt={phone.model}
              fill
              className="w-full h-full object-cover"
            // width={100}
            // height={100}
            />
            {isCenter && (
              <>
                <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-orange-300 via-orange-400/60 to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 z-20">
                  <div className="animate-fadeIn transition-opacity duration-30">
                    <h3 className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-1">
                      {phone.tagline}
                    </h3>
                   
                    <p className="text-white/80 text-xs md:text-sm lg:text-base">
                      {phone.followers}
                    </p>
                     <p className="text-white/80 text-xs md:text-sm lg:text-base">
                      {phone?.location}
                    </p>
                  </div>
                </div>
              </>
            )}


          </div>
        </div>
        {/* Volume Buttons */}
        <div className="absolute top-16 md:top-20 -left-1 w-1.5 h-6 md:h-8 bg-black rounded-r-sm"></div>
        <div className="absolute top-24 md:top-28 lg:top-32 -left-1 w-1.5 h-8 md:h-10 bg-black rounded-r-sm"></div>


        {/* Power Button */}
        <div className="absolute top-12 md:top-14 -right-1 w-1.5 h-10 md:h-12 bg-black rounded-l-sm"></div>
      </div>

      {/* Phone Info */}
      {isCenter && (
        <div className="text-center mt-4 md:mt-6 animate-fadeIn">
          <h3 className="text-zinc-800 text-lg md:text-xl font-medium">{phone.model}</h3>
        </div>
      )}
    </div>
  );
};

export default PhoneFrame;