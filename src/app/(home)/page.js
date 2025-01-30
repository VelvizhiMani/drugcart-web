"use client";
import ProductSlider from "@/components/layout/Slider";
import ShopbyCategory from "@/components/home-page/shopbyCategory";
import TopCategory from "@/components/home-page/topCategory";
import TrandingProduct from "@/components/home-page/trandingProduct";
import BannerGroup from "@/components/home-page/bannerGroup";
import ServiceGroup from "@/components/home-page/serviceGroup";
import FeaturedPackage from "@/components/home-page/featuredPackage";
import HealthHacks from "@/components/home-page/healthHacks";
import Navcategory from "@/components/layout/header/Navcategory";

export default function Home() {
  return (
    <main className="p-5">
      <Navcategory />
      <ProductSlider />
      <TopCategory />
      <TrandingProduct />
      <BannerGroup />
      <ServiceGroup />
      <FeaturedPackage />
      <HealthHacks />
      <ShopbyCategory />
    </main>
  );
}
