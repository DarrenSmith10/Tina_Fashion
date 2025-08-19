import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    return(
        <nav className="sticky top-0 bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">
                    My Portfolio
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">
                        About
                    </Link>
                    <Link href="/projects" className="text-gray-300 hover:text-white">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}