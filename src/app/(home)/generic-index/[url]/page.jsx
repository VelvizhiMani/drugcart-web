"use client";
import Link from "next/link";
import GenericCard from "@/components/medicine/GenericCard";

const GenericIndex = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto ">
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 py-3">
          <Link href="#" className="hover:text-gray-700">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">
            Order Medicine
          </Link>
          <Link href="#" className="hover:text-gray-700">
            Cold cough
          </Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">
            Common cold
          </Link>
        </div>
        <div className="py-2 text-xl font-bold">
          <h2>List of Generic Product</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 py-4">
          <GenericCard />
        </div>
      </section>
    </>
  );
};

export default GenericIndex;
