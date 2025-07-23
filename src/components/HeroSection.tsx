"use client";

import React from "react";
import { Check, Infinity } from "lucide-react";
import useModalStore from "../zustand-hooks/consent-modal";
import { plans } from "../constants/pricing_plans";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import handleCheckout from "../services/handleCheckout";
import { useReferral } from "../context/ReferralContext";
// import { plans } from "../constants/pricing_plans";

const HeroSection: React.FC = () => {
  const { openModal, setPaymentLink } = useModalStore();
    const { referral } = useReferral();
  
  return (
    <div className="relative bg-white pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl lg:text-[64px] font-bold leading-[1.2] mb-6">
              <span className="inline-block sm:block">One Dashboard.</span>
              <span className="inline-block sm:block gradient-text h-auto">
                Every UGC Job.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Stop chasing scattered brand deals across multiple platforms. Discover UGC
              campaigns, casting calls, and brand briefs — all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* <Link href={plans[1]?.paymentLink} > */}
                <button
                  type="button"
                  onClick={() => {
                    sendGAEvent("event", "Join", { value: "User Joined!" });
                    setPaymentLink(plans[1]?.paymentLink);
                    handleCheckout(referral)
                    // openModal("Become a Forever Founder Member Now!");
                  }}
                  className="bg-primary text-white px-8 py-3 rounded-lg text-lg hover:bg-primary-dark transition-colors"
                >
                  Pay Once - Access Forever
                </button>
              {/* </Link> */}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <Check className="h-3 w-3 text-white" />
              </div>
              <span className="text-gray-900 font-bold">
                Lock in your access. First launch coming soon.
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <div className="flex flex-wrap justify-start items-center space-x-6 border-b border-gray-100 pb-4 mb-6">
                <p className="text-primary font-medium cursor-default">
                  Available Jobs
                </p>
                <p className="text-gray-400 cursor-default">Platforms</p>
                <p className="text-gray-400 cursor-default">Categories</p>
                <p className="text-gray-400 cursor-default">Filters</p>
              </div>
              <div className="grid grid-cols-4 gap-8 sm:gap-4 mb-8">
                <div className="text-center ">
                  <div className=" flex items-center justify-center text-2xl font-semibold text-gray-900">
                    <Infinity size={33} />
                  </div>
                  <div className="text-sm text-gray-500">JOBS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900">5</div>
                  <div className="text-sm text-gray-500">PLATFORMS</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900">
                    3H
                  </div>
                  <div className="text-sm text-gray-500">UPDATES</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-semibold text-gray-900">250</div>
                  <div className="text-sm text-gray-500">SPOTS</div>
                </div>
              </div>
              <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full h-full bg-gradient-to-t from-primary/20 to-primary/5 rounded-lg"></div>
                </div>
                <div className="relative z-10 p-4">
                  <div className="space-y-4">
                    {[
                      "Upwork",
                      "LinkedIn",
                      "Twitter (X)",
                      "Threads",
                      "Backstage",
                    ].map((platform) => (
                      <div
                        key={platform}
                        className="bg-white/90 p-3 rounded-lg shadow-sm"
                      >
                        {platform}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
