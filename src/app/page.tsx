'use client'
// import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import PlatformLogosSection from "../components/PlatformLogosSection";
import PricingSection from "../components/PricingSection";
// import LaunchInfoSection from "../components/LaunchInfoSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitsSection from "../components/BenefitsSection";
import CtaSection from "../components/CtaSection";
// import FooterSection from "../components/FooterSection";
import WatchOurStory from "@/components/WatchOurStory";
// import UserConsentModal from "@/components/ui/user-consent-modal";
// import TermsAndConditionsModal from "@/components/ui/terms-conditions-modal";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import FAQSection from "@/components/FaqsSection";
import UGCJobAccessCard from "@/components/UGCJobAccessCard";
import TimelineSection from "@/components/TimelineSection";
import TestimonialsSection from "@/components/TestimonialSections";
import PhoneCarousel from "@/components/PhoneCorousal";
import SocialProof from "@/components/SocialProof";
import NewTestimonials from "@/components/NewTestimonials";
// import Timeline from "@/components/Timeline";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });

          // Clear the hash after scrolling
          window.history.replaceState(null, "", window.location.pathname);
        }, 50);
      }
    }
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        {/* <CheckoutWithTerms /> */}
        <PlatformLogosSection />
        {/* <Timeline /> */}
        <PricingSection />
        {/* <PhoneCarousel /> */}
        <SocialProof />
        {/* <TestimonialsSection /> */}
        <TimelineSection />
        <WatchOurStory />
        {/* <LaunchInfoSection /> */}
        <FeaturesSection />
        <NewTestimonials />

        <BenefitsSection />
        <UGCJobAccessCard />
        <FAQSection />
        <CtaSection />
      </main>
      {/* <FooterSection /> */}
      {/* <UserConsentModal /> */}
      {/* <TermsAndConditionsModal /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
