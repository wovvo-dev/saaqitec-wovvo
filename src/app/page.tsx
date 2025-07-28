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
        <div className="py-12 md:py-24">
          <SocialProof
            view={8}
            title="These Creators Said"
            highlight="Yes to Wovvo"
            subtitle="Creators you trust. A platform they believe in."
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