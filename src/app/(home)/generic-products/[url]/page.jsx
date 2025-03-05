"use client";
import { IMAGES } from "@/components/common/images";
import Image from "next/image";
import React from "react";

const GenericProductDetail = () => {
  return (
    <section className="max-w-7xl mx-auto mt-3">
      <div className="flex py-2">
        <div className="w-[70%]">
          <h2 className="text-xl uppercase py-2 font-bold">
            INFORMATION ABOUT Abacavir
          </h2>
          <div className="p-2 bg-gray-100 font-bold my-4">
            <h1 className="text-xl uppercase">Description Abacavir</h1>
          </div>
          <p>
            Abacavir is a nucleoside reverse transcriptase inhibitor used to
            treat human immunodeficiency virus (HIV). It produces its action by
            preventing the multiplication of virus cells in human cells.
          </p>
          <div className="p-2 bg-gray-100 font-bold my-4">
            <h1 className="text-xl uppercase">Uses and Benefits of Abacavir</h1>
          </div>
          <p>
            Human immunodeficiency virus It is the sexually transmitted diseases
            that usually attack our body cells that help to fight against the
            infection by damaging our immune system. It is caused by having sex
            with an infected person, sharing needles, blood transfusion,
            breastfeeding, or pregnancy. Symptoms include weight loss, night
            sweats, cough, headache, fever, sore throat, diarrhea, pneumonia,
            shingles, and swollen lymph nodes.
          </p>
          <div className="p-2 bg-gray-100 font-bold my-4">
            <h1 className="text-xl uppercase">
              Mechanism of action of Abacavir
            </h1>
          </div>
          <p>
            Abacavir an antiviral medication, nucleoside reverse transcriptase
            inhibitor that produces its action by preventing the multiplication
            of viruses in human cells. Thus it stops the growth of new viruses
            and helps to clear up your infection
          </p>
        </div>
        <div className="w-[30%] p-2 border-[1.5px]">
          <h2 className="text-xl text-center uppercase py-2 font-bold border-b-[1.5px]">
            AVAILABLE MEDICINE FOR Abacavir
          </h2>
          <div className="flex p-2 border-b-[1.5px] py-2">
            <Image
              priority
              src={IMAGES.ALOVERA}
              alt="alternative"
              className="h-20 w-20 rounded-md"
            />
            <div className="mx-auto ml-2 w-full p-2">
              <h3 className="text-[16px]">A-Bec Tablet 300mg</h3>
              <p className="text-[14px] text-[red] font-bold">Rs.1332.44</p>
            </div>
          </div>
          <div className="flex p-2 border-b-[1.5px] py-2">
            <Image
              priority
              src={IMAGES.ALOVERA}
              alt="alternative"
              className="h-20 w-20 rounded-md"
            />
            <div className="mx-auto ml-2 w-full p-2">
              <h3 className="text-[16px]">A-Bec Tablet 300mg</h3>
              <p className="text-[14px] text-[red] font-bold">Rs.1332.44</p>
            </div>
          </div>
          <div className="flex p-2 border-b-[1.5px] py-2">
            <Image
              priority
              src={IMAGES.ALOVERA}
              alt="alternative"
              className="h-20 w-20 rounded-md"
            />
            <div className="mx-auto ml-2 w-full p-2">
              <h3 className="text-[16px]">A-Bec Tablet 300mg</h3>
              <p className="text-[14px] text-[red] font-bold">Rs.1332.44</p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="bg-gray-200 p-6 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-xl font-semibold text-center mb-4">
                Have any Question?
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  value="ABACAVIR"
                  readOnly
                  className="w-full p-2 border rounded bg-gray-300 font-semibold"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Contact No."
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <textarea
                  placeholder="Question"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400 h-24"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white p-2 rounded hover:bg-gray-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericProductDetail;
