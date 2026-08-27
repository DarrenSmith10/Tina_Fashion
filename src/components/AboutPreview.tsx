import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#f7f3ed] px-4 pb-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12">

        {/* Image */}
        <div className="lg:col-span-4">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="/assets/Images/Textiles_3.jpg"
              alt="Justina working with textile materials"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex items-center bg-[#faf8f4] px-8 py-12 lg:col-span-5 lg:px-12">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-neutral-500">
              About Me
            </p>

            <h2 className="max-w-xl text-3xl leading-tight md:text-4xl">
              Creating meaningful textiles inspired by nature,
              culture and the beauty of handmade.
            </h2>

            <Link
              href="/about"
              className="mt-8 inline-block border-b border-neutral-900 pb-1 text-xs uppercase tracking-[0.15em] transition-opacity hover:opacity-50"
            >
              Read more →
            </Link>
          </div>
        </div>

        {/* Decorative image */}
        <div className="hidden bg-[#f0ece5] lg:col-span-3 lg:block">
          <div className="flex h-full items-center justify-center p-12">
            <img
              src="/assets/Images/Textiles_4.jpg"
              alt="Detail of handmade textile work"
              className="max-h-56 w-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}