"use client";
import PrescriptionCard from "@/components/common/PrescriptionCard";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import Button from "@/components/common/button";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { GetPrescriptionIdService, GetPrescriptionService, PostPrescriptionService } from '@/services/prescriptionService'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const PrescriptionUpload = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const { prescriptionList, prescription } = useSelector((state) => state.prescriptionData)
  const router = useRouter()

  useEffect(() => {
    dispatch(GetPrescriptionService())
  }, [])

  const formik = useFormik({
    initialValues: {
      rximage: "",
    },
    onSubmit: async (data, { resetForm }) => {
      console.log(data);
      await dispatch(PostPrescriptionService(data, resetForm))
      // router.push('/address')
    },
  });

  const handleImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue("rximage", URL.createObjectURL(file));
      formik.handleSubmit()
    }
    setImage(URL.createObjectURL(file));
  };


  return (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
      {/* Upload Prescription Section */}
      <div className="border p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Upload Prescription</h2>
        <p className="text-gray-500">Please attach a prescription to proceed</p>
        <PrescriptionCard
          className="p-10 shadow-lg rounded-2xl"
          image={IMAGES.PRESCRIPTIONICON || image}
          title={"Browse files to upload your prescription"}
          imageformat={"(JPG, JPEG, PNG, PDF)"}
          btntext={"Upload"}
          onChange={handleImage}
        />
        <PrescriptionCard
          className="p-10 shadow-lg rounded-2xl"
          image={IMAGES.PRESCRIPTIONSAVE}
          title={"Select from saved prescription"}
          btntext={"Select"}
        />
        <h2 className="text-xl font-semibold mb-4 text-blue-700">You Select Prescription Below,</h2>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-5 relative w-full h-64 mb-4">
          {prescriptionList && prescriptionList?.map((item, i) => (
            <Image
              onClick={() => dispatch(GetPrescriptionIdService(item?._id))}
              key={i}
              src={item?.rximage ? item?.rximage : IMAGES.PRESCRIPTIONSAVE}
              alt="Uploaded Image"
              // layout="fill"
              objectFit="cover"
              className={`rounded-md w-24 h-24 border-2 cursor-pointer ${item?._id === prescription?._id ? "border-[#B7084B]" : null} mb-3`}
              width={200}
              height={200}
            />
          ))}
        </div>
        {prescriptionList?.length === 0 && <p className="text-gray-500">No image uploaded</p>}
        <div className="text-end">
          <Button disabled={prescription?._id ? false : true } text="Save & Continue" onClick={() => router.push('/address')} />
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
