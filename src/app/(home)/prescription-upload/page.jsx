"use client";
import { useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import PrescriptionUpload from "@/components/cart-page/PrescriptionUpload";
import Button from "@/components/common/button";

const PrescripUpload = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  const handleChange = () => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto mt-3">
        <div className="flex flex-wrap h-62 px-10 justify-center items-center bg-[#ADC79B]">
          <div className="w-full md:w-1/2 py-6">
            <h3 className="mb-6 text-xl md:text-3xl text-white font-bold">Order Prescriptions Without the Hassle</h3>
            <p className="text-[#B7084B] text-[14px] md:text-xl">DrugCarts make a wide range of prescription
              medicines and other health products conveniently
              available all across India.</p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              priority
              src={IMAGES.MEDICINEPRESCRIPTION}
              alt="Ayush Banner"
              className="w-[100%] h-[300px] md:w-[70%] md:h-[350px] rounded-lg p-6 mx-auto"
            />
          </div>
        </div>

        <div className="py-4 my-5 rounded-md">
          <p className="text-center py-6 w-full mx-auto text-xl md:text-2xl font-bold">ORDER MEDICINES IN 3 STEPS </p>
          <div className="flex flex-wrap h-62 justify-center items-center">
            <div className="w-full md:w-1/3 justify-center items-center">
              <Image src={IMAGES.UPLOADICONS} alt="Drugcarts Vission" className="w-12 mx-auto" />
              <h2 className="text-md md:text-xl text-center py-4 font-bold text-[#4C4C95] ">Upload a valid prescription</h2>
              <p className="text-md text-center px-6">A valid prescription is an order for
                drugs or medical supplies, written and
                signed and then</p>
            </div>
            <div className="w-full md:w-1/3 justify-center items-center">
              <Image src={IMAGES.CALLICONS} alt="Drugcarts Vission" className="w-12 mx-auto" />
              <h2 className="text-xl text-center py-4 font-bold text-[#4C4C95] ">Receive a confirmation call</h2>
              <p className="text-md text-center px-6">Will you be able to make your appointment?
                If you need to reschedule, please let me know
                at your earliest convenience.
              </p>
            </div>
            <div className="w-full md:w-1/3 justify-center items-center">
              <Image src={IMAGES.DELIVERYICONS} alt="Drugcarts Vission" className="w-12 mx-auto" />
              <h2 className="text-xl text-center py-4 font-bold text-[#4C4C95] ">Delivery at your door step</h2>
              <p className="text-md text-center px-6">Door Step Delivery – This delivery method
                involves getting the product delivered
                to your front door step.</p>
            </div>
            <div className="w-full md:w-1/3"></div>
          </div>
        </div>

        <div className="bg-[#EBEBFF] border p-4 rounded-lg shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-center">How its Work</h2>
          <p className="text-center">A valid prescription is an order for drugs or medical supplies, written and
            signed and then</p>
          <div className="flex flex-wrap h-62 justify-center items-center mt-10">
            <div className="w-full md:w-3/5 justify-center items-center bg-white p-4 rounded-lg">
              <div className="flex flex-wrap justify-center items-center">
                <div className="w-full md:w-1/3 mx-auto">
                  <h3 className="text-md font-bold text-center py-4">Upload photo of your prescription</h3>
                  <Image
                    src={IMAGES.RXPRESCRIPTION}
                    alt="prescription format"
                    className="w-24 mx-auto border-2 rounded p-2 overflow-hidden"
                  />
                  <input type="file" name="prescription" className="py-4 text-center px-4" />
                </div>
                <div className="w-full md:w-2/3 text-center border-2 text-[14px]">
                  <div className="p-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="options"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleChange}
                        className="cursor-pointer"
                      />
                      <span>Search and add Medicines</span>
                    </label>
                    <label className="flex items-center space-x-2 mt-2 py-6">
                      <input
                        type="radio"
                        name="options"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleChange}
                        className="cursor-pointer"
                      />
                      <div className="flex">
                        <span className="w-[45%]">Ask Drugcarts to Call  </span>
                        <span className="w-[55%] text-[8px]">Within 30 mins to Confirm Your Order Medicines.</span>
                      </div>
                    </label>
                    <label className="flex items-center space-x-2 mt-2">
                      <input
                        type="radio"
                        name="options"
                        value="option3"
                        checked={selectedOption === "option3"}
                        onChange={handleChange}
                        className="cursor-pointer"
                      />
                      <span> I want all the Medicines in Prescription</span>
                    </label>
                    {/* <p className="mt-4">Selected Option: <strong>{selectedOption}</strong></p> */}
                  </div>
                  <button className="px-4 py-2 my-4 bg-[#51B015] text-white rounded hover:bg-blue-600">
                    Proceed
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/5 justify-center items-center">
              <h2 className="text-xl font-semibold mb-4 text-center">Valid Prescription</h2>
              <Image
                src={IMAGES.PRESCRIPTIONFORMAT}
                alt="prescription format"
                className="w-[70%] mx-auto"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrescripUpload;
