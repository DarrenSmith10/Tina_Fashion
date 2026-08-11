import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
export default function Footer() {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-4">Connect with me on the platforms below:</p>

        <div className="flex justify-center gap-6 text-2xl text-gray-600">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:justinasmith@onetel.com" className="hover:text-red-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    );
}