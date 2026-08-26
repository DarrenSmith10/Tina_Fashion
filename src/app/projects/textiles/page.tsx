import ImageGrid from "@/components/ImageGrid";

const textileImages: string[] = [];
for (let i = 1; i <= 25; i++) {
  textileImages.push(`/assets/Images/Textiles_${i}.jpg`);
}

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