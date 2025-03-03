"use client"
import { IMAGES } from "@/components/common/images";
import { GetCategoryService } from "@/services/categoryService";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Medicine = () => {
  const { categories } = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCategoryService(1, categories?.pagination?.totalItems));
  }, [categories?.pagination?.totalItems]);
  console.log(categories);

  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 py-3">
          <Link href="#" className="hover:text-gray-700">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">
            Order Medicine
          </Link>
        </div>
        <div className="py-2 text-xl font-bold">
          <h2>A - Z Order Medicine</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {categories &&
            categories?.categories?.map((category, i) => (
              <div className="bg-bgshop rounded-lg p-4" key={i}>
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

export default Medicine;
