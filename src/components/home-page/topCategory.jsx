"use client";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { GetCategoryService } from "@/services/categoryService";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TopCategory = () => {
  const { categories } = useSelector((state) => state.categoryData);
  const dispatch = useDispatch();
  const router = useRouter();

  // Maintain fallback state per image
  const [fallbackMap, setFallbackMap] = useState({});

  useEffect(() => {
    dispatch(GetCategoryService(1, 8));
  }, [dispatch]);

  const handleImageError = (id) => {
    setFallbackMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {categories?.categories?.map((category) => {
        const id = category?._id || category?.url; // Unique identifier
        const fallback = fallbackMap[id];
        const imageUrl = fallback
          ? `https://assets2.drugcarts.com/category/thumb/${category?.cat_img}`
          : `https://drugcarts-nextjs.s3.ap-south-1.amazonaws.com/category/thumb/${category?.cat_img}`;

        return (
          <div
            className="bg-bgshop rounded-lg p-4 cursor-pointer"
            key={id}
            onClick={() => router.push(`/catalog/${category?.url}`)}
          >
            <p className="text-center">
              <Image
                width={100}
                height={100}
                src={imageUrl}
                alt={category?.category_name}
                className="mb-3 mx-auto object-cover bg-bgcancer rounded-full p-2 w-24 h-24"
                onError={() => handleImageError(id)}
              />
              <span>{category?.category_name}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TopCategory;
