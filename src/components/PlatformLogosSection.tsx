"use client";
import React from "react";

const platforms = [
  {
    name: "Upwork",
    logo: "/platform-logos/upwork.png",
  },
  {
    name: "LinkedIn",
    logo: "/platform-logos/linkedin.png",
  },
  {
    name: "Twitter",
    logo: "/platform-logos/twitter.png",
  },
  {
    name: "Threads",
    logo: "/platform-logos/threads.png",
  },
  {
    name: "Backstage",
    logo: "/platform-logos/backstage.png",
  },
];

const PlatformLogosSection: React.FC = () => {
  return (
    <section className="pt-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex space-x-24 animate-slide hover:pause">
            {[...platforms, ...platforms, ...platforms].map(
              (platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 group"
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className={`object-contain grayscale transition-all duration-300 transform group-hover:scale-125 ${
                      platform.name === "Upwork" ? "h-10" : "h-8"
                    }`}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformLogosSection;
