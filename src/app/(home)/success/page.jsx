"use client";
import Image from "next/image";
import Link from 'next/link';
import { IMAGES } from "@/components/common/images";
import { useRouter } from "next/navigation";

const Success = () => {
  const router = useRouter()
  return (
    <>
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
          <button className="mt-4 px-6 py-2 bg-pink-700 text-white rounded flex items-center justify-center gap-2 mx-auto" onClick={() => router.replace('/')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
