import blogData from '@/data/blogData'
import { Icon } from 'lucide-react'
import blogCategoryList from '@/data/blogCategoryList'
import blogMostPopularGuides from '@/data/blogMostPopularGuides'
import React from 'react'
// import complianceDisclaimer from '../../../data/compliance';
const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex">
      <div className='bg-[#FAFAFA] w-[390px] h-full py-[60px] px-[40px]'>
            <h2 className='text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pb-[5px]'>Choose your topic</h2>
            <ul className='blog-topic-list'>
            {blogCategoryList.map((item,index)=>{
                return(
                    <li key={"blogCategoryList"+""+index}>{item.name}</li>
                )
            })}
            </ul>
            <h3 className='text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pt-[30px] border-b-[1px] border-y-[#d9d9d9] pb-[10px]'>The Most Popular Guides</h3>
            <ul className='blog-cat-list'>
                {blogMostPopularGuides.map((item,index)=>{
                    return(
                        <li key={"blogMostPopularGuides"+""+index}>{item.name}</li>
                    )
                })}
            </ul>
      </div>
      <div className='w-full py-[60px] px-[40px]'>
        <ul className='blog_breadcrums'>
            <li>Wovvo Guides</li>
            <li>&gt;</li>
            <li>Guides</li>
        </ul>
        <h1 className='text-[50px] font-bold p-0 m-0 leading-[60px] pt-4'>The Rise of UGC: Why Now is the Best Time to Become a Creator</h1>
        <p className='text-[18px] text-[#4B5563] leading-[32px] pt-3'>Let’s be real. If you’ve ever posted a product review on TikTok or shared a skincare routine on Instagram, congrats. You’re already a UGC creator.</p>
        <ul className='blog-author_date'>
            <li>By: Paula <a href='#'>Hlavacek</a></li>
            <li><img src='/blog/calendar.png'/>July 10,2025</li>
        </ul>
        <div className='blog_data'>
        {}
        <img src="blog/01.png" alt="" />
        <p>Let’s be real. If you’ve ever posted a product review on TikTok or shared a skincare routine on Instagram, congrats. You’re already a UGC creator.</p>
        <p>User-generated content (UGC) is having a major moment in 2025. Brands want authentic content that doesn’t feel like an ad. They want real creators, not influencers with a million followers. The demand is bigger than ever, and that’s exactly where you come in.</p>
        <h3>So, why is UGC taking off now?</h3>
        <ul>
            <li><strong>Trust over hype:</strong> Consumers trust everyday creators more than traditional influencers. They want to see real people using real products in real life.</li>
            <li><strong>Short-form video explosion:</strong> TikTok, Reels, YouTube Shorts. Short-form content is dominating the internet, and UGC fits perfectly into this fast-paced, visual world.</li>
            <li><strong>Creator economy evolution:</strong> Platforms and brands are investing heavily in content marketing, and they’re looking for creators who can deliver value without needing a massive following.</li>
        </ul>
        <p>Whether you’re just getting started or already working with brands, the opportunity to make money through UGC has never been more accessible. And this is where WOVVO comes in.</p>
        <p><strong>WOVVO is the #1 job discovery tool for UGC creators</strong> looking to land brand deals without spending hours searching through social media posts, Reddit threads, or outdated Google Sheets. We built WOVVO to give creators everything they need to grow — all in one clean, searchable dashboard.</p>
        <h3>Here’s how WOVVO helps you get ahead:</h3>
        <ul>
            <li>Access thousands of UGC job opportunities across multiple niches</li>
            <li>Filter jobs by content type, platform, brand category, or pay type</li>
            <li>Apply directly to brand deals and skip the middleman</li>
            <li>Track your referrals and get paid with our affiliate program</li>
            <li>Keep 100% of what you earn from every deal</li>
        </ul>
        <p>And let’s be clear. WOVVO doesn’t take a commission, doesn’t gatekeep, and doesn’t require you to have a massive audience. If you’re passionate about creating high-quality content and ready to get serious, WOVVO is your secret weapon.</p>
        <p><strong>WOVVO is the #1 job discovery tool for UGC creators</strong> looking to land brand deals without spending hours searching through social media posts, Reddit threads, or outdated Google Sheets. We built WOVVO to give creators everything they need to grow — all in one clean, searchable dashboard.</p>
        <h3>Thousands of creators are already joining WOVVO to find:</h3>
        <ul>
            <li>TikTok UGC jobs</li>
            <li>Instagram Reel collaborations</li>
            <li>Apply directly to brand deals and skip the middleman</li>
            <li>Sponsored testimonial opportunities</li>
            <li>Short-form product demo gigs</li>
        </ul>
        <p>The creator economy is exploding, and WOVVO is putting the power back in your hands. This is the time to start building your creator business and take control of your income.</p>
        <p>Ready to stop guessing where the next job is coming from? Join WOVVO today and unlock your full potential as a creator.</p>
        </div>
      </div>

    </div>
  )
}

export default page