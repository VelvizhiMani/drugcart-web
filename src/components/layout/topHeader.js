"use client";
import Image from "next/image";
import { useState } from "react";
import { IMAGES } from "@/components/common/images";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const TopHeader = () => {
  const [pincode, setPincode] = useState("");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query} in pincode: ${pincode}`);
  };
  return (
    <div className="flex flex-wrap mt-2 justify-center md:px-16">
      <div className="w-full md:w-1/2 lg:w-1/6 xl:w-1/6 bg-red-500">
        <Image src={IMAGES.LOGO} alt="Log" className="m-h-12 mx-auto" />
      </div>
      <div className="w-full md:w-1/2 lg:w-3/6 xl:w-3/6 bg-green-600">
        <div className="flex items-center w-full max-w-lg rounded-full shadow-md border border-gray-300 bg-white overflow-hidden">
          {/* Pincode Section */}
          <div className="flex items-center bg-red-500 px-4 py-2 text-white">
            <AddLocationIcon className="mr-2" />
            <input
              type="text"
              placeholder="Pincode"
              className="bg-transparent focus:outline-none text-sm placeholder-white"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search For Your Medicine"
            className="flex-grow px-4 py-2 focus:outline-none text-gray-700 text-sm"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* Search Icon */}
          <button
            className="px-4 py-2 text-gray-500 hover:text-gray-700"
            onClick={handleSearch}
          >
            <SavedSearchIcon size={20} />
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/6 xl:w-2/6 bg-gray-200">
        <Image src={IMAGES.LOGO} alt="Log" className="m-h-12  mx-auto" />
      </div>
    </div>
  );
};

export default TopHeader;
