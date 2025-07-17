"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { plans } from "@/constants/pricing_plans";
import useModalStore from "@/zustand-hooks/consent-modal";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import handleCheckout from "@/services/handleCheckout";
import { useReferral } from '@/context/ReferralContext';

const Navbar: React.FC = () => {
  const { setPaymentLink, openModal } = useModalStore();
  const router = useRouter();
  const pathname = usePathname();
  const { referral } = useReferral();

 const handleNavigation = (id: string) => {
  if (pathname === "/") {

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      // Remove the hash from the URL after scrolling
      window.history.replaceState(null, "", window.location.pathname);
    }
  } else {
    router.push(`/#${id}`);
  }
};

  return (
    <>
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
        <div className={'flex text-xs md:text-base font-bold  justify-center align-center p-2 bg-gradient-to-r from-primary to-secondary text-white'}>🚨 Final Access Tier Just Dropped —{' '}
          {/* <Link href={plans[1]?.paymentLink} > */}
          <div  onClick={() => {
            sendGAEvent("event", "Join", { value: "User Joined!" });
            setPaymentLink(plans[1]?.paymentLink);
            handleCheckout(referral)
            // openModal("Become a Forever Founder Member Now!");
          }} className="underline  font-semibold ml-1 cursor-pointer">
            Lock It In Now!
          </div>
          {/* </Link> */}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />

            <div className="hidden lg:flex items-center space-x-3">
              <button
                // onClick={() => scrollToSection("pricing")}
                onClick={() => handleNavigation("pricing")}
                className="text-gray-700 font-medium px-4 py-2 hover:text-primary transition-colors"
              >
                Pricing
              </button>
              <button
                // onClick={() => scrollToSection("watch-our-story")}
                onClick={() => handleNavigation("watch-our-story")}

                className="text-gray-700 font-medium px-4 py-2 hover:text-primary transition-colors"
              >
                Watch Our Story
              </button>
              <button
                // onClick={() => scrollToSection("features")}
                onClick={() => handleNavigation("features")}
                className="text-gray-700 font-medium px-4 py-2 hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                // onClick={() => scrollToSection("features")}
                onClick={() => handleNavigation("faqs")}
                className="text-gray-700 font-medium px-4 py-2 hover:text-primary transition-colors"
              >
                FAQs
              </button>
              {/* <Link href={plans[1]?.paymentLink} > */}
              <button
                onClick={() => {
                  sendGAEvent('event', 'Join', { value: 'User Joined!' })
                  setPaymentLink(plans[1]?.paymentLink);
                  handleCheckout(referral)
                  // openModal("Become a Forever Founder Member Now!");
                }}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primarvia=harrisy-dark transition-colors"
              >
                Pay Once
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
