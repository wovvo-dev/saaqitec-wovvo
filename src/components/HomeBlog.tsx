import Link from "next/link";
import React from 'react'
import BlogSection from 'src/app/blog/page'
const HomeBlog = () => {
  return (
    <>
        <section id="homeblogsec" className='max-w-7xl mx-auto py-12 md:py-24'>
            <div className="mb-8 flex px-4 sm:px-6 lg:px-8 items-end justify-between homeblogheading">
              <div>
                <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Blogs</h2>
                <p className="mt-2 text-4xl font-bold sm:text-4xl">
                    Guides to <span className="gradient-text">Help You Grow</span>
                </p>
              </div>
              <Link href={"/blog"}>
                <button className="inline-flex items-center justify-center px-6 py-2 rounded-lg bg-primary text-lg text-white hover:bg-primary-dark transition-colors">
                See All
                </button>
              </Link> 
            </div>
            <div className="homeblog">
                <BlogSection />
            </div>
        </section>
    </>
  )
}

export default HomeBlog