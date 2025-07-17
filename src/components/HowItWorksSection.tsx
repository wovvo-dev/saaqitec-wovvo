import React from 'react';
import { Search, Filter, ExternalLink } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">How It <span className="gradient-text">Works</span></h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10  rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">We Find the Jobs</h3>
            <p className="text-gray-600">
              We scan the internet daily for fresh UGC opportunities across platforms like Upwork, LinkedIn, Twitter (X), Threads, and Backstage. Expect 30–50+ new jobs every day across a range of industries.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">You Filter & Apply</h3>
            <p className="text-gray-600">
              Quickly filter by platform, brand niche, or keyword — whether you&apos;re after skincare campaigns, TikTok demos, or product reviews. Find the right opportunities without the noise.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ExternalLink className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Apply Directly at the Source</h3>
            <p className="text-gray-600">Each listing links straight to the original post — no middlemen, no extra steps. Click, apply, and connect with brands faster and more directly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;