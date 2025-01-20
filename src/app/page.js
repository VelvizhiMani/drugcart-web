import Navcategory from "@/components/layout/header/navCategorySection";
import SliderSection from "@/components/layout/header/sliderSection";
import TopCategory from "@/components/home-page/topCategory";
import ProductGrid from "@/components/home-page/productGrid";
import AromoGroup from "@/components/home-page/aromoGroup";
import ServiceGroup from "@/components/home-page/serviceGroup";
import FeaturedPackage from "@/components/home-page/featuredPackage";
import HealthHacks from "@/components/home-page/healthHacks";
import ShopbyCategory from "@/components/home-page/shopbyCategory";
import FameSection from "@/components/home-page/fameSection";
import Blog from "@/components/blog/blog";
import CustomerSaying from "@/components/customersaying/customersaying";
import Feedback from '@/components/feedback/feedback';
import AddEmployees from "../components/employee/AddEmployees";
import ShowEmployees from "../components/employee/ShowEmployees";


export default function Home() {
  return (
    <>
    <Navcategory/>
    <SliderSection/>
    <TopCategory/>
    <ProductGrid/>
    <AromoGroup/>
    <ServiceGroup/>
    <FeaturedPackage/>
    <HealthHacks/>
    <ShopbyCategory/>
    <FameSection/>
    <Blog/>
    <Feedback/>
    <CustomerSaying/>
    <AddEmployees/>
    <ShowEmployees/>
    </>
  );
}
