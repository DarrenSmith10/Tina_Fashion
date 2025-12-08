'use client';
import Link from 'next/link';
import { projects } from "../../data/projects";


export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="bg-white shadow rounded p-6 hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <img src={project.image} 
              alt={project.title}
              width={500}
              height={300} 
              className="w-full h-48 object-cover mt-4 rounded" />
              <p className="text-gray-600 mt-2">Click to view details →</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
