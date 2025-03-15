"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";

const KnowDiseases = () => {
    const router = useRouter();
    const healthnewsClick = (url) => {
        router.push(`/diseases/${url}`)
    }
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <h2 className='text-md md:text-xl font-bold m-3'>List Of Medical Conditons A to Z</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                <div className="bg-[#F8F8F8] p-3 rounded-sm cursor-pointer"
                    onClick={() => healthnewsClick("Welcome")}>
                    <div className="flex place-items-start">
                        <Image
                            src={IMAGES.DISEASES}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                            Ehrlichisis  
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Health / Medical Condition</li>
                                <li>Usage of Ehrlichisis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KnowDiseases;