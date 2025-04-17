"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import AyushCard from "@/components/ProductDetailsCard/AyushCard";
import RightAyushCategory from "@/components/ProductDetailsCard/rightsection/RightAyushCategory";
import LeftHealthDevice from "@/components/ProductDetailsCard/leftsection/LeftHealthDevice";
import FilterCompanyCard from "@/components/ProductDetailsCard/FilterCompanyCard";

const CategoryProduct = () => {
  const pathname = usePathname();
  // const paths = pathname.split("/").filter((path) => path);
  let pathSegments = pathname.split("/").filter(Boolean);
  pathSegments = pathSegments.map((segment) => segment.replace(/-/g, " "));

  return (
    <section className="max-w-7xl mx-auto mt-3">
      <Image
        priority
        src={IMAGES.AYURVEDICBNNR}
        alt="Drugcarts Banner"
        className="w-[100%] h-[450px] rounded-lg"
      />
      <div className="flex py-2">
        <div className="w-[20%] m-3 max-h-auto hidden md:block">
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#35A24D] text-white">
            Ayush
          </h2>
          <div className="bg-[#FFEDF2] text-sm mb-10">
            <RightAyushCategory />
          </div>
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#b7064b] text-white">
            Health Store
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

          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-gray-700 text-white">
            Health Health Device
          </h2>
          <div className="bg-[#EBEBEB] text-sm">
            <LeftHealthDevice />
          </div>
          <FilterCompanyCard />
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-[#4C4C95] text-white">
            Price Range
          </h2>
          <div className="items-center justify-start gap-2 border-[1.5px] mb-10">
            <h2 className="text-md font-bold p-2 border-b-2 px-4">Price</h2>
          </div>
          <Helpful />
          <OtcProduct />
        </div>
        <div className="w-full md:w-[80%]">
          <div className="flex justify-between items-center bg-green-600 text-white font-semibold p-3 my-3">
            <span className="text-lg capitalize">
              {pathSegments[1]} Product 
            </span>
            <button className="text-sm flex items-center hover:underline">
              View All
            </button>
          </div>
          <div className="bg-[#F0F4FF]">
            <AyushCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryProduct;
