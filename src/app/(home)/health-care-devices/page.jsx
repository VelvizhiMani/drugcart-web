"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import ProductCard from "@/components/ProductDetailsCard/ProductCard";
import PriceRangeCard from "@/components/ProductDetailsCard/PriceRangeCard";
import ShareFriendsCard from "@/components/ProductDetailsCard/ShareFriendsCard";
import DownloadAppCard from "@/components/ProductDetailsCard/DownloadAppCard";
import FilterCompanyCard from "@/components/ProductDetailsCard/FilterCompanyCard";
import FilterFormCard from "@/components/ProductDetailsCard/FilterFormCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  GetProductCategoryService,
  GetProductCatsService,
} from "@/services/productService";
import ReportErrorCard from "@/components/ProductDetailsCard/ReportErrorCard";
import LeftHealthDevice from "@/components/ProductDetailsCard/leftsection/LeftHealthDevice";

const HealthCareDevices = () => {
  const { categoryProducts } = useSelector((state) => state.productData);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductCatsService(1, 4, "health-care-device"));
    dispatch(GetProductCategoryService(1, 10, "blood-test-kit"));
  }, []);

  const categroyProductClick = (sub_url) => {
    router.push(`/${sub_url}`);
  };
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex flex-wrap h-62 justify-center items-center bg-green-700">
        <div className="w-full md:w-1/2 text-white font-bold text-center">
          <h3 className="my-6 text-2xl md:text-5xl">
            {" "}
            Online <span className="text-yellow-400">Health CARE DEVICE</span>
          </h3>
          <p className="bg-white text-black p-2 text-center md:ml-10 ml-0">
            Perfecxa B02 Upper Arm Blood Pressure Monitor{" "}
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            priority
            src={IMAGES.HEALTHSTOREBAN}
            alt="Health CARE DEVICE"
            className="w-[60%] h-[300px] rounded-lg mx-auto"
          />
        </div>
      </div>
      <div className="flex py-2">
        <div className="w-[20%] m-3 max-h-auto hidden md:block">
          <h2 className="text-lg text-center uppercase py-3 font-bold border-b-[1.5px] bg-gray-700 text-white">
            Health Health Device
          </h2>
          <div className="bg-[#EBEBEB] text-sm">
            <LeftHealthDevice />
          </div>
          <OtcProduct />
          <PriceRangeCard />
          <ShareFriendsCard />
          <DownloadAppCard />
          <FilterCompanyCard />
          <Helpful />
          <FilterFormCard />
          <ReportErrorCard />
        </div>
        <div className="w-full md:w-[80%]">
          <div className="flex justify-between items-center w-full bg-blue-600 text-white font-semibold p-3 rounded-lg my-3">
            <span className="text-lg">Best Seller Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("health-care-device")}
            >
              View All
            </button>
          </div>
          <ProductCard data={categoryProducts?.catproducts} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Health Care Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("health-care-device")}
            >
              View All
            </button>
          </div>
          <ProductCard data={categoryProducts?.catproducts?.slice(2, 4)} />
          <div className="flex justify-between items-center bg-blue-600 text-white font-semibold p-3 rounded-lg my-4">
            <span className="text-lg">Best Seller Ortho Product</span>
            <button
              className="text-sm flex items-center hover:underline"
              onClick={() => categroyProductClick("health-care-device")}
            >
              View All
            </button>
          </div>
          <ProductCard data={categoryProducts?.catproducts?.slice(1, 5)} />
        </div>
      </div>
    </section>
  );
};

export default HealthCareDevices;
