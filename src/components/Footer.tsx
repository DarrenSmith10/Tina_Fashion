import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Footer() {
    return (
      <div className="flex justify-center items-center flex-col bg-gray-100 py-8 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-4">Connect with me on the platforms below: 
          </p>
        <p> <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:justinasmith@onetel.com" className="hover:text-red-500 transition">
            <FaEnvelope />
          </a>
          </p>
        <div className="flex justify-center gap-6 text-2xl text-gray-600">
          <p>
  Designed & developed by{" "}
  <a
    href="https://darrensmith10.github.io/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-800 underline-offset-4 transition-opacity hover:opacity-50 hover:underline"
  >
    Darren Smith
  </a>
</p>
        </div>
        
      </div>
    );
}