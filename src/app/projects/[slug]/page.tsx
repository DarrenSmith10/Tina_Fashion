import { projects } from "@/data/projects";


export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-2xl text-red-600">Project not found.</h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 text-lg">{project.description}</p>
      <img
        src={project.image}
        alt={project.title}
        className="mt-6 w-full h-auto rounded shadow"
      />
    </main>
  );
}
