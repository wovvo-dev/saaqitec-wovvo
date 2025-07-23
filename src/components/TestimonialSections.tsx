import React from 'react';
import {  MessageCircle } from 'lucide-react';
import {  testimonialsImages } from '../data/testimonials';
import { sendGAEvent } from '@next/third-parties/google';
import { plans } from '@/constants/pricing_plans';
import useModalStore from '../zustand-hooks/consent-modal';
import Link from 'next/link';
import handleCheckout from '@/services/handleCheckout';
import { useReferral } from '../context/ReferralContext';

const TestimonialRow: React.FC<{ items: { src: string }[]; reverse?: boolean; startDelay?: string }> = ({ 
    items, 
    reverse = false,
    startDelay = 's'
}) => (
    <div className="relative">
        <div
            className={`flex gap-8 animate-slide  hover:pause ${reverse ? 'animate-slide-reverse' : ''}`}
            style={{ animationDuration: '15s', animationDelay: startDelay }}

        >
            {[...items, ...items].map((testimonial, index) => (
                <img 
                    key={`${testimonial.src}-${index}`}
                    width={300} 
                    src={testimonial.src} 
                    alt={`Testimonial ${index}`}
                />
            ))}
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
    const { setPaymentLink, openModal } = useModalStore();
        const { referral } = useReferral();


    const firstRowImages = testimonialsImages;
    const secondRowImages = [...testimonialsImages.slice(Math.ceil(testimonialsImages.length / 3)), ...testimonialsImages.slice(0, Math.ceil(testimonialsImages.length / 3))];

    return (
        <section className="bg-white mt-8 overflow-hidden">
            <div className="text-center mb-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">
                        The Community is {" "}
                        <span className="gradient-text">Buzzing</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        See why creators are excited to be part of our founding community!
                    </p>
                </div>
            </div>

            <div className="space-y-8">
                {/* First row */}
                <TestimonialRow items={firstRowImages} />
                
                {/* Second row - different starting point + reverse + animation delay */}
                <TestimonialRow 
                    items={secondRowImages} 
                    reverse 
                    startDelay="-6s"
                />
            </div>

            <div className="mt-16 justify-self-center px-8">
                {/* <Link href={plans[1]?.paymentLink}> */}
                <button
                    onClick={() => {
                        sendGAEvent("event", "Join", { value: "User Joined!" });
                        setPaymentLink(plans[1]?.paymentLink);
                        // openModal("Become a Forever Founder Member Now!");
                        handleCheckout(referral)
                    }}
                    className="bg-primary text-white px-5 sm:px-8 py-3 rounded-lg  text-[15px] sm:text-lg hover:bg-primary-dark transition-colors flex justify-center items-center"
                >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Join the Conversation — Limited Spots Available</span>
                </button>
                {/* </Link> */}
            </div>
        </section>
    );
};

export default TestimonialsSection;