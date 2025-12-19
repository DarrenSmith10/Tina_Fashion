import React from 'react';
import Form from "../../components/ContactForm";


export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-100">

      <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('assets/Images/banner1.jpg')" }}
      ></div>
      {/* add Background image box behind the contact box */}
    <div className="absolute inset-0 bg-black opacity-50"></div>

    <div className='relative z-10 bg-white bg-opacity-90 w-[600px] p-8'>
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-700 mb-4">
        If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on social media.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:TinaFashion@gmail.com" className="text-blue-600 underline">
            TinaFashion@gmail.com
          </a>
        </li>
      </ul>
      <div className="mt-8">
      </div>
      < Form />
      </div>
    </div>
   </main>   
  );
}
