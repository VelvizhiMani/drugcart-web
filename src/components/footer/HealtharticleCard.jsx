"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";

const HealtharticleCard = () => {
        const router = useRouter();
        const articleClick = (url) => {
            router.push(`/health-article-details/${url}`)
          }

    return (
        <section className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden" 
                onClick={() => articleClick("welcome")}>
                    <Image src={IMAGES.ARTICLES} alt="Weight Loss Tips" className="w-full h-80 object-contain" />
                    <div className="p-5">
                        <h2 className="text-sm md:text-md font-semibold">Weight Loss - Daily Tips </h2>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image src={IMAGES.ALLERGIC} alt="Weight Loss Tips" className="w-full h-80 object-contain" />
                    <div className="p-5">
                        <h2 className="text-sm md:text-md font-semibold">Weight Loss - Daily Tips</h2>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image src={IMAGES.ARTICLES} alt="Weight Loss Tips" className="w-full h-80 object-contain" />
                    <div className="p-5">
                        <h2 className="text-sm md:text-md font-semibold">Weight Loss - Daily Tips</h2>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <Image src={IMAGES.ALLERGIC} alt="Weight Loss Tips" className="w-full h-80 object-contain" />
                    <div className="p-5">
                        <h2 className="text-sm md:text-md font-semibold">Weight Loss - Daily Tips</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealtharticleCard;