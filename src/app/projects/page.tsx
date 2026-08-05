'use client';
import Link from 'next/link';
import Image from 'next/image';


export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Textiles Project */}
          <Link href="/projects/textiles_1">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Textiles 1</h2>
              <p className="text-gray-600">Showcasing various textile designs and patterns.</p>
              <Image
                src="/assets/Images/Textiles_1.jpg"
                alt="Textiles"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

          {/* Textiles Project 2 */}
          <Link href="/projects/textiles_2">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Textiles 2</h2>
              <p className="text-gray-600">Showcasing various textile designs and patterns.</p>
              <Image
                src="/assets/Images/Textiles_2.jpg"
                alt="Textiles"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

          {/* Textiles Project_3 */}
          <Link href="/projects/textiles_3">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Textiles 3</h2>
              <p className="text-gray-600">Showcasing various textile designs and patterns.</p>
              <Image
                src="/assets/Images/Textiles_3.jpg"
                alt="Textiles"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>


          {/* HandBag Project_1 */}
          <Link href="/projects/handbag_1">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">HandBag 1</h2>
              <p className="text-gray-600">Showcasing various handbag designs and patterns.</p>
              <Image
                src="/assets/Images/HandBag_1.jpg"
                alt="HandBag"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

          {/* HandBag Project_2 */}
          <Link href="/projects/handbag_2">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">HandBag 2</h2>
              <p className="text-gray-600">Showcasing various handbag designs and patterns.</p>
              <Image
                src="/assets/Images/HandBag_2.jpg"
                alt="HandBag"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>


          {/* HandBag Project_3 */}
          <Link href="/projects/handbag_3">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">HandBag 3</h2>
              <p className="text-gray-600">Showcasing various handbag designs and patterns.</p>
              <Image
                src="/assets/Images/HandBag_3.jpg"
                alt="HandBag"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

        

      </div>
    </main>
  );
}
