"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import TrendingCard from '@/components/Cards/TrendingCard'
import BestCard from '@/components/Cards/BestCard'
import discountImg from '@/assets/trendingimg/dealofday.png'
import { productData } from '@/data/productData'

function TrendingProduct() {
    const [type, setType] = useState(0)
    return (
        <div>
            <div className="grid grid-cols-1 xs:grid-cols-3 md:grid-cols-[0.1fr_5fr_0fr_1.5fr] gap-4">
                <div className="bg-white-500 p-2"></div>
                <div className="bg-white-500 p-4">
                    <div className="bg-white-500 p-4 flex justify-between">
                        <p className="text-black font-semibold font-poppins text-[20px]">Trening  This Week</p>
                        <div className='flex justify-between gap-2'>

                            <p className={`pt-1 py-1 p1-3 px-2 cursor-pointer font-poppins ${type === 0 ? "bg-[#FFB6D2]" : null} rounded-md text-black font-semibold text-[14px]`} onClick={() => setType(0)}>Top Rate</p>

                            <p className={`pt-1 py-1 p1-3 px-2 cursor-pointer font-poppins ${type === 1 ? "bg-[#FFB6D2]" : null} rounded-md text-black font-semibold text-[14px]`} onClick={() => setType(1)}>Top Items</p>

                            <p className={`pt-1 py-1 p1-3 px-2 cursor-pointer font-poppins ${type === 2 ? "bg-[#FFB6D2]" : null} rounded-md text-black font-semibold text-[14px]`} onClick={() => setType(2)}>Top Arrivals</p>
                        </div>
                    </div>
                    <hr className="w-full border-t border-gray-300" />
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[2fr_2fr_2fr_2fr] gap-2">
                        {productData.map((product) => <TrendingCard data={product} key={product?.id} />)}

                    </div>
                </div>
                <div className="bg-white-500">

                    <hr className="w-px h-full mt-5 bg-gray-300" />
                </div>
                <div className="bg-white-500 p-4 my-3">
                    <p className="text-black font-semibold font-poppins text-[20px]">Best Seller</p>
                    <hr className="w-full border-t border-gray-300 my-2" />
                    {productData.map((product, i) => i < 2 && <BestCard data={product} key={product?.id} />)}
                    <button>
                        <Image
                            src={discountImg}
                            alt="Product"
                            className="w-80 h-auto my-4"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrendingProduct;