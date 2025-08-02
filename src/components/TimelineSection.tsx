import React, { useState, useEffect, useRef } from 'react';
import { Users, Rocket, Code, Smartphone, Star, Zap, Shield, Bell, Filter, Search, MessageSquare, Sparkles, Plus, BellRing, SearchCheck, User2Icon, Bolt, Phone, SmartphoneCharging, SmartphoneIcon, Calendar, ListMinus, Computer, Brain, StarsIcon } from 'lucide-react';

const timelineItems = [
    {
        title: 'Access Now Open (100% SOLD OUT)',
        date: 'June',
        description: 'Join the first wave of creators shaping the future of UGC job discovery.',
        icon: Users,
        features: [
            {
                icon: Star,
                title: 'One-time payment, lifetime access',
            },
            {
                icon: Shield,
                title: 'Early access to the Wovvo platform',
            },
            {
                icon: Zap,
                title: 'Founders-only perks, coaching, and community',
            },
            {
                icon: Rocket,
                title: 'Your chance to help shape the platform from the ground up',
            }

        ]
    },
    {
        title: 'Version 1 Launches',
        date: 'July ',
        description: 'The first version of Wovvo goes live — exclusively for our founding members.',
        icon: Code,
        features: [
            {
                icon: Calendar,
                title: 'Daily-updated UGC job board',
            },
            {
                icon: Filter,
                title: 'Smart filters by platform, niche, and job type',
            },
            {
                icon: SearchCheck,
                title: 'Keyword search (e.g. “skincare”, “TikTok”, “tech”)',
            },
            {
                icon: Bell,
                title: 'Direct application links (no middlemen)',
            },
            // {
            //     icon: ListMinus,
            //     title: 'Capped to 80 users for high-quality access',
            // },
            {
                icon: Star,
                title: 'Access to the private creator community',
            },
            // {
            //     icon: Plus,
            //     title: 'Bonus: Templates, pitch guides, and outreach scripts',
            // }

        ]
    },
    {
        title: 'Version 2 Development & Expansion',
        date: 'August',
        description: 'We start building a more personalized and powerful creator experience.',
        icon: Rocket,
        features: [
            {
                icon: MessageSquare,
                title: 'Saved jobs, bookmarks, and application history',
            },
            {
                icon: BellRing,
                title: 'Email alerts and in-app notifications',
            },

            {
                icon: Brain,
                title: 'AI job recommendations tailored to your profile',
            },
            {
                icon: User2Icon,
                title: 'Creator profile customization',
            },

            {
                icon: Star,
                title: 'Priority access to early tools and beta features',
            },
            // {
            //     icon: Bolt,
            //     title: 'More platforms: Expand from 5 to 10+ sources',
            // },
            // {
            //     icon: Sparkles,
            //     title: 'Premium briefs, featured tools, and spotlight listings',
            // }
            {
                icon: StarsIcon,
                title: 'Smarter, Faster, More Personalized<br> New tools to help you apply faster and stay in control of your job feed.',
            },
            {
                icon: Rocket,
                title: 'In-App Job Alerts<br> Live alerts while logged in. Pop-up and bell icon notifications appear for jobs that match your filters.',
            },
            {
                icon: Search,
                title: 'Suggested Job Tags (Smarter Onboarding)<br> Fast-track setup with smart job tag bundles based on your content style, niche, and platform.',
            },
            {
                icon: Bell,
                title: 'Private Profile Photo Setting<br> Add a personal touch to your dashboard with a profile image only you can see.',
            },
        ]
    },
    {
        title: 'Mobile App Launch',
        date: 'September',
        description: 'Take Wovvo with you — apply, connect, and manage jobs on the go.',
        icon: Smartphone,
        features: [
            {
                icon: Smartphone,
                title: 'Native iOS and Android apps',
            },
            {
                icon: Bell,
                title: 'Push notifications for new job matches',
            },
            {
                icon: Zap,
                title: 'Sleek, mobile-first experience for busy creators',
            },
            {
                icon: Filter,
                title: 'Stay Updated. Get Organized. Know What’s New.',
            },
            {
                icon: User2Icon,
                title: 'What’s New in Wovvo" Walkthrough<br> A guided pop-up tour showing every new feature. A permanent “What’s New” tab will also be added to your dashboard.',
            },
            {
                icon: Star,
                title: 'Team Access Controls<br> Invite a virtual assistant or team member to help you run your creator business inside Wovvo with limited access.',
            },
            {
                icon: Phone,
                title: 'Creator Demographic Insights<br> New onboarding questions help personalize your experience. Info like city, experience level, and income goals helps unlock smarter features.',
            }
        ]
    },
    {
        title: 'Creator Control Center',
        date: 'October',
        description: 'Save, Track, Succeed',
        icon: Computer,
        features: [
            {
                icon: Smartphone,
                title: 'Favorites + Applied Tracker<br> Save listings, track which jobs you’ve applied to, and keep your pipeline organized.',
            },
            {
                icon: Bell,
                title: 'Enhanced Affiliate Dashboard <br> Real-time tracking for clicks, conversions, commissions, and custom campaigns.',
            },
            {
                icon: Zap,
                title: 'Creator Toolkit (Beta)<br> Download pitch decks, outreach scripts, pricing guides, and other pro tools.',
            },
            {
                icon: Filter,
                title: 'Custom Notification Controls<br> Choose quiet hours, business-day alerts, or weekly digests to fit your workflow.',
            },
        ]
    },
    {
        title: 'Built for Brands',
        date: 'November',
        description: 'Built for Brands, Agencies, and Power Creators',
        icon: Calendar,
        features: [
            {
                icon: Plus,
                title: 'Business Dashboard (v1)<br> Brands and agencies can now post jobs, manage submissions, and shortlist creators in one place.',
            },
            {
                icon: Bell,
                title: 'Smart Job Suggestions (AI-Powered)<br> Wovvo learns your content style and shows better matches based on your activity and preferences.',
            },
            {
                icon: Smartphone,
                title: 'Mobile App Beta (iOS & Android)<br> Use Wovvo on the go. Apply, organize, and manage your job feed from your phone.',
            },
            {
                icon: Filter,
                title: 'Wovvo for Business: Los Angeles and New York Launch<br> Our business portal launches first in LA and NYC to help agencies and brands connect with vetted creators faster.',
            },
        ]
    },
    {
        title: 'Built-In',
        date: 'December',
        description: 'Built-In Growth and Income Tools',
        icon: Zap,
        features: [
            {
                icon: MessageSquare,
                title: 'Creator CRM (v1)<br> Track your brand outreach, past applications, and follow-ups in one streamlined view.',
            },
            {
                icon: Bell,
                title: 'Multi-Language Support Begins<br> First wave of language support launches in Spanish and French.',
            },
            {
                icon: SearchCheck,
                title: 'Holiday Campaign Hub<br> Discover and track high-volume opportunities tied to Black Friday, Cyber Monday, and year-end promotions.',
            },
        ]
    },
];

const TimelineSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const datesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const viewportMiddle = window.innerHeight / 2;

            // Update active index based on scroll position
            timelineRefs.current.forEach((ref, index) => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    const elementMiddle = rect.top + rect.height / 2;

                    if (Math.abs(elementMiddle - viewportMiddle) < rect.height / 2) {
                        setActiveIndex(index);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="py-16" id='timeline'>
            <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6 timline-main-heading">
                        <span className="gradient-text ">Creator+ is Closing Soon</span> Lock in Lifetime Access
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Forever Founders is 100% sold out ahead of our full launch. Creator+ is the final tier available for early members. Get lifetime access, exclusive perks, and a one-time membership before it closes.
                    </p>
                </div>

                <div className="relative min-h-[200vh]" ref={containerRef}>
                    <div className="grid lg:grid-cols-[400px,1fr] gap-24 relative">
                        {/* Dates Column */}
                        <div ref={datesRef} className="space-y-12 pl-8 sticky h-[70vh]  top-[104px] hidden lg:block">
                            {timelineItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`transition-all duration-500 ${index === activeIndex
                                        ? 'translate-x-0 opacity-100'
                                        : '-translate-x-4 opacity-40'
                                        }`}
                                >
                                    <div
                                        className={`font-bold transition-all duration-500 ${index === activeIndex
                                            ? 'text-6xl text-gray-900'
                                            : 'text-2xl text-gray-400'
                                            }`}
                                    >
                                        {item.date}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Content Column with Timeline Line */}
                        <div className="relative space-y-24 lg:space-y-48 pb-48">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-24 bottom-0 w-px bg-gradient-to-b from-primary to-secondary" />

                            {timelineItems.map((item, index) => (
                                <div
                                    key={index}
                                    ref={(el) => void (timelineRefs.current[index] = el)}
                                    className="relative"
                                >
                                    {/* Timeline Dot */}
                                    <div
                                        className={`absolute left-[-9px] top-[60px] w-[18px] h-[18px] rounded-full transition-all duration-500 ${index === activeIndex
                                            ? 'bg-gradient-to-r from-primary to-secondary'
                                            : 'bg-gray-300'
                                            }`}
                                    />

                                    <div
                                        className={` bg-white rounded-2xl p-8 shadow-xl transition-all duration-500 ml-8 ${index === activeIndex ? 'opacity-100 translate-y-0 scale-95' : 'opacity-50 translate-y-4 scale-85'
                                            }`}
                                    >

                                        <div
                                            className={`block mb-4 lg:hidden font-bold transition-all duration-500 ${index === activeIndex
                                                ? 'text-3xl text-gray-900'
                                                : 'text-xl text-gray-400'
                                                }`}
                                        >
                                            {item.date}
                                        </div>
                                        <div className="flex items-center gap-4 mb-6">
                                            <div
                                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${index === activeIndex
                                                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                                    : 'bg-gray-100 text-gray-400'
                                                    }`}
                                            >
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                        </div>

                                        <p className="text-gray-600 mb-6">{item.description}</p>

                                        <div className="grid gap-4">
                                            {item.features.map((feature, featureIndex) => (
                                            <div
                                                key={featureIndex}
                                                className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                            >
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <feature.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <h4
                                                className="font-semibold text-gray-900"
                                                dangerouslySetInnerHTML={{ __html: feature.title }}
                                                />
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TimelineSection;