import Image from 'next/image';
export default function ProjectsPage() {
  
  const Portfolioimages = [
    {
      id: 1,
      name: "Project One",
      imageSrc: "assets/Images/gallery5.jpg",
      imageAlt: "Screenshot of Project One",
      description: "A responsive website built with Next.js and Tailwind CSS.",
      link: "https://example.com/project1"
    },
    {
      id: 2,
      name: "Project Two",
      imageSrc: "assets/Images/gallery6.jpg",
      imageAlt: "Screenshot of Project Two",
      description: "An e-commerce application with a custom backend.",
      link: "https://example.com/project2"
    },
    {
      id: 3,
      name: "Project Three",
      imageSrc: "assets/Images/gallery7.jpg",
      imageAlt: "Screenshot of Project Three",
      description: "An e-commerce application with a custom backend.",
      link: "https://example.com/project3"
    },
    {
      id: 4,
      name: "Project Four",
      imageSrc: "assets/Images/gallery8.jpg",
      imageAlt: "Screenshot of Project Four",
      description: "An e-commerce application with a custom backend.",
      link: "https://example.com/project4"
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="text-gray-700 mb-4">
        Here are some of the projects I&apos;ve worked on recently. Each project showcases my skills in web development and design.
      </p>

      <div className="grid gap-4 grid-cols-2 md:grid-cols-2 mt-12">
        {Portfolioimages.map((img) => (
          <div key={img.id} className="w-full h-64 relative border rounded-lg overflow-hidden shadow">
            <a href={img.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <Image
                src={img.imageSrc}
                alt={img.imageAlt}
                width={400}
                height={160}
                className="object-cover w-full h-40"
                loading="lazy"
                unoptimized
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{img.name}</h2>
                <p className="text-gray-700 text-sm mb-2">{img.description}</p>
                <p className="text-sm text-blue-600 underline">View Project</p>
                <span className="text-xs text-gray-400">ID: {img.id}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
      
    </div>
  );
}   