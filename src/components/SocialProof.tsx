'use client';

import React, { useEffect, useState } from 'react';
// import { phones } from '../../data/phoneData';
import Image from 'next/image';
import { members } from '../../data/phoneData';

const CARDS_PER_VIEW = 8;
const ROTATION_INTERVAL = 5000;

const SocialProof = () => {
    const [startIndex, setStartIndex] = useState(0);
    const totalPhones = members.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + CARDS_PER_VIEW) % totalPhones);
        }, ROTATION_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    const visibleCards = members
        .slice(startIndex, startIndex + CARDS_PER_VIEW)
        .concat(
            startIndex + CARDS_PER_VIEW > totalPhones
                ? members.slice(0, (startIndex + CARDS_PER_VIEW) % totalPhones)
                : []
        );

    return (
        <div className="flex justify-center">
            <div className="w-full  xl:w-[60%] px-4 py-8">
                <p className=" text-4xl font-bold sm:text-4xl text-center px-4 md:px-8">
                    These Creators Said <span className="gradient-text">Yes to Wovvo</span>
                </p>
                <p className="mt-4 mb-7 text-xl text-gray-600 text-center px-4 md:px-8">
                    Creators you trust. A platform they believe in.
                </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">

                    {visibleCards.map((phone, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-md h-96"
                        >
                            <Image
                                src={phone.image}
                                alt="Profile Image"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={phone.id === 10 ? "top" : "center"}
                                className="absolute inset-0 z-0"
                            />
                            {/* <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-orange-600 via-orange-400/25 to-transparent"></div> */}
                            {/* <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-red-400 via-orange-400/30 to-transparent"></div> */}
                            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-red-500 via-orange-600/30 to-transparent"></div>



                           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-white text-center space-y-1 w-[90vw] sm:w-auto max-w-xs">
                                <h3 className="text-lg font-extrabold truncate whitespace-nowrap">
                                    {phone.tagline}
                                </h3>
                                <p className="text-sm truncate whitespace-nowrap">
                                    {phone.followers }
                                </p>
                                <p className="truncate whitespace-nowrap">
                                    {phone.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SocialProof;