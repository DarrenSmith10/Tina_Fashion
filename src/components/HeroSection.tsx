'use client';
import Image from 'next/image';
export default function HeroSection() {
    return (
    <div className="relative h-screen w-full overflow-hidden">
    <Image
        src="assets/Images/banner1.jpg"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
    <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">Welcome to My Portfolio</h1>
    </div>
  </div>



    );
}