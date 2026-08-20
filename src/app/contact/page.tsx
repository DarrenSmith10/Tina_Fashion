import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ed] px-4 py-16 text-neutral-900 md:px-8 lg:px-12">

      <div className="mx-auto max-w-[1500px]">

        {/* Page label */}
        <p className="mb-10 text-xs uppercase tracking-[0.25em] text-neutral-500">
          Contact
        </p>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* LEFT */}
          <div className="lg:col-span-5">

            <h1 className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Let&apos;s connect and talk
             
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-neutral-600">
              For collaborations, commissions or enquiries about my textile
              and fashion work, please get in touch.
            </p>

            {/* Contact information */}
            <div className="mt-12 border-t border-neutral-300 pt-6">

              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-neutral-500">
                Email
              </p>

              <a
                href="mailto:justinasmith@onetel.com"
                className="text-lg transition-opacity hover:opacity-50"
              >
                justinasmith@onetel.com
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 lg:col-start-7">

            <div className="border-t border-neutral-300 pt-8">
              <ContactForm />
            </div>

          </div>

        </div>

      </div>

    </main>
  );
}