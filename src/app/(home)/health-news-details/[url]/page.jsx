"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";


const DailyNewsDetails = () => {
  return (
    <section className="max-w-7xl mt-3 mx-auto">
      <Image src={IMAGES.HEALTHNEWSBANNER} alt="Weight Loss Tips" className="w-full h-64 object-cover mx-auto" />
    <h2 className="text-lg font-semibold text-gray-800 uppercase my-6">Cold Milk</h2>
    <Image src={IMAGES.HEALTHTIPS} alt="Weight Loss Tips" className="w-[50%] object-cover" />
    <p className='text-sm md:text-md py-6'>A stroke, also known as a cerebrovascular accident (CVA), is a medical emergency that occurs when the blood supply to a part of the brain is disrupted or reduced. This lack of blood flow deprives brain cells of oxygen and nutrients, leading to their rapid deterioration. Strokes can have severe and often permanent consequences, depending on the duration and location of the interrupted blood flow.</p>
</section>
  )
}

export default DailyNewsDetails