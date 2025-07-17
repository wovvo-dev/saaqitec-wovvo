"use client";

import React from "react";
import {
  Search,
  Filter,
  ExternalLink,
  BookOpen,
  Check,
  Users,
  Shield,
} from "lucide-react";
import { plans } from "@/constants/pricing_plans";
import useModalStore from "@/zustand-hooks/consent-modal";
import { sendGAEvent } from "@next/third-parties/google";
import Link from "next/link";
import handleCheckout from "@/services/handleCheckout";
import { useReferral } from "@/context/ReferralContext";

const features = [
  {
    title: "We Find the Best UGC Jobs",
    description:
      "We scan the internet daily for fresh UGC opportunities across Upwork, LinkedIn, Twitter (X), Threads, and Backstage. Expect 30–50+ new jobs per day across multiple industries.",
    icon: Search,
    preview: (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Search className="h-5 w-5 animate-bounce text-primary" />
            <span className="font-medium">Job Search</span>
          </div>
          {/* <button className="text-primary bg-primary/5 px-4 py-1.5 rounded-full text-sm font-medium">
            30K+ Jobs
          </button> */}
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Skincare Brand Demo</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Upwork
              </span>
              <span className="text-primary font-medium">$200</span>
            </div>
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <span className="text-gray-600">Fashion Lookbook</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                LinkedIn
              </span>
              <span className="text-primary font-medium">$350</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Filter & Apply Directly",
    description:
      "Search by platform, brand niche, or keyword. Every job links straight to its original platform — no middlemen, no waiting. Get instant access to high-quality UGC opportunities.",
    icon: Filter,
    preview: (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 animate-bounce text-primary" />
            <span className="font-medium">Smart Filters</span>
          </div>
          <div className="flex space-x-2">
            <ExternalLink className="h-5 w-5 text-primary" />
            <BookOpen className="h-5 w-5 text-primary" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">PLATFORMS</div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Upwork
              </span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                LinkedIn
              </span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-1">CATEGORIES</div>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Beauty
              </span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                Fashion
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-sm text-gray-600 mb-2">SEARCH</div>
            <input
              type="text"
              placeholder="e.g. skincare, TikTok, product demo"
              className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Curated Job Feed",
    description:
      "Access only the highest quality UGC opportunities. Our team verifies each listing to ensure legitimacy and fair compensation for creators.",
    icon: Check,
    preview: (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Check className="h-5 animate-bounce w-5 text-primary" />
            <span className="font-medium">Verified Jobs</span>
          </div>
          <span className="text-primary bg-primary/5 px-4 py-1.5 rounded-full text-sm font-medium">
            Quality First
          </span>
        </div>
        <div className="space-y-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-gray-700">Verified Brand</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-gray-700">Fair Compensation</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Easy Platform Access",
    description:
      "Sign in securely with Google and start applying to jobs immediately. No complex setup required - just connect and start creating.",
    icon: Users,
    preview: (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 animate-bounce w-5 text-primary" />
            <span className="font-medium">Secure Access</span>
          </div>
        </div>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-200 rounded-lg px-4 py-2">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    ),
  },
];

const FeaturesSection: React.FC = () => {
  const { setPaymentLink, openModal } = useModalStore();
        const { referral } = useReferral();


  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl p-8 relative overflow-hidden">
                  <div className="relative z-10 bg-white/95 rounded-xl shadow-lg">
                    {feature.preview}
                  </div>
                </div>
              </div>

              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                <h2 className="text-4xl font-bold mb-6">
                  {feature.title.split(" ").map((word, i, arr) =>
                    i === arr.length - 1 ? (
                      <span key={i} className="gradient-text">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  {feature.description}
                </p>
                {/* <Link href={plans[1]?.paymentLink}> */}
                <button
                  onClick={() => {
                    sendGAEvent("event", "Join", { value: "User Joined!" });
                    setPaymentLink(plans[1]?.paymentLink);
                    handleCheckout(referral)
                    // openModal("Become a Forever Founder Member Now!");
                  }}
                  className="bg-primary text-white px-8 py-3 font-normal rounded-lg text-lg hover:bg-primary-dark transition-colors"
                >
                  Pay Once - Access Forever
                </button>
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
