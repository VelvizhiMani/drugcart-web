import Image from 'next/image'
import CancerCare from "@/assets/shopcategory/cancer-care.png"
import ElderCare from "@/assets/shopcategory/elder-care.png"
import SpecialCare from "@/assets/shopcategory/special-care.png"
import HealthCare from "@/assets/shopcategory/health-care.png"
import HealthDevice from "@/assets/shopcategory/health-device-care.png"
import BeautyDevice from "@/assets/shopcategory/beauty-care.png"
import Ayurvedic from "@/assets/ayurvedic.png"

const TopCategory = () => {
    return (
        <section className='px-10 mt-4'>
            <div className='p-2 bg-gray-100 font-bold mb-4'>
                <h1>Shop of Categories</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3'>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={CancerCare} alt="cancer Care" className='h-14 w-14 mb-3 mx-auto object-cover bg-bgcancer rounded-full p-2' />
                        <span>Cancer Care</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={ElderCare} alt="cancer Care" className='h-14 w-14 mb-3 mx-auto object-cover bg-bgcancer rounded-full p-2' />
                        <span>Elder Care</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-14 w-14 mx-auto mb-3 text-orange-600 bg-bgcritical rounded-3xl p-2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <span>Critical Care</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={Ayurvedic} alt="Ayurvedic" className='w-16 h-16 object-cover mb-2 bg-bgayush rounded-full p-2 mx-auto' />

                        <span>Ayush Care</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={HealthCare} alt="cancer Care" className='h-14 w-14 mb-3 mx-auto object-cover bg-bghealthcare rounded-full p-2' />

                        <span>Health Care</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={BeautyDevice} alt="cancer Care" className='h-14 w-14 mb-3 mx-auto object-cover bg-bghealthdev rounded-full p-2' />
                        <span>Beauty Care</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={HealthDevice} alt="cancer Care" className='h-14 w-14 mb-3 mx-auto object-cover bg-bgcancer rounded-full p-2' />
                        <span>Health Device</span>
                    </p>
                </div>
                <div className='bg-bgshop rounded-lg p-4'>
                    <p className='text-center'>
                        <Image src={SpecialCare} alt="cancer Care" className='h-14 w-14 mb-3 mx-auto object-cover rounded-full p-1' />
                        <span>Special Care</span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TopCategory;