"use client";

import React from "react";
import { Clock, Star, Settings, Lock, Bell, Users } from "lucide-react";
import useModalStore from "../zustand-hooks/consent-modal";
import { useReferral } from "../context/ReferralContext";

const benefits = [
  {
    icon: Clock,
    title: "Save Time Finding UGC Gigs",
    description: "Stop wasting hours searching across platforms.",
  },
  {
    icon: Star,
    title: "Be First to New Opportunities",
    description: "Get early access to high-quality UGC jobs.",
  },
  {
    icon: Settings,
    title: "Help Shape the Future of Wovvo",
    description: "Your input guides what we build next.",
  },
  {
    icon: Lock,
    title: "Lock In Lifetime Founder Perks",
    description: "Secure early access, benefits, and one-time pricing.",
  },
  {
    icon: Bell,
    title: "Stay Ahead with Job Alerts",
    description: "Get notified when new matches go live.",
  },
  {
    icon: Users,
    title: "Join a Community of Creators",
    description: "Connect, collaborate, and grow together inside Wovvo.",
  },
];

const BenefitsSection: React.FC = () => {
  const { setPaymentLink, openModal } = useModalStore();
          const { referral } = useReferral();
  

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Why Join as a{" "}
            <span className="gradient-text">Founding Creator</span>
          </h2>
          <p className="text-xl text-gray-600">
            Lock in exclusive benefits and help shape the future of UGC job
            discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
