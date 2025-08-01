'use client'
import { useEffect } from 'react';
import TimelineSection from "src/components/TimelineSection";

const Roadmap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="relative bg-white pt-24 pb-16">
      {/* Hero Banner */}
      <div className="aboutbanner flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center">
        <h2 className="text-[52px] font-bold text-center text-white">
          Wovvo Roadmap
        </h2>
      </div>

      <TimelineSection />

      {/* Call to Action */}
      <div className="creue-cto py-24 bg-gradient-to-r from-primary to-secondary text-white flex justify-center items-center">
        <div className="cta-form max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3>Product Updates</h3>
          <div className="searchbar w-[350px] md:w-[600px] relative mt-0">
            <input
              className="placeholder-black bg-white w-full h-[50px] outline-none border-none px-[30px] text-black text-base font-light rounded-lg"
              type="email"
              placeholder="Your Email Address"
            />
            <button className="absolute right-0 top-1/2 -translate-x-[10px] -translate-y-1/2 bg-[#ee2720] text-white text-base px-[25px] pt-[10px] pb-[11px] leading-none rounded-[5px]">
              Send
            </button>
          </div>
          <p>
            Be first to know when new tools drop. <br /> Boost your productivity.
          </p>
        </div>
      </div>

      {/* Instagram Section */}
      <section id="about_gallery" className="pt-10 md:pt-12 md:mb-[0px] mb-[-80px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mx-auto mb-10">
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Follow Us on Instagram</h2>
            <p className="mt-2 text-4xl font-bold sm:text-4xl">
              See What We've <span className="gradient-text">Been Working On</span>
            </p>
            <p className="mt-4 text-md md:text-xl text-gray-600">
              <a href="https://www.instagram.com/Wovvo.ai" target="_blank">Wovvo.ai</a>
            </p>
          </div>

          {/* ✅ Elfsight Embed */}
          <div className="elfsight-app-936ba49a-b1ac-493c-87e1-d2557d0fe4c2" data-elfsight-app-lazy />
        </div>
      </section>
    </main>
  );
};

export default Roadmap;