'use client';
import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css'; // Adjust the path as necessary

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className={`sticky top-0 z-50 text-white p-4 shadow-md ${styles.navbar}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-black text-lg font-bold">
                    Tina Fashion
                </Link>

                <div className="space-x-4">
                    <Link href="/" className="text-black hover:text-white">
                        Home
                    </Link>


                    <Link href="/about" className="text-black hover:text-white">
                        About
                    </Link>

                    

                    {/*Dropdown Menu */}
                    <div className="relative inline-block">
                        <div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black hover:text-white focus:outline-none"
                    >
                         <Link href="/projects" className="block px-4 py-2 text-black hover:bg-gray-200">
                                Projects
                    </Link>
                    </button>
                    {isOpen && (
                        <div className="absolute left-0 mt-2 w-40 bg-white rounded shadow-lg z-10">
                           <Link href="/projects/textiles" className="block px-4 py-2 text-black hover:bg-gray-200">
                                Textiles
                            </Link>

                            <Link href="/projects/wools" className="block px-4 py-2 text-black hover:bg-gray-200">
                                Wools Collection
                            </Link>

                            <Link href="/projects/hats" className="block px-4 py-2 text-black hover:bg-gray-200">
                                Hats Collection
                            </Link>

                            <Link href="/projects/scarfs" className="block px-4 py-2 text-black hover:bg-gray-200">
                                Scarfs Collection
                            </Link>
                        </div>
                    )}
                        </div> {/* Close dropdown wrapper */}
                    </div> {/* Close relative inline-block */}
                    <Link href="/contact" className="text-black hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};