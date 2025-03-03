"use client";
import Image from "next/image";
import BlogCard from "@/components/home-page/blogCard";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetBlogService } from "@/services/blogService";

const BlogDetail = () => {
  const { blogList } = useSelector((state) => state.blogData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBlogService(1, 3));
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 mb-4">
          <Link href="#" className="hover:text-gray-700">
            Home
          </Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">
            Blog
          </Link>
          <span>&gt;</span>
          <Link href="#" className="hover:text-gray-700">
            Dry Cough
          </Link>
        </div>
        <div className="flex">
          <div className="w-[80%] flex-none">
            <h1 className="font-bold text-xl md:text-2xl">
              Effective Home Remedies For Dry Cough At home
            </h1>
            <p>
              A dry cough is also called an unproductive cough. Unlike
              productive, wet coughs, dry coughs are unable to remove mucus,
              phlegm, or irritants from your lungs or nasal passages. Dry coughs
              can linger for weeks after you’ve had a cold or the flu. They may
              also be caused by a number of conditions, such as: postnasal drip
              asthma acid reflux or GERD They may also be a long-lasting side
              effect from exposure to environmental toxins, such as cigarette
              smoke. Dry coughs can be very uncomfortable and may occur in both
              children and adults. There are a number of clinical treatments you
              can use to alleviate them, but there are also at-home remedies
              that can be just as effective in many cases.
            </p>
            <h2>Other home remedies to try</h2>
            <p>
              Aromatherapy is the practice of using essential oils to soothe and
              heal. Eucalyptus essential oil may help ease dry cough by working
              as a decongestant. Try adding eucalyptus to a diffuser, spritzer,
              or inhaler. You can also add a few drops to hot water in a bowl
              and inhale the steam. Scenting your room with eucalyptus may help
              you get a better night’s sleep if nighttime coughing has been
              keeping you awake.
            </p>
          </div>
          <div className="w-[20%] flex-none">
            <h1 className="font-bold text-xl md:text-xl">Home Remedies</h1>
            <div className="bg-[#F3F8FC] p-3 rounded-md">
              <Image
                src={IMAGES.BLOGIMAGE}
                alt="Blog Medicine"
                className="h-44 object-cover"
              />
              <h2>Gargling Salt Water</h2>
              <p>
                Salt water gargling benefits throat and oral health.  May
                provide relief from sore throat, canker sores, and respiratory
                infections.  May promote dental health by preventing gum
                diseases and dental plaque.  May help maintain natural pH levels
                and reduce allergy symptoms.  Easy and safe home remedy for
                adults and children. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
