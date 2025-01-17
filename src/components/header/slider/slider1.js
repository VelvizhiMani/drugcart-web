import Image from 'next/image'
import Bannerimg from "../../../assets/banner.jpg"

const Slider1 = () => {
    return (
        <div className='container mx-auto px-10'>
            <div className='relative'>
                <ul>
                    <li className='h-[50vh] relative'>
                        <Image className='h-full object-cover' src={Bannerimg} alt="img" />
                        <div className='absolute top-0 left-0 h-full w-full flex'>
                            <h2 className='text-4xl font-bold text-white my-auto w-full text-center px-20'>Heading 1</h2>
                        </div>
                    </li>
                    <li className='h-[50vh] relative hidden'>
                        <Image className='h-full object-cover' src={Bannerimg} alt="img" />
                        <div className='absolute top-0 left-0 h-full w-full flex'>
                            <h2 className='text-4xl font-bold text-white my-auto w-full text-center px-20'>Heading 2</h2>
                        </div>
                    </li>
                    <li className='h-[50vh] relative hidden'>
                        <Image className='h-full object-cover' src={Bannerimg} alt="img" />
                        <div className='absolute top-0 left-0 h-full w-full flex'>
                            <h2 className='text-4xl font-bold text-white my-auto w-full text-center px-20'>Heading 3</h2>
                        </div>
                    </li>
                </ul>
                {/* </div> */}
                <div className='absolute px-3 flex h-full w-full top-0 left-0'>
                    <div className='my-auto border w-full flex justify-between'>
                        <button className='bg-white p-3 rounded-full bg-opacity-80 shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button className='bg-white p-3 rounded-full bg-opacity-80 shadow-lg'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider1;