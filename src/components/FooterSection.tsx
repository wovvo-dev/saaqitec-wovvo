"use client";

import React from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

const FooterSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0B0B0F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Wovvo" className="h-8" />
          </a>
          <p className="text-gray-400 mt-6 max-w-md">
            Wovvo is not affiliated with or endorsed by any third-party job board, including Upwork, LinkedIn, Twitter, Threads, or Meta.
          </p>
          <p className="text-gray-400 mt-6 max-w-md">
            The platform that connects UGC creators with brands looking for
            authentic content.
          </p>

          <div className="flex space-x-8 mt-8">
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("watch-our-story")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Watch Our Story
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQs
            </button>
          </div>

          <div className="flex space-x-6 mt-8">
            <a
              href="https://x.com/wovvoai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com/wovvoai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/wovvo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/wovvo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/wovvo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>

        <div className="mt-8 pt-8 border-t border-gray-800 w-full text-center flex flex-col items-center gap-2">
  <p className="text-gray-400 text-sm">
    © {new Date().getFullYear()} Wovvo. All rights reserved.
  </p>
  <p className="text-gray-400 text-sm">Prices shown are in USD.</p>
  <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-sm text-gray-400 text-center">
    <Link href="/terms-and-conditions" className="underline underline-offset-4">
      Terms and Conditions
    </Link>
    <span>|</span>
    <Link href="/privacy-policy" className="underline underline-offset-4">
      Privacy Policy
    </Link>
    <span>|</span>
    <Link href="/cookie-declaration" className="underline underline-offset-4">
      Cookie Declaration
    </Link>
    <span>|</span>
    <Link href="/compliance" className="underline underline-offset-4">
      Compliance &amp; Platform Disclaimer
    </Link>
    <span>|</span>
    <Link href="/dmac" className="underline underline-offset-4">
      DMCA &amp; Content Removal Policy
    </Link>
  </div>
</div>



        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
