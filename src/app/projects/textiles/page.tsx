import ImageGrid from "@/components/ImageGrid";

const textileImages = [
  "/assets/Images/Textiles_1.jpg",
  "/assets/Images/Textiles_2.jpg",
  "/assets/Images/Textiles_3.jpg",
];

export default function TextilesPage() {
  return (
    <main className="bg-[#f7f3ed] text-neutral-900">

      {/* Your existing textile content */}

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">

          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Explore the Collection
          </p>

          <ImageGrid images={textileImages} />

        </div>
      </section>

    </main>
  );
}