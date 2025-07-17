'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { phones } from '../../data/phoneData';
import PhoneFrame from './PhoneFrame';

const AUTO_SCROLL_INTERVAL = 2000; 

const PhoneCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [resetTrigger, setResetTrigger] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % phones.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + phones.length) % phones.length);
    }, []);

    // Manual navigation handlers that reset auto-scroll
    const handleNextSlide = useCallback(() => {
        nextSlide();
        setResetTrigger(prev => prev + 1); // Trigger interval reset
    }, [nextSlide]);

    const handlePrevSlide = useCallback(() => {
        prevSlide();
        setResetTrigger(prev => prev + 1); // Trigger interval reset
    }, [prevSlide]);

    // Auto-scroll functionality
    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (isAutoPlay) {
            intervalId = setInterval(() => {
                nextSlide();
            }, AUTO_SCROLL_INTERVAL);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isAutoPlay, nextSlide, resetTrigger]); // Only reset on manual button clicks

    const getVisiblePhones = () => {
        const visible = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + phones.length) % phones.length;
            visible.push({ ...phones[index], position: i });
        }
        return visible;
    };

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-white py-4 md:py-8 overflow-hidden"
        >

            <p className=" text-4xl font-bold sm:text-4xl text-center px-4 md:px-8">
                These Creators Said <span className="gradient-text">Yes to Wovvo</span>
            </p>
            <p className="mt-4 text-xl text-gray-600  px-4 md:px-8">
                Creators you trust. A platform they believe in.
            </p>

            <div className="relative w-full max-w-sm sm:max-w-4xl lg:max-w-6xl">
                {/* Navigation Buttons */}
                <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-zinc-800/10 hover:bg-zinc-800/20 transition-all duration-300 rounded-full p-2 md:p-3 text-zinc-800 shadow-sm"
                    aria-label="Previous slide"
                >
                    <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>

                <button
                    onClick={handleNextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-zinc-800/10 hover:bg-zinc-800/20 transition-all duration-300 rounded-full p-2 md:p-3 text-zinc-800 shadow-sm"
                    aria-label="Next slide"
                >
                    <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Carousel Container */}
                <div className="flex justify-center items-center space-x-2 sm:space-x-4 md:space-x-8 py-8 md:py-12 px-4">
                    {getVisiblePhones().map((phone) => (
                        <PhoneFrame
                            key={`${phone.id}-${currentIndex}`}
                            phone={phone}
                            isCenter={phone.position === 0}
                            position={phone.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhoneCarousel;