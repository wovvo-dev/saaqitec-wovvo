'use client'

import blogData from 'src/data/blogData'
import { Icon } from 'lucide-react'
import blogCategoryList from 'src/data/blogCategoryList'
import blogMostPopularGuides from 'src/data/blogMostPopularGuides'
import React from 'react'
import { useRouter } from 'next/navigation';
// import complianceDisclaimer from '../../../data/compliance';


type PageProps = {
    params: { id: string };
  };

const page = ({ params }: PageProps) => {

    const router = useRouter();
    const blog = blogData.find((item) => item.id === parseInt(params.id));

    const handleCategoryClick = (category : string) => {
        router.push(`/blog/category/${category}`);
    };
    
    const handleBlogClick = (id : number) => {
        router.push(`/blog/${id}`);
    };

    if (!blog) return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex"><div className='text-6xl w-full py-[60px] px-[40px]'>Blog not found!</div></div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[6rem] flex">
      <div className='bg-[#FAFAFA] w-[390px] h-full py-[60px] px-[40px]'>
            <h2 className='text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pb-[5px]'>Choose your topic</h2>
            <ul className='blog-topic-list'>
            {blogCategoryList.map((category,index)=>{
                return(
                    <li key={"blogCategoryList"+""+index} onClick={()=>handleCategoryClick(category.name.toLowerCase().replace(/ /g, "_"))}>{category.name}</li>
                )
            })}
            </ul>
            <h3 className='text-l font-bold bg-gradient-to-r from-[#EE2720] to-[#F98C0D] bg-clip-text text-transparent pt-[30px] border-b-[1px] border-y-[#d9d9d9] pb-[10px]'>The Most Popular Guides</h3>
            <ul className='blog-cat-list'>
                {blogMostPopularGuides.map((blog,index)=>{
                    return(
                        <li key={"blogMostPopularGuides"+""+index} onClick={() => handleBlogClick(blog.id)}>{blog.name}</li>
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
        <h1 className='text-[50px] font-bold p-0 m-0 leading-[60px] pt-4'>{blog.title}</h1>
        <p className='text-[18px] text-[#4B5563] leading-[32px] pt-3'>{blog.caption}</p>
        <ul className='blog-author_date'>
            <li>By: {blog.author}</li>
            <li><img src='/blog/calendar.png'/>{blog.date}</li>
        </ul>
        <div className='blog_data'>
        <img src={`/blog/`+blog.image} alt="" />
        <div dangerouslySetInnerHTML={{ __html: blog.description }}/>
        </div>
      </div>

    </div>
  )
}

export default page