"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { GetScanListService, GetScanIdService } from '@/services/scanService';
import { useEffect } from "react";

const Scan = () => {
    const { scanList, scan } = useSelector((state) => state.scanData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetScanListService())
    }, [])

    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex flex-wrap justify-center items-center mx-auto">
                <div className="w-full m-2 rounded-md">
                    <Image priority src={IMAGES.SCANBANNER} alt="Scan Banner" className="w-[100%] md:h-[300px] rounded-lg object-cover" />
                </div>
            </div>
            <h2 className="text-md md:text-xl font-bold my-4">Health Checkup Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {scanList && scanList?.scans?.map((item, i) => (
                    <div className="bg-white rounded-lg border-[1.5px] shadow-lg overflow-hidden" key={i}>
                        <h2 className="text-md md:text-xl font-bold py-2 text-center">{item?.scantestname}</h2>
                        <img src={item?.scanImage || IMAGES.NO_IMAGE} alt="Weight Loss Tips" className="w-full h-48 p-3 object-contain" width={200} height={200} />
                        <Link href={`/scan/${item?.url}`}>
                            <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>View More</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Scan;