"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { plans } from "../constants/pricing_plans";
import useModalStore from "../zustand-hooks/consent-modal";
import { sendGAEvent } from "@next/third-parties/google";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import handleCheckout from "../services/handleCheckout";
import { useReferral } from "../context/ReferralContext";

const Navbar: React.FC = () => {
  const { setPaymentLink } = useModalStore();
  const router = useRouter();
  const pathname = usePathname();
  const { referral } = useReferral();

  const handleNavigation = (id: string) => {
    if (pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  useEffect(() => {
  const openBtn = document.querySelector(".menuopenbtn");
  const closeBtn = document.querySelector(".menuclosebtn");
  const mobileMenu = document.querySelector(".mb-menu");

  const handleOpen = () => {
    mobileMenu?.classList.add("open");
  };

  const handleClose = () => {
    mobileMenu?.classList.remove("open");
  };

  const handleMenuItemClick = () => {
    mobileMenu?.classList.remove("open");
  };

  // Add event listeners
  openBtn?.addEventListener("click", handleOpen);
  closeBtn?.addEventListener("click", handleClose);

  // Close mobile menu when any link or button inside it is clicked
  const clickableItems = mobileMenu?.querySelectorAll("a, button");
  clickableItems?.forEach((item) =>
    item.addEventListener("click", handleMenuItemClick)
  );

  // Cleanup
  return () => {
    openBtn?.removeEventListener("click", handleOpen);
    closeBtn?.removeEventListener("click", handleClose);
    clickableItems?.forEach((item) =>
      item.removeEventListener("click", handleMenuItemClick)
    );
  };
}, []);


  return (
    <>
      <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
        <div className="flex text-xs md:text-base font-bold justify-center align-center p-2 bg-gradient-to-r from-primary to-secondary text-white">
          🚨 Final Access Tier Just Dropped —
          <div
            onClick={() => {
              sendGAEvent("event", "Join", { value: "User Joined!" });
              setPaymentLink(plans[1]?.paymentLink);
              handleCheckout(referral);
            }}
            className="underline font-semibold ml-1 cursor-pointer"
          >
            Lock It In Now!
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-[25%,50%,25%] grid-cols-[50%,50%] h-16 mb-header">

            <Logo />

            <div className="menuopenbtn">
              <img src="menuopn.svg" alt="" />
            </div>

            <div className="hidden lg:flex items-center justify-center space-x-3 mb-menu">
              <div className="menuclosebtn">
                <img src="menuclose.svg" alt="" />
              </div>
              <div className="logo-mb">
                <Logo />
              </div>
              {/* <Link
                href={"/"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Home
              </Link> */}
              {/* <button
                onClick={() => handleNavigation("pricing")}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Pricing
              </button> */}
              {/* <Link
                href={"/about"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                About
              </Link> */}
              {/* <Link
                href={"/blog"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Blog
              </Link> */}
              {/* <Link
                href={"/press"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Press
              </Link> */}
              {/* <Link
                href={"/roadmap"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Roadmap
              </Link> */}
              <Link
                href={"/our-founders"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Our Founders
              </Link>
              <Link
                href={"/help-center"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Help Center
              </Link>
              <Link
                href={"/affiliate"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Affiliate
              </Link>
              <button
                onClick={() => handleNavigation("watch-our-story")}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Watch Our Story
              </button>
              {/* <Link
                href={"/contact"}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Contact
              </Link> */}
              {/* <button
                onClick={() => handleNavigation("features")}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                Features
              </button> */}
              {/* <button
                onClick={() => handleNavigation("faqs")}
                className="text-gray-700 font-medium px-1.5 py-2 hover:text-primary transition-colors"
              >
                FAQs
              </button> */}
              <button
                onClick={() => {
                  sendGAEvent("event", "Join", { value: "User Joined!" });
                  setPaymentLink(plans[1]?.paymentLink);
                  handleCheckout(referral);
                }}
                className="block lg:hidden border border-[#ee2720] text-black px-6 py-2 rounded-lg"
              >
                Login
              </button>
              <button
                className="block lg:hidden bg-primary border border-[#ee2720] text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Sign Up
              </button>
            </div>

            <div className="menu-btn flex items-center justify-end gap-2 hidden lg:flex">
              <button
                onClick={() => {
                  sendGAEvent("event", "Join", { value: "User Joined!" });
                  setPaymentLink(plans[1]?.paymentLink);
                  handleCheckout(referral);
                }}
                className="border border-[#ee2720] text-black px-6 py-2 rounded-lg"
              >
                Login
              </button>
              <button
                className="bg-primary border border-[#ee2720] text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;