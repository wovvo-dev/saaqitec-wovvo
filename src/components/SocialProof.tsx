'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { members } from '../../data/phoneData';

const ROTATION_INTERVAL = 5000;

const SocialProof = ({
    view = 8,
    title = 'These Creators Said',
    highlight = 'Yes to Wovvo',
    subtitle = 'Creators you trust. A platform they believe in.',
}) => {
    const [startIndex, setStartIndex] = useState(0);
    const totalPhones = members.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex((prev) => (prev + view) % totalPhones);
        }, ROTATION_INTERVAL);
        return () => clearInterval(interval);
    }, [view, totalPhones]);

    const visibleCards = members
        .slice(startIndex, startIndex + view)
        .concat(
            startIndex + view > totalPhones
                ? members.slice(0, (startIndex + view) % totalPhones)
                : []
        );

    return (
        <div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-4xl font-bold sm:text-4xl text-center px-4 md:px-8">
                    {title} <span className="gradient-text">{highlight}</span>
                </p>
                <p className="mt-4 mb-7 text-xl text-gray-600 text-center px-4 md:px-8">
                    {subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
                    {visibleCards.map((phone, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-md h-[350px]"
                        >
                            <Image
                                src={phone.image}
                                alt="Profile Image"
                                layout="fill"
                                objectFit="cover"
                                objectPosition={phone.id === 10 ? 'top' : 'center'}
                                className="absolute inset-0 z-0"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(180.41deg,rgba(242,72,26,0)_3.77%,rgba(242,72,26,0.7)_49.77%,#F67112_99.64%)]"></div>

                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 text-white text-center space-y-1 w-[90vw] sm:w-auto max-w-xs">
                                <h3 className="text-lg font-extrabold truncate whitespace-nowrap">
                                    {phone.tagline}
                                </h3>
                                <p className="text-sm truncate whitespace-nowrap">
                                    {phone.followers}
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