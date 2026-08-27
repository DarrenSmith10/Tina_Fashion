import Link from "next/link";

export default function SelectedWork() {
  return (
    <section className="bg-[#f7f3ed] px-4 py-20 md:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">

        {/* Heading */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
              Portfolio
            </p>

            <h2 className="mt-2 text-4xl text-neutral-900 md:text-5xl">
              Selected Work
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden border-b border-neutral-900 pb-1 text-xs uppercase tracking-[0.18em] transition-opacity hover:opacity-50 md:block"
          >
            View All Projects →
          </Link>
        </div>

        {/* First row */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

          {/* Textiles */}
          <Link
            href="/projects/textiles"
            className="group lg:col-span-7"
          >
            <div className="h-[500px] overflow-hidden bg-neutral-200 lg:h-[600px]">
              <img
                src="/assets/Images/Textiles_1.jpg"
                alt="Textile surface design by Justina Smith"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl text-neutral-900">
                  Textiles
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Surface Design
                </p>
              </div>

              <span className="text-sm text-neutral-400">
                01
              </span>
            </div>
          </Link>

          {/* Handbags */}
          <Link
  href="/projects/handbags"
 className="group lg:col-span-5"
>
            <div className="h-[500px] overflow-hidden bg-neutral-200 lg:h-[600px]">
              <img
                src="/assets/Images/HandBag_1.jpg"
                alt="Handcrafted handbag by Justina Smith"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl text-neutral-900">
                  Handbags
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Handcrafted Collection
                </p>
              </div>

              <span className="text-sm text-neutral-400">
                02
              </span>
            </div>
          </Link>

        </div>
        
        {/* Second row */}
        {/* }
        
        {/* Mobile View All */}
        <div className="mt-12 md:hidden">
          <Link
            href="/projects"
            className="border-b border-neutral-900 pb-1 text-xs uppercase tracking-[0.18em]"
          >
            View All Projects →
          </Link>
        </div>

      </div>
    </section>
  );
}