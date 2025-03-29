"use client";
import Image from "next/image";
import BlogCard from "@/components/home-page/blogCard";
import { IMAGES } from "@/components/common/images";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetBlogService } from "@/services/blogService";
import { useRouter } from "next/navigation";

const Blog = () => {
  const { blogList } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();
  const router = useRouter()

  useEffect(() => {
    dispatch(GetBlogService(1, 15));
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Image
          src={IMAGES.BLOGBANNER}
          alt="Blog Banner"
          className="h-86 w-[100%]"
        />
        <div className="py-5">
          <h1 className="font-bold text-xl md:text-2xl p-5">Trending Today</h1>
          <BlogCard  blogData={blogList?.blogs}/>
          {/* <h1 className="font-bold text-xl md:text-2xl p-5">Lastest Blog</h1>
          <BlogCard />
          <h1 className="font-bold text-xl md:text-2xl p-5">More You Like</h1>
          <BlogCard /> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
