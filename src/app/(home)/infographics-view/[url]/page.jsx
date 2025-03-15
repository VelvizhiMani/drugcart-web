"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";

const InfographicsView = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
                <h2 className="text-lg font-semibold text-gray-800 uppercase">Epilepsy | Seizure Disorder | Brain disease</h2>
                <hr className='mb-6'/>
                <Image src={IMAGES.EPILEPSY} alt="Weight Loss Tips" className="w-[50%] object-cover mx-auto" />
                <p className='text-sm md:text-md py-6'>Measles is generally a contagious disease which typically causes fever, red rashes, cough and red eyes. And it can also create more serious complications like encephalitis which eventually causes hearing loss. You can prevent this contagious disease by getting vaccination.</p>
        </section>
    )
}

export default InfographicsView;