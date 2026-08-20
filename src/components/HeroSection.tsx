'use client';

import Link from 'next/link';
export function HeroSection() {
    return (
     <section className="bg-[#f7f3ed]">
      <div className="grid min-h-[75vh] grid-cols-1 lg:grid-cols-2">

        {/* Left side */}
        <div className="flex items-center px-8 py-16 md:px-14 lg:px-20">
          <div className="max-w-xl">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-neutral-600">
              Fashion Designer & Textile Artist
            </p>

            <h1 className="text-5xl leading-[1.05] text-neutral-900 md:text-6xl lg:text-7xl">
              Creating textiles
              <br />
              with <em>soul, texture</em>
              <br />
              and timeless
              <br />
              craftsmanship.
            </h1>

            <Link
              href="/projects"
              className="mt-10 inline-block border-b border-black pb-1 text-sm uppercase tracking-[0.18em] transition-opacity hover:opacity-50"
            >
              View Work
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="relative min-h-[500px] lg:min-h-full">
          <img
            src="/assets/Images/HandBag_1.jpg"
            alt="Handcrafted textile work by Justina Smith"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

      </div>
    </section>


    );
}