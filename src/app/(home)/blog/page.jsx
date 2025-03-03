"use client";
import Image from "next/image";
import BlogCard from "@/components/home-page/blogCard";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="#" className="hover:text-gray-700">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">
            Blog
          </Link>
        </div>
        <Image
          src={IMAGES.BLOGBANNER}
          alt="Blog Banner"
          className="h-86 w-[100%]"
        />
        <div className="py-5">
          <h1 className="font-bold text-xl md:text-2xl p-5">Trending Today</h1>
          <BlogCard />
          <h1 className="font-bold text-xl md:text-2xl p-5">Lastest Blog</h1>
          <BlogCard />
          <h1 className="font-bold text-xl md:text-2xl p-5">More You Like</h1>
          <BlogCard />
        </div>
      </div>
    </>
  );
};

export default Blog;
