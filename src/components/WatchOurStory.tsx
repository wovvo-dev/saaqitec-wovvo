"use client";

import { useRef, useState } from "react";
import { plans } from "@/constants/pricing_plans";
import useModalStore from "@/zustand-hooks/consent-modal";
import { sendGAEvent } from "@next/third-parties/google";
import { Play, Pause } from "lucide-react";
import Link from "next/link";
import handleCheckout from "@/services/handleCheckout";
import { useReferral } from "@/context/ReferralContext";

export default function watchourstory() {
  const { setPaymentLink, openModal } = useModalStore();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
        const { referral } = useReferral();


  const handlePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      video.muted = true;
      await video.play();

      video.muted = false;
      setIsPlaying(true);
      setShowOverlay(false);
    } catch (error) {
      console.error("Video play failed:", error);
    }
  };

  const handlePause = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden group" id="watch-our-story">
      {!isPlaying && (
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/videos/giffy.gif"
            alt="GIF animation"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: `
                radial-gradient(circle, rgba(255,255,255,0) 20%, rgba(255,255,255,0.7) 80%), 
                linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,1) 100%)
              `,
            }}
          />
        </div>
      )}

      <video
        ref={videoRef}
        src="/videos/wovvo2.mp4"
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${isPlaying ? "opacity-100" : "opacity-0"}`}
        onClick={() => {
          if (isPlaying) {
            handlePause();
          } else {
            handlePlay();
          }
        }}
      />

      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        {showOverlay ? (
          <button
            onClick={handlePlay}
            className="bg-white/20 hover:bg-white/30 p-6 rounded-full text-white text-2xl transition pointer-events-auto z-30"
            aria-label="Play video"
          >
            <Play />
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 hover:bg-white/30 p-6 rounded-full text-white text-2xl pointer-events-auto z-30"
            aria-label="Pause video"
          >
            <Pause />
          </button>
        )}
      </div>

      {/* Intro Text */}
      {showOverlay && (
        <div className="absolute inset-0 z-20 flex items-end justify-center min-h-screen pb-16 pointer-events-auto">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <div className="flex items-center flex-col gap-2">
                <img src="/logo.png" alt="Wovvo" className="h-8 justify-self-center" />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real Jobs</h2>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Unlimited Growth</h2>
              </div>
              <div className="flex justify-center mt-8 gap-2">
            
                <button
                  onClick={() => {
                    sendGAEvent("event", "Join", { value: "User Joined!" });
                    setPaymentLink(plans[1]?.paymentLink);
                    // openModal("Become a Forever Founder Member Now!");
                  }}
                  className="inline-flex items-center pointer-events-none  line-through justify-center px-8 py-3 rounded-lg text-lg transition-colors bg-gray-100 text-gray-900 hover:bg-gray-200"

                >
                  Forever Founder
                </button>
                    <Link href={plans[1]?.paymentLink}>
                <button
                  onClick={() => {
                    sendGAEvent("event", "Join", { value: "User Joined!" });
                    setPaymentLink(plans[1]?.paymentLink);
                    handleCheckout(referral)
                    // openModal("Become a Launch Crew Member Now!");
                  }}
                  className="inline-flex items-center  justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"

                >
                  🔥 Creator+ 
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
