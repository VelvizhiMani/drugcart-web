import React from 'react'
import Image from 'next/image'
import BannerImg from "@/assets/main-banner.png"
import Righttop from "@/assets/banner-right-top.png"
import Rightbottom from "@/assets/banner-right-bottom.png"

const SliderSection = () => {
  return (
    <section>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-6 gap-4 px-10'>
            <div className='md:col-span-4 col-span-1 justify-items-center border border-gray-100 p-2'>
            <Image src={BannerImg} alt="Banner" className='object-cover w-full' />
            </div>
            <div className='md:col-span-2 col-span-1 pt-3 justify-items-center  border border-gray-100'>
            <Image src={Righttop} alt="Banner" className='object-cover w-11/12 h-44 mb-3  rounded-md' />
            <Image src={Rightbottom} alt="Banner" className='object-cover w-11/12 h-44 rounded-md' />
            </div>
          </div>
        </div>
      </section>
  )
}

export default SliderSection;