import React from 'react'
import blogCategoryList from '@/data/blogCategoryList'
import blogMostPopularGuides from '@/data/blogMostPopularGuides'
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
        <h1 className='text-[50px] font-bold p-0 m-0 leading-none'>Our Guides</h1>
        <p className='text-[18px] text-[#4B5563] leading-[32px] pt-3'>Our guides offer step-by-step tips to help you start, grow, and succeed as a UGC creator. From building your portfolio to landing paid brand deals, we’ve got you covered.</p>
        <div className='main-category-thumbnail grid grid-cols-3 gap-4'>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
            <div className='blog-box'>
                <img src='/blog/01.png' className='w-full' alt="" />
                <h6>Getting Started with UGC</h6>
                <h2>The Rise of UGC: Why Now is the Best Time to Become a Creator</h2>
                <p>Let’s be real. If you’ve ever posted a product review on... </p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default page