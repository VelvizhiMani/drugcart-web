"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartService } from "@/services/cartService";
import { IMAGES } from "@/components/common/images";
import Link from 'next/link';
import Image from "next/image";

const OrderSummary = () => {
  const { carts } = useSelector((state) => state.cartData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartService());
  }, []);

  console.log("carts", carts);

  return (
    <>
     <section className="px-2 md:px-12 mt-3">
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 ">
          <Link href="#" className="hover:text-gray-700">Home</Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">Order Summary</Link>
          </div>
      </section>
      <section className="px-2 md:px-12 mt-3">
        <div className="max-w-7xl mx-auto bg-white p-2">
          <div className="flex justify-center items-center space-x-2 py-2">
            <div className="flex flex-col items-center">
              <div className="w-6 md:w-12 h-6 md:h-12 flex justify-center items-center bg-green-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-6 md:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 7H19m-8-7v7m4-7v7"
                  />
                </svg>
              </div>
              <span className="mt-2 text-black font-bold text-sm">Cart</span>
            </div>
            <div className="flex-grow h-1 bg-green-500 w-20"></div>

            <div className="flex flex-col items-center">
              <div className="w-6 md:w-12 h-6 md:h-12 flex justify-center items-center bg-green-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 md:h-6 md:w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                  />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium text-black text-center">
                Upload
              </span>
            </div>
            {/* <div className="h-[2px] bg-gray-400 w-[10%]"></div> */}
            <div className="flex-grow h-1 bg-green-500 w-20"></div>

            <div className="flex flex-col items-center">
              <div className="w-6 md:w-12 h-6 md:h-12 flex justify-center items-center bg-green-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 md:h-6 md:w-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium text-black">
                Address
              </span>
            </div>
            <div className="flex-grow h-1 bg-green-500 w-20"></div>

            <div className="flex flex-col items-center">
              <div className="w-6 md:w-12 h-6 md:h-12 flex justify-center items-center bg-green-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 md:h-6 md:w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16h8m-6-4h6m-4-4h4M3 5h18M5 7v14a2 2 0 002 2h10a2 2 0 002-2V7H5z"
                  />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium text-black">
                Summary
              </span>
            </div>
            <div className="flex-grow h-1 bg-gray-300 w-20"></div>

            <div className="flex flex-col items-center">
              <div className="w-6 md:w-12 h-6 md:h-12 flex justify-center items-center bg-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-4 w-4 md:h-6 md:w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>
              </div>
              <span className="mt-2 text-sm font-medium text-black">
                Payment
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border rounded-lg p-4 bg-white w-full md:w-3/4">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 font-bold items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <h3>Product Details</h3>
                  </div>
                  <div className="flex items-center space-x-10">
                    <h3>Quantity</h3>
                  </div>
                  <div className="flex items-center space-x-10">
                    <h3>Total Price</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={IMAGES.Product_Eugebra}
                      alt="Product"
                      className="w-16 h-16"
                    />
                    <div>
                      <h3 className="font-semibold">
                        Emcof-SF Herbal (Pack of 2)
                      </h3>
                      <p className="text-gray-500 text-sm">Cold Cough</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-10">
                    <div className="flex items-center border rounded-lg">
                      <button className="px-2 py-1 bg-red-500 text-white">
                        −
                      </button>
                      <span className="px-4">1</span>
                      <button className="px-2 py-1 bg-green-500 text-white">
                        +
                      </button>
                    </div>
                    <div>
                      <p className="line-through text-gray-400 text-sm">
                        MRP ₹350.00
                      </p>
                      <p className="text-green-600 text-sm">You Save 50%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-10">
                    <p className="text-lg font-bold">$299.00</p>
                    <button className="text-red-500">🗑️</button>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-right text-xl font-bold text-pink-700 border-b pb-4">
                Total Cart Value: $600
              </div>
              <div className="bg-blue-100 p-6 rounded-lg w-full my-4">
                <h2 className="font-bold text-xl">Shipping Info</h2>
                <div className="flex space-x-8">
                  <p className="font-bold">Name</p>
                  <p>: John</p>
                </div>

                <div className="flex space-x-7">
                  <p className="font-bold">Phone</p>
                  <p>: 9087654321</p>
                </div>

                <div className="flex space-x-3">
                  <p className="font-bold">Address</p>
                  <p>: 123, Peter Road, ECR, Chennai - 600280, Tamilnadu</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#E6FCD7] rounded-lg shadow-md md:w-1/4 w-full">
              <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
              <div className="space-y-6">
                <div className="flex justify-between text-black">
                  <span>Sub total</span>
                  <span>2 items</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Total MRP</span>
                  <span>$700</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Total Drugcarts Discount</span>
                  <span className="text-green-600">-$150</span>
                </div>
                <div className="flex justify-between text-black">
                  <span>Total Cart Value</span>
                  <span>$600</span>
                </div>
                <div className="border-t pt-2 mt-6 flex justify-between text-lg font-bold text-red-600">
                  <span>Total Amount</span>
                  <span>$600</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">
                Proceed to Payment
              </button>
              <div className="mt-4 text-center text-sm text-black font-bold bg-[#EEFEE3] p-[1px] border-2 border-dotted">
                💰 Total Savings of $150 on this order
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderSummary;
