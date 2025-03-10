"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import ProductCategoryCard from "@/components/ProductDetailsCard/ProductCategoryCard";
import ProductCard from "@/components/ProductDetailsCard/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetProductCatsService } from "@/services/productService";

const Ayush = () => {
  const { productCategory, categoryProducts } = useSelector((state) => state.productData);
  const router = useRouter();
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductCatsService(1, 10, "ayush", search));
  }, [search]);

  const ayushFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "ayurvedic")
  const homeopathyFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "homeopathy")
  const siddhaFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "siddha")
  const unaniFilter = categoryProducts?.catproducts?.filter((item) => item?.subcat_name === "unani")

  console.log(categoryProducts);
  const categroyProductClick = (sub_url) => {
    router.push(`/category/${sub_url}`);
  };
  return (
    <section className="max-w-7xl mx-auto mt-3">
      {/* <Image
        priority
        src={IMAGES.AYUSHBANNER}
        alt="Ayush Banner"
        className="w-[100%] h-[450px] rounded-xl"
      /> */}
      <div className="flex py-2">
        <div className="w-[20%] m-3 max-h-auto">
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#35A24D] text-white">
            Ayush
          </h2>
          <div className="bg-[#FFEDF2] text-sm mb-10">
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.AYUSH}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Ayush</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.SIDDHA}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Siddha</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.UNANI}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Unani</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.HOMEOPATHY}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Homeopathy</h2>
            </div>
          </div>
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-[#b7064b] text-white">
            Health Store
          </h2>
          <div className="bg-[#D8EECA] text-sm">
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.PERSONALCARE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Personal Care</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.SUPPLEMENTS}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Fitness Supplements</h2>
            </div>
            <div className="flex items-center justify-start gap-2 p-2 border-b-2 px-4">
              <Image
                src={IMAGES.HEALTHCARE}
                alt="ANTI CANCER"
                priority
                className="w-10 bg-white"
              />
              <h2 className="text-md font-bold ps-7">Health Care Products</h2>
            </div>
          </div>

          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-gray-700 text-white">
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
          <div className="text-center bg-[#35A24D] p-2 mt-10 border-b-2 px-4">
            <h2 className="text-xl text-white font-bold ps-7">
              Filter By Company
            </h2>
          </div>
          <div className="items-center justify-start gap-2 border-[1.5px] mb-10">
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Revyur beauty care india pvt ltd
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Blossom kochhar aroma magic
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Sriveda sattva pvt ltd
            </h2>
            <h2 className="text-md font-bold p-2 border-b-2 px-4">
              Vlcc health care ltd
            </h2>
            <h2 className="text-md font-bold p-2 px-4">Dabur india ltd</h2>
          </div>
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] mt-10 bg-[#4C4C95] text-white">
            Price Range
          </h2>
          <div className="items-center justify-start gap-2 border-[1.5px] mb-10">
            <h2 className="text-md font-bold p-2 border-b-2 px-4">Price</h2>
          </div>
          <Helpful />
          <OtcProduct />
        </div>
        <div className="w-[80%]">
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-3">
            <span className="text-lg">Best Seller Ayurvedic Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("ayurvedic")}
            >
              View All
            </button>
          </div>
          <ProductCard data={ayushFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Homeopathy Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("homeopathy")}
            >
              View All
            </button>
          </div>
          <ProductCard data={homeopathyFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Siddha Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("siddha")}
            >
              View All
            </button>
          </div>
          <ProductCard data={siddhaFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Unani Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("unani")}
            >
              View All
            </button>
          </div>
          <ProductCard data={unaniFilter} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Recommanded Product</span>
            <button className="text-sm flex items-center hover:underline">
              View All
            </button>
          </div>
          {/* <ProductCard /> */}
        </div>
      </div>
    </section>
  );
};

export default Ayush;
