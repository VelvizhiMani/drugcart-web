"use client";
import Image from "next/image";
import Logo from "@/assets/logo.png"
import { useState } from "react";

const Header = () => {
    const [pincode, setPincode] = useState("");
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        console.log(`Pincode: ${pincode}, Query: ${query}`);
    };

    return (
        <>
            <section className='m-2 md:ml-20 md:mr-20'>
                <div className='container mx-auto'>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-1 text-center">
                        <div className=" text-white p-1 pt-3 col-span-2 md:col-span-1">
                            <div className="flex justify-center items-center">
                                <Image
                                    priority
                                    src={Logo}
                                    alt="Logo"
                                    className='logoIcon'
                                />
                            </div>
                        </div>
                        <div className="col-span-3 text-white p-4 pt-3">
                            <div className="flex items-center border-solid border-2 border-gray-200 w-full h-9 bg-bgcolor text-white rounded-full justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <h4 className="bg-bgcolor ps-2 pe-2 placeholder-white text-white">Pincode</h4>
                                <input
                                    type="text"
                                    placeholder="Search For Your Medicine"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="flex-1 px-1 py-2 h-8 border-red-100 text-gray-700 focus:outline-none rounded-l-3xl"
                                />

                                {/* Search Button */}
                                <button
                                    onClick={handleSearch}
                                    className="flex items-center h-8 justify-center bg-white text-gray-700 px-4 py-2 rounded-r-full hover:bg-gray-100 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className=" text-white p-1 pt-3 w-full
                    ">
                            <div className='flex'>
                                <button type="button" className="text-white bg-bgcolor hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
                                    </svg>Upload
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-black mt-1 ml-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>

                            </div>
                        </div>
                        <div className=" text-black p-1 pt-3">
                            <div className='flex mt-1'>
                                <svg className="w-6 h-6 fill-sky-100  stroke-sky-500 stroke-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
                                </svg>
                                <h2 className='text-md ml-2 mr-12'>Login</h2>
                                <h2 className='text-md'>English</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section>
                <hr className='h-1' />
            </section> */}
        </>
    )
}

export default Header;