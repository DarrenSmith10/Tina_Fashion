'use client';
import Image from 'next/image';
export function HeroSection() {
    return (
    <div className="relative h-screen w-full overflow-hidden">
     {/* add Background image box behind the contact box */}
    <Image
        src="assets/Images/HandBag_6.jpg"
        width={500}
        height={500}
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
    
    <div className="absolute inset-0 bg-black opacity-50">
    

    </div>
   
    <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">Welcome to My Portfolio</h1>
    </div>
  </div>



    );
}