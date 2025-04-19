"use client";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/components/common/images";
import CartIcon from "@/assets/Icons/CartIcon";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetProductService } from "@/services/productService";
import { useParams, useRouter } from "next/navigation";
import { PostCartService } from "@/services/cartService";
import Helpful from "@/components/ProductDetailsCard/Helpful";
import OtcProduct from "@/components/ProductDetailsCard/OtcProduct";
import FilterCompanyCard from "@/components/ProductDetailsCard/FilterCompanyCard";
import { tableText } from "@/utils/textFormat"

const GenericProductList = () => {
  const { productList } = useSelector((state) => state.productData);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showNo, setShowNo] = useState(10);
  const params = useParams();
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    dispatch(GetProductService(page, showNo, search, params?.url));
  }, [page, showNo, search, params?.url]);

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 500);
    setMinPrice(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 500);
    setMaxPrice(value);
  };

  const ProductClick = (url) => {
    router.push(`/product/${url}`);
  };
  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="py-2 text-xl font-bold">
          <h2 className="ml-2">List of Medicine</h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-[20%] flex-none hidden md:block">
            <div className="border-[1.5px] m-2 rounded-md">
              <h2 className="bg-[#B7084B] p-2 mx-auto text-white font-bold">
                Latest Product
              </h2>
              <div className="m-2">
                <div className="flex justify-start border-[1.5px] p-2">
                  <Image
                    src={
                      productList?.products?.[0]?.product_img
                        ? `https://assets2.drugcarts.com/${productList?.products?.[0]?.product_img}`
                        : IMAGES.NO_IMAGE
                    }
                    alt={productList?.products?.[0]?.product_name}
                    width={250}
                    height={220}
                    className="w-16 h-16 object-cover"
                  />
                  <div className="ml-2">
                    <h3 className="font-bold text-sm cursor-pointer" onClick={() => ProductClick(productList?.products?.[0]?.url)}>{tableText(productList?.products?.[0]?.product_name, 30)}</h3>
                    <h3 className="text-gray-400 text-xs">{productList?.products?.[0]?.generices}</h3>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500 text-xs">&#9733;</span>
                      <span className="text-yellow-500 text-xs">&#9733;</span>
                      <span className="text-yellow-500 text-xs">&#9733;</span>
                      <span className="text-yellow-500 text-xs">&#9733;</span>
                      <span className="text-gray-500 text-xs">&#9733;</span>
                    </div>
                    <h4 className="text-bgcolor text-sm">Banned for sale</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-[1.5px] m-2 rounded-md">
              <h2 className="bg-[#4C4C95] p-2 mx-auto text-white font-bold">
                Price Range
              </h2>
              <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
                {/* Slider */}
                <div className="relative my-6">
                  {/* Range Track */}
                  <div className="w-full h-1 bg-gray-300 rounded-lg absolute top-1/2 transform -translate-y-1/2" />

                  {/* Min Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={minPrice}
                    onChange={handleMinChange}
                    className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
                  />

                  {/* Max Range Input */}
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="absolute w-full h-1 appearance-none bg-transparent pointer-events-auto"
                  />

                  {/* Labels for Min and Max */}
                  <div className="absolute left-0 -top-6 bg-indigo-700 text-white text-xs px-2 py-1 rounded-md">
                    ${minPrice}
                  </div>
                  <div className="absolute right-0 -top-6 bg-indigo-700 text-white text-xs px-2 py-1 rounded-md">
                    ${maxPrice >= 10000 ? "10k" : maxPrice}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="flex justify-center items-center space-x-4 py-6">
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={minPrice}
                    onChange={handleMinChange}
                    className="w-24 p-2 border rounded-lg text-center"
                  />
                  <span className="text-lg font-bold">-</span>
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    value={maxPrice}
                    onChange={handleMaxChange}
                    className="w-24 p-2 border rounded-lg text-center"
                  />
                </div>
              </div>
            </div>
            <FilterCompanyCard />
            <Helpful />
            <OtcProduct />
          </div>
          <div className="w-full md:w-[80%] flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-3 content-center place-items-center">
              {productList &&
                productList?.products?.map((product, i) => (
                  <div
                    key={i}
                    className="border rounded-lg p-2 bg-white shadow hover:shadow-lg w-5/6 md:w-full mt-2 md:mt-0 "
                  >
                    <Image
                      src={
                        product?.product_img
                          ? `https://assets2.drugcarts.com/${product?.product_img}`
                          : IMAGES.NO_IMAGE
                      }
                      alt={product?.product_name}
                      width={250}
                      height={220}
                      className="sml-3 p-2 w-[250px] h-[220px] my-1 mx-auto pt-6"
                    />
                    <h3 className="text-gray-500 font-poppins font-medium text-[13px] w-[60%] line-clamp-1 capitalize">
                      {product?.cat_name} / {product?.generices}
                    </h3>
                    <h2
                      className="text-black font-poppins font-medium text-[13px] mt-1 w-[60%] line-clamp-1 cursor-pointer"
                      onClick={() => ProductClick(product?.url)}
                    >
                      {product?.product_name}
                    </h2>
                    <div className="bg-white mt-1 flex justify-items-center justify-between">
                      <p className="text-black font-poppins font-semibold text-[14px] mt-1">
                        &#8377; {product?.price}
                      </p>
                      <button
                        onClick={() => dispatch(PostCartService(product))}
                      >
                        <CartIcon />
                      </button>
                    </div>
                    <div className="flex items-center mt-2">
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-yellow-500">&#9733;</span>
                      <span className="text-gray-500">&#9733;</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GenericProductList;
