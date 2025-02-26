"use client"
import Image from 'next/image';
import Blog1 from '@/assets/blog/blog-1.png';
import Blog2 from '@/assets/blog/blog-2.jpg'
import Blog3 from '@/assets/blog/blog-3.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { GetBlogService } from "@/services/blogService"

const Blog = () => {
  const { blogList } = useSelector((state) => state.blogData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetBlogService(1, 3))
  }, [])

  console.log('blogList', blogList);

  return (
    <section className='px-10 mt-10'>
      <div className='bg-bgblog rounded-md px-5 md:px-10'>
        <h1 className='font-bold text-xl md:text-2xl p-5'>Our Latest Blog</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center md:text-left px-0 md:px-5 pb-10'>

          {blogList?.blogs?.map((blog, i) => (
            <div className='bg-white rounded-lg p-5' key={i}>
              <Image src={`https://assets1.drugcarts.com/blogs/${blog?.blogimg}`} alt={blog?.blogname} width={200} height={200} className='w-full object-cover' />
              <p className="text-purple-900 mt-6 font-bold text-md">{blog?.blogname}</p>
              {/* <div dangerouslySetInnerHTML={{ __html: blog.description }} /> */}
              <div className='flex justify-center font-bold mt-7'>
                <span className='text-right'>Read More</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 font-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog