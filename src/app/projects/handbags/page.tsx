import ImageGrid from "@/components/ImageGrid";


const handbagImages: string[] = [];
for (let i = 1; i <= 13; i++) {
  handbagImages.push(`/assets/Images/HandBag_${i}.jpg`);
}

export default function HandbagsProject() {
  return (
   <main className="bg-[#f7f3ed] text-neutral-900">

      {/* Your existing handbag content */}

      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-[1500px]">

          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-neutral-500">
            Explore the Collection
          </p>

          <ImageGrid images={handbagImages} />

        </div>
      </section>

    </main>
  );
}
