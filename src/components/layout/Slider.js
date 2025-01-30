"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      id: 1,
      title: "100% Best NATURAL Products are",
      subtitle: "AVAILABLE",
      description: "Up to 20% off",
      image: "@/assets/main-banner.png",
      buttonText: "SHOP NOW",
    },
    {
      id: 2,
      title: "Home Medical Supplies",
      subtitle: "Portable Mesh Atomizer",
      description: "Up to 20% off",
      image: "@/assets/main-banner.png",
      price: "$50.00",
      buttonText: "SHOP NOW",
    },
    {
      id: 3,
      title: "Three Layers",
      subtitle: "New Nano Face Mask",
      description: "Up to 20% off",
      image: "@/assets/main-banner.png",
      price: "$50.00",
      buttonText: "SHOP NOW",
    },
  ];

  return (
    <>
      {/* <div className="max-w-screen-xl mx-auto p-4">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative">
              <div className="bg-gray-100 rounded-lg p-2 flex flex-col md:flex-row items-center">
                {slide.image && (
                  <div className="w-full md:w-1/2">
                    <Image
                      priority
                      src={BannerImg}
                      alt={slide.title}
                      className="rounded-lg shadow-lg  w-full"
                    />
                  </div>
                )}
                <div className="w-full md:w-1/2 p-4">
                  <h2 className="text-2xl font-bold text-green-600 pb-2">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-green-400 font-semibold pb-2">
                    {slide.subtitle}
                  </p>
                  {slide.description && (
                    <p className="mt-2 text-gray-700 pb-2">
                      {slide.description}
                    </p>
                  )}
                  {slide.price && (
                    <p className="mt-2 text-lg font-bold text-gray-900 pb-2">
                      Start From: {slide.price}
                    </p>
                  )}
                  <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
      <section>
        <div className="max-w-screen-xl mx-auto p-4" aria-hidden="false">
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div key={slide.id} className="relative">
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col md:flex-row items-center">
                  {slide.image && (
                    <div className="w-full md:w-4/6 p-4">
                      <Image
                        priority
                        src={IMAGES.MAINBANNER}
                        alt={slide.title}
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  )}
                  <div className="w-full md:w-2/6 p-4">
                    <Image
                      priority
                      src={IMAGES.TOPBANNER}
                      alt={slide.title}
                      className="rounded-lg shadow-lg w-full h-44 mb-5"
                    />
                    <Image
                      priority
                      src={IMAGES.BOTTOMBANNER}
                      alt={slide.title}
                      className="rounded-lg shadow-lg w-full h-44"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
