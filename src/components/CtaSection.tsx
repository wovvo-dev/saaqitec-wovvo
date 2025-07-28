"use client";

import React from "react";
import { plans } from "../constants/pricing_plans";
import useModalStore from "../zustand-hooks/consent-modal";
import { sendGAEvent } from "@next/third-parties/google";
import handleCheckout from "../services/handleCheckout";
import { useReferral } from "../context/ReferralContext";

const CtaSection: React.FC = () => {
  const { setPaymentLink, openModal } = useModalStore();
  const { referral } = useReferral();


  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl mb-6">
            Ready to Save Hours and Still Land Paid UGC Deals?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Join the tool creators are using to land UGC gigs faster. One dashboard. All the UGC jobs filtered, updated daily, and organized by niche.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 cursor-pointer">

            <a href={plans[1]?.paymentLink}
              onClick={() => {
                sendGAEvent("event", "Join", { value: "User Joined!" });
                setPaymentLink(plans[1]?.paymentLink);
                // openModal("Become a Forever Founder Member Now!");
              }}
              className="bg-white cursor-pointer line-through pointer-events-none  text-primary py-3 px-8 rounded-lg font-normal hover:bg-white/90 transition-colors duration-200 text-lg shadow-lg"
            >
              Forever Founder – $117- <span className="font-bold">Sold Out</span>
            </a>
            <button
              onClick={() => {
                sendGAEvent("event", "Join", { value: "User Joined!" });
                setPaymentLink(plans[1]?.paymentLink);
                handleCheckout(referral)
                // openModal("Become a Launch Crew Member Now!");
              }}
              className="bg-transparent text-white py-3 px-8 rounded-lg font-normal border border-white hover:bg-white/10 transition-colors duration-200 text-lg"
            >
              🔥Creator+ Pass *Final Chance – $167
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
