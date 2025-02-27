"use client";
import PrescriptionCard from "@/components/common/PrescriptionCard";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import Button from "@/components/common/button";
import { useState } from "react";

const PrescriptionUpload = () => {
  const [image, setImage] = useState();
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
      {/* Upload Prescription Section */}
      <div className="border p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Upload Prescription</h2>
        <p className="text-gray-500">Please attach a prescription to proceed</p>
        <PrescriptionCard
          className="p-10 shadow-lg rounded-2xl"
          image={IMAGES.PRESCRIPTIONICON}
          title={"Browse files to upload your prescription"}
          imageformat={"(JPG, JPEG, PNG, PDF)"}
          btntext={"Upload"}
        />
        <PrescriptionCard
          className="p-10 shadow-lg rounded-2xl"
          image={IMAGES.PRESCRIPTIONSAVE}
          title={"Select from saved prescription"}
          btntext={"Select"}
        />
        {image ? (
          <div className="relative w-64 h-64 mb-4">
            <Image
              src={IMAGES.PRESCRIPTIONSAVE}
              alt="Uploaded Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ) : (
          <p className="text-gray-500 mb-4">No image uploaded</p>
        )}

        <div className="text-end">
          <Button text="Save & Continue" />
        </div>
      </div>
      {/* Valid Prescription Section */}
      {/* <Card className="p-6 shadow-lg rounded-2xl"> */}
      <div className="border p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Valid Prescription</h2>
        <Image
          src={IMAGES.PRESCRIPTIONFORMAT}
          alt="prescription format"
          className="w-[70%] mx-auto"
        />
        {/* <h3 className="font-semibold">Guide for a valid prescription</h3>
        <ul className="mt-4 space-y-2 text-gray-500 text-sm">
          <li>
            <span className="font-semibold text-blue-500">
              Doctor's Details:
            </span>{" "}
            Name, Hospital/Clinic Address
          </li>
          <li>
            <span className="font-semibold text-blue-500">
              Patient’s Details:
            </span>{" "}
            Name, Age, Address, Reg No.
          </li>
          <li>
            <span className="font-semibold text-blue-500">
              Medicine Details:
            </span>{" "}
            Name, Strength, Dose, Duration
          </li>
          <li>
            <span className="font-semibold text-blue-500">
              Doctor’s Sign + Stamp
            </span>
          </li>
        </ul> */}
      </div>
      {/* </Card> */}
    </div>
  );
};

export default PrescriptionUpload;
