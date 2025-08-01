'use client'
import React, { useState, useRef, useEffect } from 'react'
import { HelpCircle, ChevronDown } from 'lucide-react'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const HelpCenterPage = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id: string) => {
    if (pathname === "/help-center") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", window.location.pathname);
      }
    } else {
      router.push(`/#${id}`);
    }
  };
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const suggestionBoxRef = useRef<HTMLDivElement | null>(null)

    const categories = ["All", "About", "Opportunities", "Membership", "Affiliates", "Pre-Launch"]

    const faqData = [
    {
        "category": "About",
        "question": "What is Wovvo?",
        "answer": "Wovvo is a tool built for UGC creators to discover and apply to paid brand opportunities quickly and easily. Our mission is to help creators land consistent, high-quality gigs and grow their careers without relying on follower count or traditional influencer platforms."
    },
    {
        "category": "About",
        "question": "Can't I just find jobs on my own?",
        "answer": "You can — but it takes time and slows your workflow. Wovvo helps you find better jobs, faster."
    },
    {
        "category": "About",
        "question": "Who is Wovvo for?",
        "answer": "Wovvo is for UGC creators, content creators, micro-influencers, and freelance creatives looking for real paid opportunities. No large following required."
    },
    {
        "category": "About",
        "question": "What makes Wovvo different from other platforms?",
        "answer": "A platform like us doesn't exist. Wovvo is a tool that finds UGC opportunities across platforms the posts opportunities and collectively posts them on one feed. We don’t take a percentage of your collabs. Wovvo is designed time-saving we give you full access to listings and let you apply directly."
    },
    {
        "category": "About",
        "question": "Who is behind Wovvo?",
        "answer": "Wovvo is built by creators and marketers who’ve worked in UGC and brand campaigns for years. We created this tool to solve the real challenges we faced ourselves."
    },
    {
        "category": "About",
        "question": "Is Wovvo a platform or a marketplace?",
        "answer": "Wovvo is a creator tool, not a marketplace. We focus on job discovery, access, and simplicity. It’s like having a personal search engine for UGC jobs that doesn’t gatekeep."
    },
    {
        "category": "About",
        "question": "Is there a mobile app?",
        "answer": "An iOS app is currently in development and will launch after the full desktop version. Android will be added in a later release."
    },
    {
        "category": "About",
        "question": "How can I contact the Wovvo team?",
        "answer": "Reach us at team@Wovvo.ai with any questions or support needs."
    },
    {
        "category": "About",
        "question": "Can I use Wovvo if I’m a brand or agency?",
        "answer": "Not yet. Brand-side features are coming soon. In the future, companies will be able to post jobs directly to Wovvo."
    },

    {
        "category": "Opportunities",
        "question": "What types of jobs are listed on Wovvo?",
        "answer": "Wovvo surfaces opportunities like:\nTikTok and Instagram UGC campaigns\nProduct reviews and unboxings\nVoiceover testimonials\nBrand ambassador gigs\nCasting calls and brand briefs\nSponsored short-form content"
    },
    {
        "category": "Opportunities",
        "question": "How often are jobs updated?",
        "answer": "Jobs are added continuously and automatically through our backend sourcing tools. Listings can appear at any time of day, so check in often."
    },
    {
        "category": "Opportunities",
        "question": "Are jobs verified?",
        "answer": "While all jobs are pulled directly from their original source, not all listings are manually vetted. As part of our growth roadmap, we plan to introduce more screening and allow brands to post directly into Wovvo."
    },
    {
        "category": "Opportunities",
        "question": "Can I search by platform or brand category?",
        "answer": "Yes. You can filter by platform (TikTok, Instagram), job type (video, voiceover, testimonial), niche (beauty, wellness, pets), and even compensation type."
    },
    {
        "category": "Opportunities",
        "question": "Do I need experience to apply for jobs?",
        "answer": "No. Many jobs on Wovvo are beginner-friendly and focused on content quality rather than creator history. If you have a strong portfolio and communicate well, you can land deals."
    },
    {
        "category": "Opportunities",
        "question": "Can I use Wovvo internationally?",
        "answer": "Yes. Wovvo is accessible globally and many jobs are open to creators outside the U.S. or Canada. Listings will note any country restrictions if applicable."
    },

    {
        "category": "Membership",
        "question": "What are the current membership options?",
        "answer": "We currently offer one public early-access tier:\nCreator+: One-time payment for lifetime access. Includes full job board access and referral benefits. Creator+ sales end August 31, 2025.\nForever Founder access is 100% sold out and will never reopen."
    },
    {
        "category": "Membership",
        "question": "What does a Wovvo membership include?",
        "answer": "Full access to job listings\nPriority access to new features\nAffiliate referral program (50%)\nAccess to future tool releases and upgrades\nNo monthly billing, ever"
    },
    {
        "category": "Membership",
        "question": "Will there be subscription plans in the future?",
        "answer": "Yes. After August 31, 2025, Wovvo will transition to monthly and annual subscription pricing."
    },
    {
        "category": "Membership",
        "question": "Are memberships refundable or transferable?",
        "answer": "No. All Wovvo memberships are non-refundable and non-transferable. They are tied to your signup email. Please read our Terms and Conditions."
    },
    {
        "category": "Membership",
        "question": "Can I upgrade from Creator+ to a different tier later?",
        "answer": "No. Creator+ is a one-time lifetime tier and not upgradable. New memberships after launch will be subscription-based."
    },

    {
        "category": "Affiliates",
        "question": "What is the Wovvo affiliate program?",
        "answer": "Wovvo offers a referral program that rewards creators for sharing their link. Once you join, you’ll get a trackable affiliate link inside your dashboard."
    },
    {
        "category": "Affiliates",
        "question": "When are affiliate payouts processed?",
        "answer": "Payments are sent on the 1st of each month. You can choose to receive earnings via PayPal, Stripe, or bank deposit."
    },
    {
        "category": "Affiliates",
        "question": "Where can I track my commissions?",
        "answer": "You can view your referrals, clicks, and payouts directly inside your Wovvo account dashboard."
    },
    {
        "category": "Affiliates",
        "question": "Do I need a large audience to make affiliate sales?",
        "answer": "Not at all. Most of our top affiliates are creators with small but trusted communities or niche audiences. Your referral link works in DMs, groups, newsletters, or even one-on-one convos."
    },
    {
        "category": "Affiliates",
        "question": "Is there a limit to how many referrals I can make?",
        "answer": "No. Refer as many people as you want. There’s no cap on commission earnings."
    },

    {
        "category": "Pre-Launch",
        "question": "What is a Forever Founder?",
        "answer": "Forever Founders are the original 80 members who joined Wovvo before launch. This tier is now closed. These members receive lifetime access, early input on platform development, and special status within the community."
    },
    {
        "category": "Pre-Launch",
        "question": "What is the Creator+ Pass?",
        "answer": "Creator+ is our final lifetime access option for early supporters. It includes full access to the job dashboard and referral program. Sales end August 31, 2025."
    },
    {
        "category": "Pre-Launch",
        "question": "What happens after Creator+ sales end?",
        "answer": "Wovvo will begin offering subscription-based plans only. One-time access passes will be retired."
    },
    {
        "category": "Pre-Launch",
        "question": "When does Wovvo officially launch?",
        "answer": "Version 1.0: July 31, 2025\nVersion 2.0: August 31, 2025"
    },
    {
        "category": "Pre-Launch",
        "question": "What’s coming in Version 2?",
        "answer": "Version 2 will include expanded features and user improvements. While details are still evolving, the updates will reflect feedback from Forever Founders and Creator+ members."
    },
    {
        "category": "Pre-Launch",
        "question": "Can I get early access before July 31?",
        "answer": "No. Access will open to all Creator+ members on launch day. Before then, our team is finalizing testing and infrastructure."
    }
]

  const filteredFaqs = faqData.filter((item) => {
    const matchCategory = selectedCategory === "All" || item.category === selectedCategory
    const matchSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  const suggestions = faqData.filter(
    (item) =>
      searchTerm &&
      item.question.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    setShowSuggestions(false)
  }

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <main className="relative bg-white pt-24">
      {/* Hero Section */}
      <div id='help-center-banner' className="aboutbanner help-center flex-col bg-[url(/banner.jpg)] min-h-[350px] bg-cover bg-center flex justify-center items-center px-4 text-center">
        <h2 className="text-[28px] sm:text-[48px] font-bold text-white">
          Hey Creator, how can we help?
        </h2>

        {/* Search */}
        <div ref={suggestionBoxRef} className="w-full max-w-xl relative mt-6">
          <input
            className="placeholder-black bg-white w-full h-[50px] outline-none border-none px-[50px] text-black text-base font-light rounded-lg shadow"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setShowSuggestions(true)
            }}
          />
          <img
            className="absolute top-1/2 left-0 translate-x-[22px] -translate-y-1/2 w-[20px]"
            src="/search.svg"
            alt="search-icon"
          />
          <button
            className="absolute right-0 top-1/2 -translate-x-[10px] -translate-y-1/2 bg-[#ee2720] text-white text-base px-[25px] pt-[8px] pb-[11px] leading-none rounded-[5px]"
            onClick={() => setShowSuggestions(false)}
          >
            Search
          </button>

          {/* Suggestions */}
          {showSuggestions && suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white w-full border border-gray-200 rounded-md mt-1 max-h-[200px] overflow-y-auto shadow-lg">
              {suggestions.map((item, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black text-sm"
                  onClick={() => handleSuggestionClick(item.question)}
                >
                  {item.question}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Category Filter */}
        <div className="mt-6 flex flex-wrap gap-3 justify-center catogires-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full text-sm transition ${
                selectedCategory === cat
                  ? 'bg-[#fff] text-black px-5 py-1'
                  : 'bg-[#000] text-white px-5 py-1'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>



      {/* FAQs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">

        <div className="class-faq-bar grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-[30px]">
          <div className="item bg-gradient-to-r from-[#EE2720] to-[#F98C0D] rounded-[10px] flex flex-col items-center justify-center px-5 py-7 gap-[10px] shadow-md">
            <img src="help-center-icon01.svg" className="w-[80px]" alt="" />
            <h5 className='text-white'>FAQ Articles</h5>
          </div>
          <div onClick={() => handleNavigation("help-center-banner")} className="item bg-[#fff] rounded-[10px] flex flex-col items-center justify-center px-5 py-7 gap-[10px] shadow-md">
            <img src="help-center-icon02.svg" className="w-[80px]" alt="" />
            <h5>How to Use</h5>
          </div>
          <Link href={"/contact"} >
            <div className="item bg-[#fff] rounded-[10px] flex flex-col items-center justify-center px-5 py-7 gap-[10px] shadow-md">
              <img src="help-center-icon03.svg" className="w-[80px]" alt="" />
              <h5>Email Submission Form</h5>
            </div>
          </Link>
        </div>

        <div>
            {filteredFaqs.length === 0 ? (
            <p className="text-center text-gray-500">No FAQs found.</p>
            ) : (
            filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-start justify-between w-full text-left text-slate-700 font-medium focus:outline-none"
                >
                    <div className="flex gap-3 items-end">
                    <HelpCircle className="w-5 h-5 text-slate-500 mt-1" />
                    <span className="text-sm">{faq.question}</span>
                    </div>
                    <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 mt-1 ${
                        openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                    />
                </button>
                {openIndex === index && (
                    <div className="ml-8 mt-2 text-sm text-slate-600 whitespace-pre-line">
                    {faq.answer}
                    </div>
                )}
                </div>
            ))
            )}
        </div>
      </div>
    </main>
  )
}

export default HelpCenterPage