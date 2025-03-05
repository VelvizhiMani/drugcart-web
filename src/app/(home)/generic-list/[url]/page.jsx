"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { GetProductGeneticUrlService } from "@/services/productService";
import CartIcon from "@/assets/Icons/CartIcon";
import Alovera from "@/assets/product/alovera.png";
import Breathe from "@/assets/product/breathe-eazy.png";
import Honitus from "@/assets/product/honitus.png";
import Wheatgrass from "@/assets/product/wheatgrass-juice.png";
import { IMAGES } from "@/components/common/images";

const GenericProductList = () => {
  const { productGenericUrl } = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params?.url) {
      dispatch(GetProductGeneticUrlService(params?.url));
    }
  }, [params?.url]);

  const productsData = [
    { id: 1, name: "Pankajakasthuri Syrup", price: "400", image: Alovera },
    { id: 2, name: "Cough Syrup 100 ml", price: "440", image: Breathe },
    { id: 3, name: "Pankajakasthuri Syrup", price: "400", image: Honitus },
    { id: 4, name: "Cough Syrup 100 ml", price: "440", image: Alovera },
    { id: 5, name: "Cough Syrup 100 ml", price: "440", image: Wheatgrass },
  ];

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(50000);

  // Handle Min & Max Price Inputs
  // const handleMinChange = (e) => {
  //   const value = Math.min(Number(e.target.value), maxPrice - 500);
  //   setMinPrice(value);
  // };

  // const handleMaxChange = (e) => {
  //   const value = Math.max(Number(e.target.value), minPrice + 500);
  //   setMaxPrice(value);
  // };

  const handleMinBlur = () => {
    if (maxPrice < minPrice - 500) {
      setMinPrice(minPrice - 500);
    }
  };

  const handleMinChange = (e) => {
    setMinPrice(Number(e.target.value));
  };

  const handleMaxBlur = () => {
    if (maxPrice < minPrice + 500) {
      setMaxPrice(minPrice + 500);
    }
  };

  const handleMaxChange = (e) => {
    setMaxPrice(Number(e.target.value));
  };


  const filteredProducts = productGenericUrl.filter(
    (product) => {
      const price = Number(product.price.toString().replace(/\D/g, ""));
      return price >= minPrice && price <= maxPrice;
    }
  );

  console.log(filteredProducts);


  return (
    <section className="max-w-7xl mx-auto">
      {/* Title */}
      <div className="py-2 text-xl font-bold">
        <h2>List of Medicine in Cold and Cough</h2>
      </div>
      <div className="flex flex-wrap">
        <div className="w-[20%] flex-none">
          <div className="border-[1.5px] m-2 rounded-md">
            <h2 className="bg-[#B7084B] p-2 mx-auto text-white font-bold">
              Latest Product
            </h2>
            <div className="m-2">
              <div className="flex justify-start border-[1.5px] p-2">
                <Image
                  src={IMAGES.ALOVERA}
                  alt="Health hacks"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-2">
                  <h3 className="font-bold text-sm">Zucet Plus Tablet</h3>
                  <h3 className="text-gray-400 text-xs">Cold Cough</h3>
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
        </div>
      </div>
      {/* Layout: Sidebar + Products */}
      <div className="flex flex-wrap">
        {/* Sidebar */}
        <div className="w-[20%] flex-none">
          {/* Price Filter */}
          <div className="border-[1.5px] m-2 rounded-md">
            <h2 className="bg-[#4C4C95] p-2 text-white font-bold">Price Range</h2>
            <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
              <div className="relative my-6">
                {/* Range Track */}
                <div className="w-full h-1 bg-gray-300 rounded-lg absolute top-1/2 transform -translate-y-1/2" />
                {/* Min Range Input */}
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={minPrice}
                  onChange={handleMinChange}
                  className="absolute w-full h-1 appearance-none bg-transparent"
                />
                {/* Max Range Input */}
                <input
                  type="range"
                  min="0"
                  max="50000"
                  value={maxPrice}
                  onChange={handleMaxChange}
                  className="absolute w-full h-1 appearance-none bg-transparent"
                />
                {/* Labels */}
                <div className="absolute left-0 -top-7 bg-indigo-700 text-white text-xs px-2 py-1 rounded-md">
                  ${minPrice}
                </div>
                <div className="absolute right-0 -top-7 bg-indigo-700 text-white text-xs px-2 py-1 rounded-md">
                  ${maxPrice}
                </div>
              </div>
              {/* Input Fields */}
              <div className="flex justify-center items-center space-x-4 py-6">
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={minPrice}
                  onBlur={handleMinBlur}
                  onChange={handleMinChange}
                  className="w-24 p-2 border rounded-lg text-center"
                />
                <span className="text-lg font-bold">-</span>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={maxPrice}
                  onBlur={handleMaxBlur}
                  onChange={handleMaxChange}
                  className="w-24 p-2 border rounded-lg text-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-[80%] flex-1 m-3">
          <h1 className="text-xl font-bold">Similar Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, i) => (
                <div
                  key={i}
                  className="border rounded-lg p-2 bg-white shadow hover:shadow-lg w-5/6 md:w-full mt-2"
                >
                  {/* Favorite Button */}
                  <div className="grid justify-end">
                    <button className="bg-[#FFE5EF] p-1 rounded-full shadow hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <Image src={productsData[i]?.image || IMAGES.NO_IMAGE} alt={product.product_name} className="w-48 h-48 ml-3" height={192} width={192} />
                  <h3 className="text-gray-500 font-medium text-sm">{product.product_name}</h3>
                  <p className="text-black font-semibold text-lg">${product.price}</p>
                  <button><CartIcon /></button>
                </div>
              ))
            ) : (
              <p>No products found in this price range.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericProductList;
