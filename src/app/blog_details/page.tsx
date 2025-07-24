'use client'
import React, { useState } from 'react'
import blogCategoryList from 'src/data/blogCategoryList'
import blogMostPopularGuides from 'src/data/blogMostPopularGuides'
import blogData from 'src/data/blogData'

const page = () => {
  const [activeTopicIndex, setActiveTopicIndex] = useState<number | null>(null)
  const [activePopularIndex, setActivePopularIndex] = useState<number | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex blog-wrapper">
      <div className="bg-[#FAFAFA] w-[390px] py-[60px] px-[25px] blog-sidebar">
        <h2 className="text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pb-[5px]">
          Choose your topic
        </h2>
        <ul className="blog-topic-list space-y-2">
          {blogCategoryList.map((item, index) => (
            <li
              key={'blogCategoryList' + index}
              className={activeTopicIndex === index ? 'active' : ''}
              onClick={() => setActiveTopicIndex(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        <h3 className="text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pt-[30px] border-b-[1px] border-y-[#d9d9d9] pb-[10px]">
          The Most Popular Guides
        </h3>
        <ul className="blog-cat-list space-y-2">
          {blogMostPopularGuides.map((item, index) => (
            <li
              key={'blogMostPopularGuides' + index}
              className={activePopularIndex === index ? 'active' : ''}
              onClick={() => setActivePopularIndex(index)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full py-[60px] px-[25px] blog-main-body">
        <ul className="blog_breadcrums flex space-x-2 text-sm text-gray-500">
          <li>Wovvo Guides</li>
          <li>&gt;</li>
          <li>Guides</li>
        </ul>

        <h1 className="text-[50px] font-bold leading-[60px] pt-4">
          The Rise of UGC: Why Now is the Best Time to Become a Creator
        </h1>
        <p className="text-[18px] text-[#4B5563] leading-[32px] pt-3">
          Let’s be real. If you’ve ever posted a product review on TikTok or shared a skincare routine on Instagram, congrats. You’re already a UGC creator.
        </p>

        <ul className="blog-author_date flex gap-6 text-sm text-gray-600 py-4 items-center">
          <li>By: Paula <a href="#" className="text-blue-500 underline">Hlavacek</a></li>
          <li className="flex items-center gap-2">
            <img src="/blog/calendar.png" className="w-4 h-4" />
            July 10, 2025
          </li>
        </ul>

        <div className="blog_data space-y-6">
          <img src="blog/01.png" alt="Blog Main Visual" />

          <p>Let’s be real. If you’ve ever posted a product review on TikTok or shared a skincare routine on Instagram, congrats. You’re already a UGC creator.</p>
          <p>User-generated content (UGC) is having a major moment in 2025...</p>

          <h3 className="text-xl font-semibold">So, why is UGC taking off now?</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Trust over hype:</strong> Consumers trust everyday creators...</li>
            <li><strong>Short-form video explosion:</strong> TikTok, Reels...</li>
            <li><strong>Creator economy evolution:</strong> Platforms and brands...</li>
          </ul>

          <p>Whether you’re just getting started or already working with brands...</p>
          <p><strong>WOVVO is the #1 job discovery tool for UGC creators...</strong></p>

          <h3 className="text-xl font-semibold">Here’s how WOVVO helps you get ahead:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Access thousands of UGC job opportunities...</li>
            <li>Filter jobs by content type...</li>
            <li>Apply directly to brand deals...</li>
            <li>Track your referrals...</li>
            <li>Keep 100% of what you earn...</li>
          </ul>

          <p>And let’s be clear. WOVVO doesn’t take a commission...</p>

          <h3 className="text-xl font-semibold">Thousands of creators are already joining WOVVO to find:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>TikTok UGC jobs</li>
            <li>Instagram Reel collaborations</li>
            <li>Apply directly to brand deals and skip the middleman</li>
            <li>Sponsored testimonial opportunities</li>
            <li>Short-form product demo gigs</li>
          </ul>

          <p>The creator economy is exploding, and WOVVO is putting the power back in your hands...</p>
          <p>Ready to stop guessing where the next job is coming from? Join WOVVO today and unlock your full potential as a creator.</p>
        </div>
      </div>
    </div>
  )
}

export default page
