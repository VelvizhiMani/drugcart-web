import React from 'react'
import cart_added from '@/images/cart_added.png'
import Image from 'next/image'

function ServiceCard({data}) {
    return (
        <div>
            <div className=" w-[120px] h-[100px]  rounded-full">
                <Image
                    src={data?.icon}
                    alt="cart_added"
                    className="w-[80px] h-[80px]"
                />
            </div>
            <p className="text-black font-poppins w-[100%] font-semibold text-[14px] mx-0">{data.name}</p>
        </div>
    )
}

export default ServiceCard