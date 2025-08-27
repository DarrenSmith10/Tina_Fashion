import Link from "next/link";
import { useState } from "react";
import styles from './Navbar.module.css'; // Adjust the path as necessary

export const Navbar = () => {
    return(
        <nav className={`sticky top-0 z-50 text-white p-4 shadow-md ${styles.navbar}`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-black text-lg font-bold">
                    My Portfolio
                </Link>
                <div className="space-x-4">
                    <Link href="/" className="text-black hover:text-white">
                        Home
                    </Link>
                    <Link href="/about" className="text-black hover:text-white">
                        About
                    </Link>
                    <Link href="/projects" className="text-black hover:text-white">
                        Projects
                    </Link>
                    <Link href="/contact" className="text-black hover:text-white">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}