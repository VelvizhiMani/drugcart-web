"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import { useState } from "react";

const PrescriptionUpload = () => {
  const [image, setImage] = useState();
  const [activeTab, setActiveTab] = useState("add");
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        {/* Upload Prescription Section */}
        <div className="border p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-full max-w-2xl">
              <div className="flex border-b pb-2 mb-4">
                <button
                  className={`px-4 py-2 font-semibold rounded-md ${
                    activeTab === "add"
                      ? "bg-pink-200 text-pink-700"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("add")}
                >
                  Add New Address
                </button>
                <button
                  className={`px-4 py-2 font-semibold rounded-md ${
                    activeTab === "saved"
                      ? "bg-pink-200 text-pink-700"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("saved")}
                >
                  Saved Address
                </button>
              </div>
              {activeTab === "add" && (
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Delivery Type"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="Name"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="E-Mail Address"
                    className="border p-2 rounded w-full"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="LandMark"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <textarea
                      placeholder="Door no/Apart no/Street name"
                      className="border p-2 rounded w-full"
                    ></textarea>
                    <textarea
                      placeholder="District/Taluk"
                      className="border p-2 rounded w-full"
                    ></textarea>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Postal Code"
                      className="border p-2 rounded w-full"
                    />
                    <input
                      type="text"
                      placeholder="Country"
                      className="border p-2 rounded w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-1">
                      Type of Place
                    </label>
                    <div className="flex flex-wrap gap-4 mx-4">
                        <button
                          type="button"
                          className="px-4 py-2 bg-green-600 text-white rounded mr-2"
                        >
                          Home
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                        >
                          Office
                        </button>
                        <button
                          type="button"
                          className="px-4 py-2 bg-gray-300 text-gray-700 rounded mr-2"
                        >
                          Others
                        </button>
                      </div>
                    <div className="flex justify-end my-3">
                        <button
                          type="submit"
                          className="w-40 bg-pink-700 text-white py-2 rounded mr-2"
                        >
                          ADD
                        </button>
                      </div>
                  </div>
                </form>
              )}
              {activeTab === "saved" ? (
                <div className="text-start text-gray-600 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border-2 p-3 bg-[#EEFFE4]">
                      <h2 className="font-semibold">Office</h2>
                      <p>
                        Velvizhi, <br />
                        105, Reddiayar Street,
                        <br />
                        Alagramam & Post,
                        <br />
                        Tindivanam Taluk
                        <br />
                        Villupuram
                      </p>
                    </div>
                    <div className="border-2 p-3">
                      <h2 className="font-semibold">Home</h2>
                      <p>
                        Nithya, <br />
                        105, Reddiayar Street,
                        <br />
                        Alagramam & Post,
                        <br />
                        Tindivanam Taluk
                        <br />
                        Villupuram
                      </p>
                    </div>
                    <div className="border-2 p-3">
                      <h2 className="font-semibold">Office</h2>
                      <p>
                        Nithya, <br />
                        105, Reddiayar Street,
                        <br />
                        Alagramam & Post,
                        <br />
                        Tindivanam Taluk
                        <br />
                        Villupuram
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-pink-700 text-white py-2 px-4 text-center rounded my-4"
                  >
                    ADD
                  </button>
                </div>
                </div>
              ) : (
                <div className="text-center text-gray-600 py-6">
                  No saved addresses found.
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Valid Prescription Section */}
        <div className="flex border p-4 rounded-lg shadow-sm">
          <Image
            src={IMAGES.DELIVERYADDRESS}
            alt="address"
            className="w-[100%] mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default PrescriptionUpload;
