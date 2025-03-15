"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";

const HealthVideoCard = () => {
    const router = useRouter();
    const healthVideo = (url) => {
        router.push(`/health-video-detail/${url}`)
    }

    return (
        <section className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden" onClick={()=> healthVideo("welcome")}>
                    <div className="relative">
                        <Image src={IMAGES.BANNER} alt="Weight Loss Tips" className="w-full h-48 object-cover" />
                        <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 text-white text-xl font-bold px-4 py-2">
                            WEIGHT LOSS TIPS
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-800">Weight Loss - Daily Tips</h2>
                        <p className="text-sm text-gray-500">Video - Weight Loss Tips</p>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">★★★★☆</span>
                            <span className="ml-2 text-gray-600 text-sm">4.0 (1,245 reviews)</span>
                        </div>
                        <p className="text-gray-600 mt-3 text-sm">
                            Decreasing your intake of processed foods and added sugar can help you lose weight in 7 days. Drinking plenty of water and adding fiber to your diet might also help.
                        </p>
                    </div>
                </div>
                <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <Image src={IMAGES.BANNER} alt="Weight Loss Tips" className="w-full h-48 object-cover" />
                        <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 text-white text-xl font-bold px-4 py-2">
                            WEIGHT LOSS TIPS
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-800">Weight Loss - Daily Tips</h2>
                        <p className="text-sm text-gray-500">Video - Weight Loss Tips</p>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">★★★★☆</span>
                            <span className="ml-2 text-gray-600 text-sm">4.0 (1,245 reviews)</span>
                        </div>
                        <p className="text-gray-600 mt-3 text-sm">
                            Decreasing your intake of processed foods and added sugar can help you lose weight in 7 days. Drinking plenty of water and adding fiber to your diet might also help.
                        </p>
                    </div>
                </div>
                <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <Image src={IMAGES.BANNER} alt="Weight Loss Tips" className="w-full h-48 object-cover" />
                        <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 text-white text-xl font-bold px-4 py-2">
                            WEIGHT LOSS TIPS
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-800">Weight Loss - Daily Tips</h2>
                        <p className="text-sm text-gray-500">Video - Weight Loss Tips</p>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">★★★★☆</span>
                            <span className="ml-2 text-gray-600 text-sm">4.0 (1,245 reviews)</span>
                        </div>
                        <p className="text-gray-600 mt-3 text-sm">
                            Decreasing your intake of processed foods and added sugar can help you lose weight in 7 days. Drinking plenty of water and adding fiber to your diet might also help.
                        </p>
                    </div>
                </div>
                <div className=" bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <Image src={IMAGES.BANNER} alt="Weight Loss Tips" className="w-full h-48 object-cover" />
                        <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 text-white text-xl font-bold px-4 py-2">
                            WEIGHT LOSS TIPS
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-800">Weight Loss - Daily Tips</h2>
                        <p className="text-sm text-gray-500">Video - Weight Loss Tips</p>
                        <div className="flex items-center mt-2">
                            <span className="text-yellow-500 text-lg">★★★★☆</span>
                            <span className="ml-2 text-gray-600 text-sm">4.0 (1,245 reviews)</span>
                        </div>
                        <p className="text-gray-600 mt-3 text-sm">
                            Decreasing your intake of processed foods and added sugar can help you lose weight in 7 days. Drinking plenty of water and adding fiber to your diet might also help.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthVideoCard;