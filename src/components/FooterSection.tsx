"use client";

import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const FooterSection: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    if (isModalOpen) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isModalOpen]);

  return (
    <>
      <footer className="bg-[#0B0B0F] py-16 relative z-10">
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

            <div className="footer-link-wrapper grid grid-cols-1 sm:grid-cols-5 gap-5 md:gap-10 mt-10">
              <div className="item">
                <h3 className="text-white font-semibold mb-2">Company</h3>
                <div className="link-wra flex flex-col">
                  <Link href="/about" className="text-gray-400 hover:text-white transition">About</Link>
                  <Link href="/our-founders" className="text-gray-400 hover:text-white transition">Our Founders</Link>
                  <button onClick={() => handleNavigation("watch-our-story")} className="text-gray-400 hover:text-white transition text-left">Watch Our Story</button>
                </div>
              </div>

              <div className="item">
                <h3 className="text-white font-semibold mb-2">Product</h3>
                <div className="link-wra flex flex-col">
                  <button onClick={() => handleNavigation("features")} className="text-gray-400 hover:text-white transition text-left">Features</button>
                  <button onClick={() => handleNavigation("pricing")} className="text-gray-400 hover:text-white transition text-left">Pricing</button>
                  <Link href="/roadmap" className="text-gray-400 hover:text-white transition">Roadmap</Link>
                </div>
              </div>

              <div className="item">
                <h3 className="text-white font-semibold mb-2">Resources</h3>
                <div className="link-wra flex flex-col">
                  <Link href="/blog" className="text-gray-400 hover:text-white transition">Guides</Link>
                  <Link href="/help-center" className="text-gray-400 hover:text-white transition">Help Center</Link>
                  <Link href="/press" className="text-gray-400 hover:text-white transition">Press</Link>
                </div>
              </div>

              <div className="item">
                <h3 className="text-white font-semibold mb-2">Community</h3>
                <div className="link-wra flex flex-col">
                  <Link href="/affiliate" className="text-gray-400 hover:text-white transition">Affiliate</Link>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
                </div>
              </div>

              <div className="item">
                <h3 className="text-white font-semibold mb-2">Account</h3>
                <div className="link-wra flex flex-col">
                  <Link href="" className="text-gray-400 hover:text-white transition">Login</Link>
                  <Link href="" className="text-gray-400 hover:text-white transition">Sign Up</Link>
                </div>
              </div>
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
              <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Wovvo. All rights reserved.</p>
              <p className="text-gray-400 text-sm">Prices shown are in USD.</p>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-sm text-gray-400 text-center">
                <Link href="/compliance" className="underline underline-offset-4">Compliance & Platform Disclaimer</Link>
                <span>|</span>
                <Link href="/cookie-declaration" className="underline underline-offset-4">Cookie Declaration</Link>
                <span>|</span>
                <Link href="/dmac" className="underline underline-offset-4">DMCA & Content Removal Policy</Link>
                <span>|</span>
                <Link href="/privacy-policy" className="underline underline-offset-4">Privacy Policy</Link>
                <span>|</span>
                <Link href="/terms-and-conditions" className="underline underline-offset-4">Terms and Conditions</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Play Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="ft-play-btn bg-white/20 hover:bg-white/30 p-6 rounded-full text-white text-2xl transition pointer-events-auto z-30 absolute bottom-8 right-8"
          aria-label="Play video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="lucide lucide-play" aria-hidden="true">
            <polygon points="6 3 20 12 6 21 6 3"></polygon>
          </svg>
        </button>
      </footer>

      {/* Modal with TikTok Embed */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] px-4">
          <div className="relative bg-white max-w-[600px] w-full p-4 rounded-lg shadow-xl m-h-[80vh] overflow-y-scroll">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black hover:text-red-500 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@alisonsojaugc/video/7532591594122382647"
              data-video-id="7532591594122382647"
              style={{ maxWidth: "100%", minWidth: "325px" }}
            >
              <section>
                <a target="_blank" title="@alisonsojaugc" href="https://www.tiktok.com/@alisonsojaugc?refer=embed">@alisonsojaugc</a> @Wovvo.ai is going to be a total game changer for finding UGC jobs! <a title="ugc" target="_blank" href="https://www.tiktok.com/tag/ugc?refer=embed">#ugc</a> <a title="ugccreator" target="_blank" href="https://www.tiktok.com/tag/ugccreator?refer=embed">#ugccreator</a>
              </section>
            </blockquote>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterSection;