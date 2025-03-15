"use client";
import Image from 'next/image'
import { IMAGES } from "@/components/common/images";

const Diseases = () => {
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <Image src={IMAGES.DISEASESBANNER} alt="Herbs Details" className="w-full h-64 object-cover mx-auto" />
            <h1 className='my-4 font-bold'>Ehrlichisis</h1>
            <div className='bg-white py-4'>
                <h2 className='font-bold my-4 uppercase'>Ehrlichisis overview and Definition</h2>
                <Image src={IMAGES.HERBSBANNER} alt="Herbs Details" className="w-[50%] h-46 object-cover" />
            </div>
            <div className='bg-white py-4'>
                <h2 className='font-bold my-4 uppercase'>Epidemiology</h2>
                <p>Lemongrass is originated from Cambodia, Vietnam, Laos, India, Sri Lanka, Burma, and Thailand. It is widely distributed in hot areas of South India, Maharastra, Gujarat, and Punjab.</p>
            </div>
            <div className='bg-white py-4'>
                <h2 className='font-bold my-4 uppercase'>Pathophysiology</h2>
                <p>Lemongrass is originated from Cambodia, Vietnam, Laos, India, Sri Lanka, Burma, and Thailand. It is widely distributed in hot areas of South India, Maharastra, Gujarat, and Punjab.</p>
            </div>
            <div className='bg-white py-4'>
                <h2 className='font-bold my-4 uppercase'>Clinical signs & symptoms</h2>
                <p>Lemongrass is originated from Cambodia, Vietnam, Laos, India, Sri Lanka, Burma, and Thailand. It is widely distributed in hot areas of South India, Maharastra, Gujarat, and Punjab.</p>
            </div>
            <div className='bg-white py-4'>
                <h2 className='font-bold my-4 uppercase'>Differential Diagnosis</h2>
                <p>Lemongrass is originated from Cambodia, Vietnam, Laos, India, Sri Lanka, Burma, and Thailand. It is widely distributed in hot areas of South India, Maharastra, Gujarat, and Punjab.</p>
            </div>
            <div className='bg-white py-4'>
                <h2 className='font-bold my-4 uppercase'>Prevention</h2>
                <p>Lemongrass is originated from Cambodia, Vietnam, Laos, India, Sri Lanka, Burma, and Thailand. It is widely distributed in hot areas of South India, Maharastra, Gujarat, and Punjab.</p>
            </div>
        </section>
    )
}

export default Diseases;