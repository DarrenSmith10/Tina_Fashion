import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <h2 className="mb-2 text-2xl font-semibold text-gray-800">Get in Touch</h2>
      <div className="mb-6 flex items-center justify-center gap-3 text-gray-600">
        <p>Connect with me on the platforms:</p>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-xl transition-opacity hover:opacity-50"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:justinasmith@tinnikadesign.co.uk"
          aria-label="Email"
          className="text-xl transition-opacity hover:opacity-50"
        >
          <FaEnvelope />
        </a>
      </div>

      <div className="mb-4 flex justify-center text-gray-600">
        <p>Designed &amp; developed by Darren Smith</p>
      </div>

      <div className="flex justify-center text-gray-600">
        <p>© 2026 Justina Smith. All rights reserved.</p>
      </div>
    </div>
  );
}
