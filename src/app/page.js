import Image from "next/image";
import Nav from "@/components/header/nav/nav";
import Navcategory from "@/components/header/navcategory/navcategory";
import Slider from "@/components/header/slider/slider";
import Topcategory from "@/components/home/topcategory/topcategory";
import Aromogroup from "@/components/home/aromogroup/aromogroup";
import Servicegroup from "@/components/home/servicegroup/servicegroup";
import Featuredpackage from "@/components/home/featuredpackage/featuredpackage";
import Healthhacks from "@/components/home/healthhacks/healthhacks";
import Shopbycategory from "@/components/home/shopbycategory/shopbycategory";
import Fameoftheday from "@/components/home/fameoftheday/fameoftheday";
import Blog from "@/components/blog/blog";
import Feedback from "@/components/feedback/feedback";
import Customersaying from "@/components/customersaying/customersaying";
import Trandingproduct from "@/components/home/trendingproduct/trendingproduct";
import ProductGrid from "@/components/productgrid/productgrid";

export default function Home() {
  return (
    <>
      {/* <Nav/> */}
        <Navcategory/>
         <Slider/>
        <Topcategory/> 
        {/* <ProductGrid/> */}
        <Aromogroup/>
        <Servicegroup/>
        <Featuredpackage/>
        <Healthhacks/>
        <Shopbycategory/>
        <Fameoftheday/>
        <Blog/>
        <Feedback/> 
        <Customersaying/>
    </>
  );
}
