"use client";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";

const InfographicsCard = () => {
    const router = useRouter();
    const infographicClick = (url) => {
        router.push(`/infographics-view/${url}`)
      }
    return (
        <section className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
                onClick={() => infographicClick("welcome")}>
                    <div className="relative">
                        <Image src={IMAGES.EPILEPSY} alt="Weight Loss Tips" className="w-full h-86 object-cover" />
                        <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-50 text-white text-xl font-bold px-4 py-2">
                        Epilepsy | Seizure Disorder | Brain disease
                        </div>
                    </div>
                    <div className="p-5">
                        <h2 className="text-lg font-semibold text-gray-800">Epilepsy | Seizure Disorder | Brain disease</h2>
                        <p className="text-sm text-gray-500">Posted Date : March,12 2025</p>
                        <p className="text-gray-600 mt-3 text-sm">
                            Decreasing your intake of processed foods and added sugar can help you lose weight in 7 days. Drinking plenty of water and adding fiber to your diet might also help.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfographicsCard;