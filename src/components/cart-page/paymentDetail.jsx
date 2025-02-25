"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartService } from "@/services/cartService";
import { IMAGES } from "@/components/common/images";
import Link from 'next/link';
import Image from "next/image";

const PaymentDetail = () => {
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
          <Link href="#" className="hover:text-gray-700">Payment Details</Link>
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
            <div className="border rounded-lg p-4 bg-white w-full md:w-3/5 w-full">
              <p className="font-bold">Select Payment Method</p>
              <div className="space-y-4 pt-20">
                <button className="border-2 px-5 py-2 flex gap-2 font-bold text-sm mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-green-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                    />
                  </svg>
                  Cash On Online
                </button>
                <button className="border-2 px-4 py-2 flex gap-2 font-bold text-sm mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 text-purple-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>
                  Cash On Delivery
                </button>
              </div>
            </div>

            <div className="p-4 border-2 rounded-lg shadow-md md:w-2/5 w-full">
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

export default PaymentDetail;
