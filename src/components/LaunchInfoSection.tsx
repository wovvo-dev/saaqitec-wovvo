import React from 'react';
import { Check } from 'lucide-react';

const LaunchInfoSection: React.FC = () => {
  return (
    <section className=" bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="gradient-text ">Founding Memberships Open</span> — Until June 10, 2025
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re currently accepting 80 founding members ahead of our public release. Founding members receive early access, exclusive perks, and permanently discounted plans.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Version 1 Launch — July 1, 2025</h3>
            <ul className="space-y-4">
              {[
                'Centralized UGC job board updated daily',
                'Capped at 80 UGC creators for exclusive early access',
                'Smart filters by platform, industry, and content type',
                'Direct application links (no middlemen)',
                'Keyword search for brand, niche, or content format',
                'Private creator community access',
                'Creator resource bundle: scripts, templates, and guides',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Version 2 Launch — August 1, 2025</h3>
            <ul className="space-y-4">
              {[
                'Personalized dashboard with saved jobs, application history, and bookmarking',
                'Priority access to new features, job listings, and beta tools',
                'Expanded job sourcing from 10+ popular platforms',
                'AI-powered job suggestions based on profile',
                'Email alerts and in-app notifications',
                'Creator profile customization',
                'Premium brand briefs with early access',
                'Featured creator tools and spotlight opportunities'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchInfoSection;