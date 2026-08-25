import ImageGrid from "@/components/ImageGrid";


const handbagImages = [
        "/assets/Images/HandBag_1.jpg",
        "/assets/Images/HandBag_2.jpg",
        "/assets/Images/HandBag_3.jpg",
        "/assets/Images/HandBag_4.jpg",
        "/assets/Images/HandBag_5.jpg",
        "/assets/Images/HandBag_6.jpg",
        
      ];
      
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
