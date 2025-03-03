"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetBlogService } from "@/services/blogService";

const BlogCard = () => {
  const { blogList } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogService(1, 3));
  }, []);

  console.log("blogList", blogList);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-center md:text-left pb-10">
      {/* px-0 md:px-5  */}
      {blogList?.blogs?.map((blog, i) => (
        <div className="bg-white rounded-lg p-5 border-[1.5px]" key={i}>
          <Image
            src={`https://assets1.drugcarts.com/blogs/${blog?.blogimg}`}
            alt={blog?.blogname}
            width={200}
            height={200}
            className="w-[100%] h-56 object-cover"
          />
          <p className="mt-6 font-bold text-md h-10">{blog?.blogname}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: blog.description }} /> */}
          <div className="flex justify-center items-center font-bold mt-7 pb-0">
            <span className="text-right text-blue-500">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-6 font-bold text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCard;
