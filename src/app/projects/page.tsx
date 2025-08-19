export default function ProjectsPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <p className="text-gray-700 mb-4">
        Here are some of the projects I&apos;ve worked on recently. Each project showcases my skills in web development and design.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Project One:</strong> A responsive website built with Next.js and Tailwind CSS.
        </li>
        <li>
          <strong>Project Two:</strong> An e-commerce application with a custom backend.
        </li>
        <li>
          <strong>Project Three:</strong> A personal blog platform with user authentication.
        </li>
      </ul>
    </div>
  );
}   