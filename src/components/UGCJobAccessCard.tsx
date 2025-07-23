import { ArrowRight, Link } from 'lucide-react';
import { plans } from "@/constants/pricing_plans";
import useModalStore from "../zustand-hooks/consent-modal";
import { sendGAEvent } from "@next/third-parties/google";
import React from 'react';
import handleCheckout from '@/services/handleCheckout';
import { useReferral } from '../context/ReferralContext';

const UGCJobAccessCard = () => {
  const { setPaymentLink, openModal } = useModalStore();
          const { referral } = useReferral();
  

  return (
    <div className="flex items-center justify-center h-[40vh] px-4">
      <div className="w-full max-w-7xl  md:p-12 lg:p-16 rounded-lg">
        <div>
          <div className="flex items-center mb-4">
            <span className="text-base font-semibold text-primary tracking-wide uppercase">
              ONE PAYMENT. FULL ACCESS
            </span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get <span className="gradient-text">Instant Access</span> to the Top UGC Jobs
            Every Day!

          </h2>

          <p className="text-slate-700 text-lg mb-8">
            Built to save you time, boost efficiency, and help you land more paid work.
          </p>
{/* <Link href={plans[1]?.paymentLink}> */}
          <button
            onClick={() => {
              sendGAEvent("event", "Join", { value: "User Joined!" });
              setPaymentLink(plans[1]?.paymentLink);
              handleCheckout(referral)
              // openModal("Become a Forever Founder Member Now!");
            }}
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors"
          >
            Pay Once - Access Forever
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default UGCJobAccessCard;
