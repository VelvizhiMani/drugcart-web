"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";
import { IMAGES } from "@/components/common/images";

const HealthNews = () => {
    const router = useRouter();
    const healthnewsClick = (url) => {
        router.push(`/health-news-details/${url}`)
    }
    return (
        <section className="max-w-7xl mt-3 mx-auto">
            <div className='flex flex-wrap'>
                <div className='w-full md:w-4/6'>
                    <Image src={IMAGES.HEALTHNEWS} alt="Weight Loss Tips" className="w-[100%] h-96 rounded p-4 object-cover mx-auto" />
                    <p className='p-3'>Antibiotic resistance is a public health threat, doctors said at a convention on Saturday.
                        It is apprehended that the world will soon reach a pre-antibiotic era where a simple bacterial infection can lead to
                        severe illness.</p>
                </div>
                <div className='w-full md:w-2/6'>
                    <h3 className='text-sm md:text-xl font-bold mb-4'>Latest News </h3>
                    <div className="flex place-items-start mb-2">
                        <Image
                            src={IMAGES.HACKS1}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                                6 Drugs That Can Cause Hair Loss
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Significance</li>
                                <li>Usage of Cold Milk</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex place-items-start mb-2">
                        <Image
                            src={IMAGES.HACKS1}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                                6 Drugs That Can Cause Hair Loss
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Significance</li>
                                <li>Usage of Cold Milk</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex place-items-start">
                        <Image
                            src={IMAGES.HACKS1}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                                6 Drugs That Can Cause Hair Loss
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Significance</li>
                                <li>Usage of Cold Milk</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-md md:text-xl font-bold m-3'>Latest Health News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-0 gap-3">
                <div className="bg-[#F8F8F8] p-3 rounded-sm cursor-pointer"
                    onClick={() => healthnewsClick("Welcome")}>
                    <div className="flex place-items-start">
                        <Image
                            src={IMAGES.HACKS1}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                                Cold Milk
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Significance</li>
                                <li>Usage of Cold Milk</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] p-3 rounded-sm cursor-pointer"
                    onClick={() => healthnewsClick("Welcome")}>
                    <div className="flex place-items-start">
                        <Image
                            src={IMAGES.HACKS1}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                                Cold Milk
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Significance</li>
                                <li>Usage of Cold Milk</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F8F8] p-3 rounded-sm cursor-pointer"
                    onClick={() => healthnewsClick("Welcome")}>
                    <div className="flex place-items-start">
                        <Image
                            src={IMAGES.HACKS1}
                            alt="Health hacks"
                            className="w-24 h-24 object-cover"
                        />
                        <div className="ml-4 text-start">
                            <h3 className="font-bold text-sm">
                                Cold Milk
                            </h3>
                            <ul className="ml-5 mt-3 text-xs list-disc leading-6">
                                <li>Significance</li>
                                <li>Usage of Cold Milk</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HealthNews