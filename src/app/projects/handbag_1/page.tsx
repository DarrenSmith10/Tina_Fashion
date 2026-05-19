import Image from 'next/image';
export default function HandbagsProject() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">Handbags Collection</h1>
      <p className="text-lg text-gray-600">A variety of handbags for everyday use.</p>
      <Image
        src="/assets/Images/handbag_1.jpeg"
        width={400}
        height={200}
        alt="Handbags"
        className="mt-6 w-full rounded shadow"
      />
    </main>
  );
}
