import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from "next/link";

export default function LetsConnect() {
  return (
    <section className="bg-[#f7f3ed] px-4 pb-16 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">

        <div className="grid grid-cols-1 overflow-hidden border border-neutral-200 bg-[#f2ede5] lg:grid-cols-12">

          {/* Left - heading */}
          <div className="flex items-center px-8 py-14 md:px-12 lg:col-span-6 lg:py-20">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
                Let&apos;s Connect
              </p>

              <h2 className="max-w-xl text-3xl leading-tight md:text-4xl lg:text-5xl">
                For more enquiries about my work, please get in touch.
              </h2>
            </div>
          </div>

          {/* Middle - contact details */}
          <div className="flex items-center px-8 pb-14 md:px-12 lg:col-span-3 lg:py-20">
            <div>
              
            
              


              <Link
                href="/contact"
                className="inline-block border-b border-neutral-900 pb-1 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-50"
              >
                Contact Me →
              </Link>
            </div>
          </div>

          {/* Right - textile image */}
          <div className="min-h-[280px] lg:col-span-3">
            <img
              src="/assets/Images/Textiles_13.jpg"
              alt="Detail of Tina's textile work"
              className="h-full w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}