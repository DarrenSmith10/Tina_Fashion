"use client";

import Link from "next/link";
import { useState } from "react";
import { Satisfy } from "next/font/google";
import styles from "./Navbar.module.css";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setProjectsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 shadow-sm ${styles.navbar}`}
    >
      <div className="flex w-full items-start justify-between px-6 py-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="flex flex-col items-start text-black leading-none"
        >
          <span
            className={`${satisfy.className} text-[42px] font-normal leading-[0.8] md:text-[48px]`}
          >
            Tinnika
          </span>

          <span
            className={`${satisfy.className} mt-2 text-[17px] italic leading-none text-neutral-700`}
          >
            by Justina Smith
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 pt-3 md:flex">
          <Link
            href="/"
            className="text-sm text-black transition-opacity hover:opacity-50"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-black transition-opacity hover:opacity-50"
          >
            About
          </Link>

          {/* Desktop Projects Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex items-center gap-1 text-sm text-black transition-opacity hover:opacity-50"
            >
              Projects
              <span className="text-xs">
                {projectsOpen ? "−" : "+"}
              </span>
            </button>

            {projectsOpen && (
              <div className="absolute right-0 top-full mt-4 min-w-[190px] border border-neutral-200 bg-[#f7f3ed] py-2 shadow-sm">
                <Link
                  href="/projects"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-5 py-3 text-sm text-black hover:bg-black/5"
                >
                  All Projects
                </Link>

                <Link
                  href="/projects/textiles"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-5 py-3 text-sm text-black hover:bg-black/5"
                >
                  Textiles Collection
                </Link>

                <Link
                  href="/projects/handbags"
                  onClick={() => setProjectsOpen(false)}
                  className="block px-5 py-3 text-sm text-black hover:bg-black/5"
                >
                  Handbag Collection
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="text-sm text-black transition-opacity hover:opacity-50"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`h-px w-6 bg-black transition-transform ${
              mobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-black transition-opacity ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-px w-6 bg-black transition-transform ${
              mobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 px-6 pb-8 pt-4 md:hidden">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="border-b border-neutral-200 py-4 text-black"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="border-b border-neutral-200 py-4 text-black"
            >
              About
            </Link>

            <button
              type="button"
              onClick={() => setProjectsOpen(!projectsOpen)}
              className="flex w-full items-center justify-between border-b border-neutral-200 py-4 text-left text-black"
            >
              Projects
              <span>{projectsOpen ? "−" : "+"}</span>
            </button>

            {projectsOpen && (
              <div className="border-b border-neutral-200 py-2 pl-4">
                <Link
                  href="/projects"
                  onClick={closeMobileMenu}
                  className="block py-3 text-sm text-neutral-700"
                >
                  All Projects
                </Link>

                <Link
                  href="/projects/textiles"
                  onClick={closeMobileMenu}
                  className="block py-3 text-sm text-neutral-700"
                >
                  Textiles Collection
                </Link>

                <Link
                  href="/projects/handbags"
                  onClick={closeMobileMenu}
                  className="block py-3 text-sm text-neutral-700"
                >
                  Handbag Collection
                </Link>
              </div>
            )}

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="py-4 text-black"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};