'use client';
import Link from 'next/link';
import Image from 'next/image';


export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/projects/textiles">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Textiles</h2>
              <p className="text-gray-600">Showcasing various textile designs and patterns.</p>
              <Image
                src="/assets/images/gallery5.jpg"
                alt="Textiles"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects/hats">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Hat</h2>
              <p className="text-gray-600">Hat collection avaiable.</p>
              <Image
                src="/assets/images/gallery7.jpg"
                alt="Textiles"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

          <Link href="/projects/wool">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Wool</h2>
              <p className="text-gray-600">Wool collection avaiable.</p>
              <Image
                src="/assets/images/gallery6.jpg"
                alt="Textiles"
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded mt-4"
              />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>

          <Link href="/projects/scarfs">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">Scarfs</h2>
              <p className="text-gray-600">Scarfs collection avaiable.</p>
              <Image
                src="/assets/images/gallery8.jpg"
                alt="Textiles"
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
