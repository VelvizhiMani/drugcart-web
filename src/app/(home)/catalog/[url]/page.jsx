"use client";
import Link from "next/link";
import CatalogCard from "@/components/medicine/CatalogCard";

const Catalog = () => {
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
            Catalog
          </Link>
        </div>
        <div className="py-2 text-xl font-bold">
          <h2>List of Medicine in Cold and Cough</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 py-4">
          <CatalogCard />
        </div>
      </section>
    </>
  );
};

export default Catalog;
