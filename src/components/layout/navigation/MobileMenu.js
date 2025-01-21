"use client";
import { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Main menu toggle
    const [submenuOpen, setSubmenuOpen] = useState(null); // Submenu toggle
  return (
    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-200`}>
                <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-white"
                    onClick={() => setSubmenuOpen(submenuOpen === '/' ? null : 'dashboard')}
                >
                    Home
                </Link>
                {submenuOpen === 'dashboard' && (
                    <div className="ml-4 space-y-1">
                        <Link href="/" className="block px-4 py-2 text-black hover:bg-gray-100">
                            Submenu 1
                        </Link>
                        <Link href="/" className="block px-4 py-2 text-black hover:bg-gray-100">
                            Submenu 2
                        </Link>
                    </div>
                )}
                <Link href="/" className="block px-4 py-2 hover:bg-white">
                    Team
                </Link>
                <Link
                    href="#"
                    className="block px-4 py-2 hover:bg-white"
                    onClick={() => setSubmenuOpen(submenuOpen === 'calendar' ? null : 'calendar')}
                >
                    Calendar
                </Link>
                {submenuOpen === 'calendar' && (
                    <div className="ml-4 space-y-1">
                        <Link href="/" className="block px-4 py-2 text-black hover:bg-gray-100">
                            Event 1
                        </Link>
                        <Link href="/" className="block px-4 py-2 text-black hover:bg-gray-100">
                            Event 2
                        </Link>
                    </div>
                )}
                <Link href="/" className="block px-4 py-2 hover:bg-white">
                    Projects
                </Link>
            </div>
  )
}

export default MobileMenu;