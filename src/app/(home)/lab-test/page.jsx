import { IMAGES } from '@/components/common/images'
import Image from 'next/image'
import React from 'react'

function page() {
    return (
        <div>
            <div className='bg-[#F7C9B0] p-5'>
                <div className='flex justify-center items-center'>
                    <Image
                        src={IMAGES.LAB_ICON}
                        alt="Product"
                        // className="w-16 h-16"
                        width={12}
                        height={12}
                    />
                </div>
            </div>
        </div>
    )
}

export default page