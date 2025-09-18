import React from 'react';
import Form from "../../components/ContactForm";


export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-700 mb-4">
        If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on social media.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:your.email@example.com" className="text-blue-600 underline">
            your.email@example.com
          </a>
        </li>
      </ul>
      <div className="mt-8">
      </div>
      < Form />
    </div>
      
  );
}
