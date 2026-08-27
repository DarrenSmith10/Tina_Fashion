'use client';
import Link from 'next/link';



const projects = [
  {
    title: 'Surface design',
    category: 'Textiles',
    image: '/assets/Images/Textiles_1.jpg',
    href: '/projects/textiles',
  },
  {
    title: 'Handcrafted accessories',
    category: 'Handbags',
    image: '/assets/Images/HandBag_1.jpg',
    href: '/projects/handbags',
  },

];

export default function ProjectsPage() {
  return (
    <main className="bg-[#f7f3ed] px-4 py-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">

        {/* Header */}
        <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
              Portfolio
            </p>

            <h1 className="text-5xl leading-tight md:text-6xl lg:text-7xl">
              Selected textile,
              <br />
              fashion and surface work.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="text-lg leading-8 text-neutral-600">
              A collection of textile development, handcrafted accessories,
              garment work and pattern exploration.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-12">

          {projects.map((project, index) => {
            const layout =
  index % 4 === 0
    ? "lg:col-span-7"
    : index % 4 === 1
    ? "lg:col-span-5"
    : index % 4 === 2
    ? "lg:col-span-4"
    : "lg:col-span-8";

            

            return (
              <Link
                href={project.href}
                key={project.href}
                className={`group ${layout}`}
              >
                <div className="h-[500px] overflow-hidden bg-neutral-200 lg:h-[600px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl text-neutral-900">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                      {project.category}
                    </p>
                  </div>

                  <span className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </Link>
            );
          })}

        </section>
      </div>
    </main>
  );
}
