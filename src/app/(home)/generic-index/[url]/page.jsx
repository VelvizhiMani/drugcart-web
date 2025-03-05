"use client";
import Link from "next/link";
import GenericCard from "@/components/medicine/GenericCard";
import { GetGeneticUrlService } from "../../../../services/genericService";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { IMAGES } from "@/components/common/images";
import Image from "next/image";

const GenericIndex = () => {
  const { genericUrl } = useSelector((state) => state.genericData)
  const params = useParams();
  const dispatch = useDispatch()
    const router = useRouter()

  useEffect(() => {
    dispatch(GetGeneticUrlService(params?.url))
  }, [params?.url])

  const GenericClick = (cat_url) => {
    router.push(`/generic-list/${cat_url}`)
  }

  console.log('params', genericUrl);


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
          {genericUrl && genericUrl.map((generic, i) => (
            <div
              className="border-[1.5px] p-4 cursor-pointer"
              key={i}
              onClick={() => GenericClick(generic?.url)}
            >
              <p className="text-center">
                <Image
                  width={100}
                  height={100}
                  src={IMAGES.DUMMYIMAGE}
                  alt="Dummy Image"
                  className="mb-3 mx-auto object-cover p-2 blur-[2px]"
                />
                <span>{generic?.generices}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default GenericIndex;
