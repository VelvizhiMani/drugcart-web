"use client"
import { IMAGES } from "@/components/common/images";
import { GetServicesService } from "@/services/drugService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {
  const router = useRouter();
  const { serviceList } = useSelector((state) => state.serviceData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetServicesService());
  }, []);

  const serviceClick = (service_url) => {
    router.push(`/${service_url}`)
  }

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pb-20">
          {serviceList &&
            serviceList?.map((service, i) => (
              <div
                className="bg-bgshop rounded-lg p-4 cursor-pointer"
                key={i}
                onClick={() => serviceClick(service?.url)}
              >
                <p className="text-center">
                  <Image
                    width={100}
                    height={100}
                    src={service?.image ? `https://assets3.drugcarts.com/admincolor/${service?.image}` : IMAGES.NO_IMAGE}
                    alt={service?.title}
                    className={`mb-3 mx-auto object-cover ${service?.image ? "bg-bgcancer" : null} rounded-full p-2`}
                  />
                  <span>{service?.title}</span>
                </p>
              </div>
            ))}
        </div>

      </section>
    </>
  );
};

export default Services;
