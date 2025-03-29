"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";

const Scan = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap justify-center items-center mx-auto">
                <div className="w-full m-2 rounded-md">
                    <Image priority src={IMAGES.SCANBANNER} alt="Scan Banner" className="w-[100%] md:h-[300px] rounded-lg object-cover" />
                </div>
            </div>
            <h2 className="text-md md:text-xl font-bold my-4">Health Checkup Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden">
                    <h2 className="text-md md:text-xl font-bold py-2 text-center">Pet CT Scan</h2>
                    <Image src={IMAGES.CTSCAN} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" />
                    <Link href="/scan/petctscan">
                    <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                    </Link>
                </div>
                <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden">
                    <h2 className="text-md md:text-xl font-bold py-2 text-center">MRI scan</h2>
                    <Image src={IMAGES.MRI} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" />
                    <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                </div>
                <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden">
                    <h2 className="text-md md:text-xl font-bold py-2 text-center">CT Scan</h2>
                    <Image src={IMAGES.CTSCAN1} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" />
                    <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                </div>
                <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden">
                    <h2 className="text-md md:text-xl font-bold py-2 text-center">USG Scan</h2>
                    <Image src={IMAGES.USG} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" />
                    <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                </div>
                <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden">
                    <h2 className="text-md md:text-xl font-bold py-2 text-center">X-RAY</h2>
                    <Image src={IMAGES.XRAY} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" />
                    <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                </div>
                <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden">
                    <h2 className="text-md md:text-xl font-bold py-2 text-center">Stress Test</h2>
                    <Image src={IMAGES.STRESS} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" />
                    <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                </div>
            </div>
        </section>
    )
}

export default Scan;