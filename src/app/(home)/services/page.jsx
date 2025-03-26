"use client"
import { IMAGES } from "@/components/common/images";
import {  GetLetterCategoryService } from "@/services/categoryService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {
  const router = useRouter();
  const { firstLetter, categories } = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(GetLetterCategoryService(page, 10));
  }, [page]);

  const categroyClick = (cat_url) => {
    router.push(`/catalog/${cat_url}`)
  }

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pb-20">
          {firstLetter?.categories &&
            firstLetter?.categories?.map((category, i) => (
              <div
                className="bg-bgshop rounded-lg p-4 cursor-pointer"
                key={i}
                onClick={() => categroyClick(category?.url)}
              >
                <p className="text-center">
                  <Image
                    width={100}
                    height={100}
                    src={category?.cat_img ? `https://assets2.drugcarts.com/category/thumb/${category?.cat_img}` : IMAGES.NO_IMAGE}
                    alt={category?.category_name}
                    className={`mb-3 mx-auto object-cover ${category?.cat_img ? "bg-bgcancer" : null} rounded-full p-2`}
                  />
                  <span>{category?.category_name}</span>
                </p>
              </div>
            ))}
        </div>
       
      </section>
    </>
  );
};

export default Services;
