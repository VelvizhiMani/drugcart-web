"use client";
import { useState } from "react";
import Link from "next/link";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [isAyushmenuOpen, setIsAyushmenuOpen] = useState(false);
    const [isDevicemenuOpen, setIsDevicemenuOpen] = useState(false);
    const [isLabmenuOpen, setIsLabmenuOpen] = useState(false);
    const [isServicemenuOpen, setIsServicemenuOpen] = useState(false);

    return (
        <>
            <div className='w-screen text-sm'>
                <div className="container mx-auto">
                    <nav className="font-[family-name:var(--font-poppins)] menusize relative bg-white-800 text-black font-medium">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-10">
                                {/* Logo */}
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <Link href="/" className="font-bold">VIEW CATEGORIES</Link>
                                </div>

                                {/* Main Menu */}
                                <div className="hidden md:flex space-x-4">
                                    <Link href="/" className="hover:bg-gray-700 px-1 py-2 rounded-md">Home
                                    </Link>
                                    <Link href="/medicine" className="hover:bg-gray-700 px-3 py-2 rounded-md">Medicine </Link>
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setIsSubmenuOpen(true)}
                                        onMouseLeave={() => setIsSubmenuOpen(false)}
                                    >
                                        <Link href="/ayush"> <button
                                            className="display:block w-full text-left px-3 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent md:hover:underline flex items-center justify-between md:w-auto"
                                        >
                                            Ayush
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button></Link>
                                        {isSubmenuOpen && (
                                            <div className="absolute left-0 mt-0 bg-gray-700 rounded-md shadow-lg w-48">
                                                <Link href="/category/ayurvedic" className="block px-2 py-2 hover:bg-gray-600">Ayurvedic
                                                </Link>
                                                <Link href="/category/homeopathy" className="block px-2 py-2 hover:bg-gray-600">Homeopathy
                                                </Link>
                                                <Link href="/category/siddha" className="block px-2 py-2 hover:bg-gray-600">Siddha
                                                </Link>
                                                <Link href="/category/unani" className="block px-2 py-2 hover:bg-gray-600">Unani
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setIsAyushmenuOpen(true)}
                                        onMouseLeave={() => setIsAyushmenuOpen(false)}
                                    >
                                        <Link href="/health-store"> <button
                                            className="display:block w-full text-left px-1 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent md:hover:underline flex items-center justify-between md:w-auto"
                                        >
                                            Health Care
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button></Link>
                                        {isAyushmenuOpen && (
                                            <div className="absolute left-0 mt-0 bg-gray-700 rounded-md shadow-lg w-48">
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Store code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Store 2
                                                </Link>
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Store code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Store 2
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setIsDevicemenuOpen(true)}
                                        onMouseLeave={() => setIsDevicemenuOpen(false)}
                                    >
                                        <Link href="/health-store"> <button
                                            className="display:block w-full text-left px-1 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent md:hover:underline flex items-center justify-between md:w-auto"
                                        >
                                            Health Care
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button></Link>
                                        {isDevicemenuOpen && (
                                            <div className="absolute left-0 mt-0 bg-gray-700 rounded-md shadow-lg w-48">
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Store code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Store 2
                                                </Link>
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Store code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Store 2
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setIsServicemenuOpen(true)}
                                        onMouseLeave={() => setIsServicemenuOpen(false)}
                                    >
                                        <Link href="/services"> <button
                                            className="display:block w-full text-left px-1 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent md:hover:underline flex items-center justify-between md:w-auto"
                                        >
                                            Services
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button></Link>
                                        {isServicemenuOpen && (
                                            <div className="absolute left-0 mt-0 bg-gray-700 rounded-md shadow-lg w-48">
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Device code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Device 2
                                                </Link>
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Device code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Device 2
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        className="relative group"
                                        onMouseEnter={() => setIsLabmenuOpen(true)}
                                        onMouseLeave={() => setIsLabmenuOpen(false)}
                                    >
                                        <Link href="/lab"> <button
                                            className="display:block w-full text-left px-1 py-2 hover:bg-gray-700 rounded-md md:hover:bg-transparent md:hover:underline flex items-center justify-between md:w-auto"
                                        >
                                            Lab
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-4 w-4 ml-0"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button></Link>
                                        {isLabmenuOpen && (
                                            <div className="absolute left-0 mt-0 bg-gray-700 rounded-md shadow-lg w-48">
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Device code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Device 2
                                                </Link>
                                                <Link href="/service1" className="block px-2 py-2 hover:bg-gray-600">Health Device code 1
                                                </Link>
                                                <Link href="/service2" className="block px-2 py-2 hover:bg-gray-600">Health Device 2
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                    <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">Scan </Link>
                                    <Link href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md">Doctor </Link>
                                </div>

                                {/* Mobile Menu Button */}
                                <div className="md:hidden">
                                    <button
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                        className="hover:bg-gray-700 px-3 py-2 rounded-md"
                                    >
                                        ☰
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="md:hidden bg-white">
                                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
                                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Medicine</Link>
                                <div>
                                    <button
                                        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Ayush
                                    </button>
                                    {isSubmenuOpen && (
                                        <div className="pl-4">
                                            <Link href="/service1" className="block px-4 py-2 hover:bg-gray-100">Service 1
                                            </Link>
                                            <Link href="/service2" className="block px-4 py-2 hover:bg-gray-100">Service 2
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <button
                                        onClick={() => setIsAyushmenuOpen(!isAyushmenuOpen)}
                                        className="w-full text-left px-4 py-2 hover:bg-gray-200"
                                    >
                                        Health Store
                                    </button>
                                    {isAyushmenuOpen && (
                                        <div className="pl-4 bg-gray-100">
                                            <Link href="/service1" className="block px-4 py-2 hover:bg-gray-100">Health Store 1
                                            </Link>
                                            <Link href="/service2" className="block px-4 py-2 hover:bg-gray-100">Health Store 2
                                            </Link>
                                            <Link href="/service1" className="block px-4 py-2 hover:bg-gray-100">Health Store 1
                                            </Link>
                                            <Link href="/service2" className="block px-4 py-2 hover:bg-gray-100">Health Store 2
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Doctor</Link>
                                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Lab Test</Link>
                                <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
                            </div>
                        )}
                    </nav>
                </div>
                {/* <hr className='h-1' /> */}
            </div>
        </>
    )
}

export default Nav;