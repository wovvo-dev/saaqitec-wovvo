'use client'

import React from 'react'
import blogCategoryList from '../../data/blogCategoryList'
import blogMostPopularGuides from '../../data/blogMostPopularGuides'
import { useRouter, usePathname } from 'next/navigation'
import blogData from '../../data/blogData'

const Page = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleCategoryClick = (category: string) => {
    const formattedCategory = category.toLowerCase().replace(/ /g, '_')
    router.push(`/blog/category/${formattedCategory}`)
  }

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
  }

  const handleBlogClick = (id: number, title: string) => {
    const slug = slugify(title)
    router.push(`/blog/${id}_${slug}`)
  }

  // Get current active category slug from URL
  const currentCategory = pathname?.split('/category/')[1] || ''

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex">
      <div className='bg-[#FAFAFA] w-[390px] h-full py-[60px] px-[40px]'>
        <h2 className='text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pb-[5px]'>Choose your topic</h2>
        <ul className='blog-topic-list'>
          {blogCategoryList.map((category, index) => {
            const categorySlug = category.name.toLowerCase().replace(/ /g, '_')
            const isActive = currentCategory === categorySlug

            return (
              <li
                key={`blogCategoryList${index}`}
                onClick={() => handleCategoryClick(category.name)}
                className={isActive ? 'active' : ''}
              >
                {category.name}
              </li>
            )
          })}
        </ul>

        <h3 className='text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pt-[30px] border-b-[1px] border-y-[#d9d9d9] pb-[10px]'>
          The Most Popular Guides
        </h3>
        <ul className='blog-cat-list'>
          {blogMostPopularGuides.map((blog, index) => (
            <li
              key={`blogMostPopularGuides${index}`}
              onClick={() => handleBlogClick(blog.id, blog.name)}
            >
              {blog.name}
            </li>
          ))}
        </ul>
      </div>

      <div className='w-full py-[60px] px-[40px]'>
        <h1 className='text-[50px] font-bold p-0 m-0 leading-none'>Our Guides</h1>
        <p className='text-[18px] text-[#4B5563] leading-[32px] pt-3'>
          Our guides offer step-by-step tips to help you start, grow, and succeed as a UGC creator. From building your portfolio to landing paid brand deals, we’ve got you covered.
        </p>

        <div className='main-category-thumbnail grid grid-cols-3 gap-4'>
          {blogData.map((blog_data, index) => (
            <div
              key={`blogData${index}`}
              className='blog-box'
              onClick={() => handleBlogClick(blog_data.id, blog_data.title)}
            >
              <img src={`/blog/${blog_data.image}`} className='w-full' alt="" />
              <h6>{blog_data.category}</h6>
              <h2>{blog_data.title.length > 55 ? blog_data.title.slice(0, 60) + "..." : blog_data.title}</h2>
              <p>{blog_data.caption.length > 70 ? blog_data.caption.slice(0, 70) + "..." : blog_data.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
