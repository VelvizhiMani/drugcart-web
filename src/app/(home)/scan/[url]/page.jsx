"use client";
import Image from "next/image";
import { IMAGES } from "@/components/common/images";

const ScanDetails = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className="flex">
                <div className="w-full md:w-1/2 p-2">
                    <h1 className="text-md md:text-xl font-bold">PET Scan</h1>
                    <div className="rounded-lg p-6">
                        <Image priority src={IMAGES.CTSCAN} alt="Nutritionist" className="w-full mx-auto" />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-2 border-[1.5px]">
                    <div class="relative overflow-x-auto mt-6">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
                            <thead class="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th colSpan={3} class="px-6 py-3">
                                        PET Scan Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4 w-[150px]">Test Name</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">Cardiac PET Scan.</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4">Test Code</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">78433</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4">Category</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">Radiology</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td className="px-6 py-4">Area</td>
                                    <td className="px-6 py-4">:</td>
                                    <td className="px-6 py-4">Scans may be used to evaluate organs and/or tissues for the presence of disease or other conditions</td>
                                </tr>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <td colSpan={3} className="px-6 py-4">
                                        <p className="my-3">1. Clinical assessment of myocardial perfusion,</p>
                                        <p className="my-3">2. Quantification of myocardial blood flow,</p>
                                        <p className="my-3">3. Assessment of viability with high accuracy.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={3} className="px-6 py-4">
                                        <button className='text-center bg-green-500 p-2 w-full text-white font-bold'>Book Now</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ScanDetails