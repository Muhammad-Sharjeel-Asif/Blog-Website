'use client'

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-purple-600 shadow sticky top-0 z-50">
            <div className="container mx-auto px-4 lg:px-8 py-4 flex justify-between items-center">
                {/* Logo and Name */}
                <div className="items-center text-xl font-extrabold text-white">
                    MUHAMMAD SHARJEEL
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="text-white hover:text-black text-xl font-bold">
                        Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-black text-xl font-bold">
                        About
                    </Link>
                    <Link href="/contact" className="text-white hover:text-black text-xl font-bold">
                        Contact
                    </Link>
                </nav>

                {/* Search and User Options */}
                <div className="hidden md:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-60 px-4 py-2 border-2 rounded-full text-sm border-purple-900"
                    />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-orange-500"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Mobile Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col p-4 space-y-4">
                        <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-700 hover:text-orange-500 font-medium">
                            About
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-orange-500 font-medium">
                            Contact
                        </Link>
                    </nav>
                    <div className="flex flex-col p-4 space-y-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
