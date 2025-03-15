"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";

const DailyHealthTips = () => {
     const router = useRouter();
     const dailyhealthClick = (url) => {
         router.push(`/daily-health-tips-details/${url}`)
        }
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 my-4 ps-4 md:ps-0">Latest Health Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                <div className="border border-gray-300 p-3 rounded-lg cursor-pointer" 
                onClick={()=> dailyhealthClick("Welcome")}>
                <div className="flex place-items-start">
                    <Image
                        src={IMAGES.HACKS1}
                        alt="Health hacks"
                        className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4 text-start">
                        <h3 className="font-bold text-sm">
                        Cold Milk
                        </h3>
                        <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                            <li>Significance</li>
                            <li>Usage of Cold Milk</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="border border-gray-300 p-3 rounded-lg">
                <div className="flex place-items-start">
                    <Image
                        src={IMAGES.TURMERIC}
                        alt="Health hacks"
                        className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4 text-start">
                        <h3 className="font-bold text-sm">
                        Turmeric Health Tips
                        </h3>
                        <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                            <li>Significance</li>
                            <li>Usage of Turmeric </li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 my-6 ps-4 md:ps-0">Popular Health Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                <div className="border border-gray-300 p-3 rounded-lg">
                <div className="flex place-items-start"> 
                    <Image
                        src={IMAGES.HACKS1}
                        alt="Health hacks"
                        className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4 text-start">
                        <h3 className="font-bold text-sm">
                        Cold Milk
                        </h3>
                        <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                            <li>Significance</li>
                            <li>Usage of Cold Milk</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="border border-gray-300 p-3 rounded-lg">
                <div className="flex place-items-start">
                    <Image
                        src={IMAGES.TURMERIC}
                        alt="Health hacks"
                        className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4 text-start">
                        <h3 className="font-bold text-sm">
                        Turmeric Health Tips
                        </h3>
                        <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                            <li>Significance</li>
                            <li>Usage of Turmeric </li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 my-4 ps-4 md:ps-0">Recommended Health Tips</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                <div className="border border-gray-300 p-3 rounded-lg">
                <div className="flex place-items-start">
                    <Image
                        src={IMAGES.HACKS1}
                        alt="Health hacks"
                        className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4 text-start">
                        <h3 className="font-bold text-sm">
                        Cold Milk
                        </h3>
                        <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                            <li>Significance</li>
                            <li>Usage of Cold Milk</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="border border-gray-300 p-3 rounded-lg">
                <div className="flex place-items-start">
                    <Image
                        src={IMAGES.TURMERIC}
                        alt="Health hacks"
                        className="w-24 h-24 object-cover"
                    />
                    <div className="ml-4 text-start">
                        <h3 className="font-bold text-sm">
                        Turmeric Health Tips
                        </h3>
                        <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                            <li>Significance</li>
                            <li>Usage of Turmeric </li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default DailyHealthTips