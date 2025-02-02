import Slider from "@/components/layout/Slider";
import TopCategory from "@/components/home-page/topCategory";
import TrandingProduct from "@/components/home-page/trandingProduct";
import BannerGroup from "@/components/home-page/bannerGroup";
import ServiceGroup from "@/components/home-page/serviceGroup";
import FeaturedPackage from "@/components/home-page/featuredPackage";
import HealthHacks from "@/components/home-page/healthHacks";
import ShopbyCategory from "@/components/home-page/shopbyCategory";
import FameSection from "@/components/home-page/fameSection";
import Blog from "@/components/home-page/blog";
import Feedback from "@/components/home-page/feedback";
import CustomerSaying from "@/components/home-page/customerSaying";

export default function Home() {
  return (
    <main className="p-2">
      <Slider />
      <TopCategory />
      <TrandingProduct />
      <BannerGroup />
      <ServiceGroup />
      <FeaturedPackage />
      <HealthHacks />
      <ShopbyCategory />
      <FameSection />
      <Blog />
      <Feedback />
      <CustomerSaying />
    </main>
  );
}
