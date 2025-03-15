"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";

const Herbs = () => {
    const router = useRouter();
    const herbsClick = (url) => {
        router.push(`/herbs-details/${url}`)
       }
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 px-4 md:px-0 gap-3">
                <div className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                    onClick={() => herbsClick("Welcome")}>
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
                <div className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                    onClick={() => herbsClick("Welcome")}>
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
                <div className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                    onClick={() => herbsClick("Welcome")}>
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
                <div className="border border-gray-300 p-3 rounded-lg cursor-pointer"
                    onClick={() => herbsClick("Welcome")}>
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
            </div>
        </section>
    )
}

export default Herbs;