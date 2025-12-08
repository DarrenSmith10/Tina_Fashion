'use client';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string; // route like "/projects/portfolio"
};

export default function ProjectCard({ title, description, image, slug }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="block">
      <div className="bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="object-cover w-full"
          unoptimized
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
