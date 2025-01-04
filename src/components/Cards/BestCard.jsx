import React from 'react'
import Image from 'next/image'
import StarIcon from '../Icons/StarIcon'
import ActiveStarIcon from '../Icons/ActiveStarIcon'

function BestCard({ data }) {
    return (
        <div>
            <div className="max-w-lg mx-auto m-4 flex items-center">

                <div className="w-1/3">
                    <Image
                        src={data?.imageUrl}
                        alt="Oral Gel"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="ml-3">
                    <h3 className="text-gray-800 font-semibold font-poppins text-[12px] line-clamp-1">{data?.name}</h3>
                    <p className="text-gray-600 text-[12px] font-poppins line-clamp-1">{data?.name}</p>
                    <p className="text-gray-800 font-bold text-[12px] mt-2 font-poppins">${data?.price}</p>

                    <div className="flex items-center mt-2 space-x-1">

                        <ActiveStarIcon />
                        <ActiveStarIcon />
                        <ActiveStarIcon />
                        <StarIcon />
                        <StarIcon />
                    </div>

                    <div className="mt-4">
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-poppins font-semibold text-[13px] py-1 px-2 rounded shadow-md"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-full border-t border-gray-300 my-2" />
        </div>
    )
}

export default BestCard