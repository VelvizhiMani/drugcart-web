"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import ProductCard from "@/components/ProductDetailsCard/ProductCard";
import OurCareCard from "@/components/ProductDetailsCard/OurCareCard";
import PriceRangeCard from "@/components/ProductDetailsCard/PriceRangeCard";
import ShareFriendsCard from "@/components/ProductDetailsCard/ShareFriendsCard";
import DownloadAppCard from "@/components/ProductDetailsCard/DownloadAppCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetNonCategoryService } from "@/services/categoryService";
import {
  GetProductCatsService,
  GetProductFitnessService,
  GetProductPersonalCareService,
  GetProductTreatmentService,
} from "@/services/productService";
import LeftHealthDevice from "@/components/ProductDetailsCard/leftsection/LeftHealthDevice";
import RightAyushCategory from "@/components/ProductDetailsCard/rightsection/RightAyushCategory";

const HealthStore = () => {
  const {
    productCategory,
    categoryProducts,
    personalCareProduct,
    fitnessProduct,
    treatmentProduct,
  } = useSelector((state) => state.productData);
  const { non_category } = useSelector((state) => state.categoryData);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductPersonalCareService(1, 4));
    dispatch(GetProductFitnessService(1, 8));
    dispatch(GetProductTreatmentService(1, 8));
    dispatch(GetNonCategoryService(1, 4));
    dispatch(GetProductCatsService(1, 4));
  }, [search]);

  const ayush_FilterData = non_category?.categories?.filter(
    (item) => item?.url !== "ayush" && item?.url !== "health-care-device"
  );

  const categroyProductClick = (cat_url) => {
    router.push(`/${cat_url}`);
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex flex-wrap h-62 justify-center items-center bg-[#4C4C95]">
        <div className="w-full md:w-1/2 text-white font-bold text-center">
          <h3 className="mb-6 text-2xl md:text-5xl mt-4">
            {" "}
            Online <span className="text-yellow-400">Health Store</span>
          </h3>
          <p className="bg-white text-black p-2 text-center md:ml-10">
            Personal Care/Fitness Supplement/Health Care{" "}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            priority
            src={IMAGES.HEALTHSTOREBAN}
            alt="Health Store"
            className="w-[60%] h-[300px] rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex py-2">
        <div className="w-[20%] m-3 max-h-auto hidden md:block">
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#35A24D] text-white">
            Ayush
          </h2>
          <div className="bg-[#FFEDF2] text-sm mb-10">
            <RightAyushCategory />
          </div>
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#b7064b] text-white">
            Health Store Availability
          </h2>
          <div className="bg-[#D8EECA] text-sm">
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Link
                href="/personal-care"
                className="flex items-center justify-start gap-2"
              >
                <Image
                  src={IMAGES.PERSONALCARE}
                  alt="Personal Care"
                  priority
                  className="w-10 bg-white"
                />
                <h2 className="text-md font-bold ps-7">Personal Care</h2>
              </Link>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Link
                href="/fitness-supplements"
                className="flex items-center justify-start gap-2"
              >
                <Image
                  src={IMAGES.SUPPLEMENTS}
                  alt="Fitness Supplements"
                  priority
                  className="w-10 bg-white"
                />
                <h2 className="text-md font-bold ps-7">Fitness Supplements</h2>
              </Link>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Link
                href="/health-care-products"
                className="flex items-center justify-start gap-2"
              >
                <Image
                  src={IMAGES.HEALTHCARE}
                  alt="Health Care Products"
                  priority
                  className="w-10 bg-white"
                />
                <h2 className="text-md font-bold ps-7">Health Care Products</h2>
              </Link>
            </div>
          </div>
          <OurCareCard />
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-gray-700 text-white">
            Health Health Device
          </h2>
          <div className="bg-[#EBEBEB] text-sm">
            <LeftHealthDevice />
          </div>
          <PriceRangeCard />
          <ShareFriendsCard />
          <DownloadAppCard />
          <Helpful />
          <OtcProduct />
        </div>
        <div className="w-full md:w-[80%]">
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-3">
            <span className="text-md">BEST SELLER PERSONAL CARE </span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("personal-care")}
            >
              View All
            </button>
          </div>
          <ProductCard data={personalCareProduct} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-md">BEST SELLER FITNESS SUPPLEMENTS</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("fitness-supplements")}
            >
              View All
            </button>
          </div>
          <ProductCard data={fitnessProduct} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-md">BEST SELLER TREATMENTS</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("treatments")}
            >
              View All
            </button>
          </div>
          <ProductCard data={treatmentProduct} />
        </div>
      </div>
    </section>
  );
};

export default HealthStore;
