'use client'
import HeroSection from "../components/HeroSection";
import PlatformLogosSection from "../components/PlatformLogosSection";
import PricingSection from "../components/PricingSection";
import FeaturesSection from "../components/FeaturesSection";
import BenefitsSection from "../components/BenefitsSection";
import CtaSection from "../components/CtaSection";
import WatchOurStory from "../components/WatchOurStory";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import FaqsSection from "../components/FaqsSection"; // ✅ Fixed casing
import UGCJobAccessCard from "../components/UGCJobAccessCard";
import TimelineSection from "../components/TimelineSection";
import TestimonialsSection from "../components/TestimonialSections";
import PhoneCarousel from "../components/PhoneCorousal";
import SocialProof from "../components/SocialProof";
import NewTestimonials from "../components/NewTestimonials";
import PopularNiches from "../components/PopularNiches";
import HomeBlog from "../components/HomeBlog";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
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
        {/* Popular niches */}
        <PopularNiches />
        {/* <Timeline /> */}
        <PricingSection />
        {/* <PhoneCarousel /> */}
        <div className="py-12 md:py-24" id="cretor-section-home">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-col mb-10">
            <p className="text-4xl font-bold sm:text-4xl text-center px-4 md:px-8">
                These Creators Said <span className="gradient-text">Yes to Wovvo</span>
            </p>
            <p className="mt-4 mb-4 text-xl text-gray-600 text-center px-4 md:px-8">
                Creators you trust. A platform they believe in.
            </p>
            <Link href={'/our-founders'} className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors">Forever Founders</Link>
          </div>      
          <SocialProof
            view={8}
            title="These Creators Said"
            highlight="Yes to Wovvo"
            subtitle="Creators you trust. A platform they believe in."
            animate={true} // or false
          />
        </div>
        {/* <TestimonialsSection />
        <TimelineSection /> */}
        <WatchOurStory />
        {/* <LaunchInfoSection /> */}
        <FeaturesSection />
        <NewTestimonials />
        {/* <BenefitsSection /> */}
        <UGCJobAccessCard />
        <FaqsSection /> {/* ✅ Updated usage */}
        <HomeBlog />
        <CtaSection />
      </main>
      {/* <FooterSection /> */}
      {/* <UserConsentModal /> */}
      {/* <TermsAndConditionsModal /> */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}