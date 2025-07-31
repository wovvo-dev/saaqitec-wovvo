"use client";

import React from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const FooterSection: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

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

  return (
    <footer className="bg-[#0B0B0F] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Wovvo" className="h-8" />
          </a>
          <p className="text-gray-400 mt-6">
            Wovvo is not affiliated with or endorsed by any third-party job board, including Upwork, LinkedIn, Twitter, Threads, or Meta.
          </p>
          <p className="text-gray-400 mt-6">
            The platform that connects UGC creators with brands looking for authentic content.
          </p>

          <div className="flex flex-wrap justify-center space-x-3 mt-8">
            <button onClick={() => handleNavigation("pricing")} className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">
              Pricing
            </button>
            <Link href="/about" className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">About</Link>
            <Link href="/blog" className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Blog</Link>
            <Link href="/press" className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Press</Link>
            <Link href="/roadmap" className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Roadmap</Link>
            <Link href="/our-founders" className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Our Founders</Link>
            <Link href="/affiliate" className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Affiliate</Link>
            <button onClick={() => handleNavigation("watch-our-story")} className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Watch Our Story</button>
            <button onClick={() => handleNavigation("features")} className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">Features</button>
            <button onClick={() => handleNavigation("faqs")} className="text-gray-400 font-medium px-2 py-1 hover:text-white transition-colors">FAQs</button>
          </div>

          <div className="flex space-x-6 mt-8">
            <a href="https://x.com/wovvoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://facebook.com/wovvoai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/wovvo/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/wovvo.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://tiktok.com/wovvo.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
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
              <Link href="/terms-and-conditions" className="underline underline-offset-4">Terms and Conditions</Link>
              <span>|</span>
              <Link href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>
              <span>|</span>
              <Link href="/cookie-declaration" className="underline underline-offset-4">Cookie Declaration</Link>
              <span>|</span>
              <Link href="/compliance" className="underline underline-offset-4">Compliance &amp; Platform Disclaimer</Link>
              <span>|</span>
              <Link href="/dmac" className="underline underline-offset-4">DMCA &amp; Content Removal Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;