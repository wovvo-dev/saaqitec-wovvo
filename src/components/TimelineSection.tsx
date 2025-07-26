import React, { useState, useEffect, useRef } from 'react';
import { Users, Rocket, Code, Smartphone, Star, Zap, Shield, Bell, Filter, Search, MessageSquare, Sparkles, Plus, BellRing, SearchCheck, User2Icon, Bolt, Phone, SmartphoneCharging, SmartphoneIcon, Calendar, ListMinus, Computer, Brain } from 'lucide-react';

const timelineItems = [
    {
        title: 'Access Now Open (Deadline: July 15, 2025)',
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
            {
                icon: Plus,
                title: 'Bonus: Templates, pitch guides, and outreach scripts',
            }

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
            {
                icon: Bolt,
                title: 'More platforms: Expand from 5 to 10+ sources',
            },
            {
                icon: Sparkles,
                title: 'Premium briefs, featured tools, and spotlight listings',
            }
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
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="gradient-text ">Pre-Launch Memberships Open</span> — Until July 15, 2025
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        We're currently accepting 80 founding members ahead of our public release. Founding members receive early
access, exclusive perks, and permanently discounted plans.
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
                                                    <h4 className="font-semibold text-gray-900">{feature.title}</h4>
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