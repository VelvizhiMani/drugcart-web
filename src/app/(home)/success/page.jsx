"use client";
import Image from "next/image";
import Link from 'next/link';
import { IMAGES } from "@/components/common/images";

const Success = () => {
  return (
    <>
    <section className="px-2 md:px-12 mt-3">
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 ">
          <Link href="#" className="hover:text-gray-700">Home</Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">Order Success</Link>
          </div>
      </section>
      <div className="flex items-center justify-center m-4 mb-10">
        <div className="text-center">
          <Image
            src={IMAGES.SUCCESS}
            alt="Success"
            className="mx-auto w-[20%]"
          />
          <h2 className="text-green-600 text-2xl font-bold mt-4">
            Woohoo, Success !
          </h2>
          <p className="text-gray-600 mt-2">
            Your order has successfully been submitted
          </p>
          <button className="mt-4 px-6 py-2 bg-pink-700 text-white rounded flex items-center justify-center gap-2 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default Success;
