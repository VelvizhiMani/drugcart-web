"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import ProductCard from "@/components/ProductDetailsCard/ProductCard";
import OurCareCard from "@/components/ProductDetailsCard/OurCareCard";
import PriceRangeCard from "@/components/ProductDetailsCard/PriceRangeCard";
import ShareFriendsCard from "@/components/ProductDetailsCard/ShareFriendsCard";
import DownloadAppCard from "@/components/ProductDetailsCard/DownloadAppCard";
import FilterCompanyCard from "@/components/ProductDetailsCard/FilterCompanyCard";
import FilterFormCard from "@/components/ProductDetailsCard/FilterFormCard";
import OtcService from "@/components/ProductDetailsCard/OtcService";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetProductCategoryService, GetProductCatsService } from "@/services/productService";
import ReportErrorCard from "@/components/ProductDetailsCard/ReportErrorCard";

const HealthCareDevices = () => {
  const { productCategory, categoryProducts } = useSelector((state) => state.productData);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductCatsService(1, 10, "health-care-device", search));
    dispatch(GetProductCategoryService(1, 10, 'blood-test-kit', search))
  }, [search]);

  const ayushFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "ayurvedic")
  const homeopathyFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "homeopathy")
  const siddhaFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "siddha")
  const unaniFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "unani")

  console.log(productCategory);
  const categroyProductClick = (sub_url) => {
    router.push(`/category/${sub_url}`);
  };
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex flex-wrap h-62 justify-center items-center bg-green-700">
        <div className="w-full md:w-1/2 text-white font-bold text-center">
          <h3 className="mb-6 text-xl md:text-5xl"> Online <span className="text-yellow-400">Health CARE DEVICE</span></h3>
          <p className="bg-white text-black p-2 text-center ml-10">Perfecxa B02 Upper Arm Blood Pressure Monitor </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            priority
            src={IMAGES.HHEALTHSTOREBANNER}
            alt="Ayush Banner"
            className="w-[60%] h-[300px] rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex py-2">
        <div className="w-[20%] m-3 max-h-auto">
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-gray-700 text-white">
            Health Health Device
          </h2>
          <div className="bg-[#EBEBEB] text-sm">
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.BLOODPRESSURE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Blood Pressure Monitor</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.BLOODTEST}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Blood Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.COVIDTEST}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Covid Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.GLUCOMETER}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Diabetes Monitor</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.HIV}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">HIV Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.PREGNANCY}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Pregnancy Test Kit</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.PULSE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Pulse Oximeter</h2>
            </div>
            <div className="flex items-center gap-2 p-2 border-b-2 border-gray-300">
              <Image
                src={IMAGES.NEBULIZER}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold">Nebulier Machines</h2>
            </div>
          </div>
          <OtcProduct />
          <PriceRangeCard />
          <ShareFriendsCard />
          <DownloadAppCard />
          <FilterCompanyCard />
          <Helpful />
          <FilterFormCard />
          <ReportErrorCard />
          <OtcService />
        </div>
        <div className="w-[80%]">
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-3">
            <span className="text-lg">Best Seller Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("ayurvedic")}
            >
              View All
            </button>
          </div>
          <ProductCard data={categoryProducts?.catproducts} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Personal Care Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("homeopathy")}
            >
              View All
            </button>
          </div>
          <ProductCard data={productCategory?.products} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Ortho Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("siddha")}
            >
              View All
            </button>
          </div>
          <ProductCard data={siddhaFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Gloves Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("unani")}
            >
              View All
            </button>
          </div>
          <ProductCard data={unaniFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Equipment Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("unani")}
            >
              View All
            </button>
          </div>
          <ProductCard data={unaniFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Diabetes Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("unani")}
            >
              View All
            </button>
          </div>
          <ProductCard data={unaniFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Mask Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("unani")}
            >
              View All
            </button>
          </div>
          <ProductCard data={unaniFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Pulse Oximete Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("unani")}
            >
              View All
            </button>
          </div>
          <ProductCard data={unaniFilter} />
        </div>
      </div>
    </section>
  )
}

export default HealthCareDevices