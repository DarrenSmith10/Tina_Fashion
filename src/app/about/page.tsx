import Footer from "../../components/Footer";
import ProfilePic from "../../components/ProfilePic";

export default function AboutPage() {
  return (
    <>
      <main className="bg-[#f7f3ed] text-neutral-900">

        {/* Intro */}
        <section className="px-4 py-16 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">
              <p className="mb-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
                About Me
              </p>

              <h1 className="text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
                Colour, texture and handcrafted textile design.
              </h1>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-lg leading-8 text-neutral-600">
                Textile designer exploring printed surfaces, mixed media,
                embroidery and handcrafted accessories.
              </p>
            </div>

          </div>
        </section>

        {/* Profile / hero image */}
        <section className="px-4 md:px-8 lg:px-12">
          <div className="mx-auto max-w-[1500px]">
            <div className="overflow-hidden">
              <ProfilePic />
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-12">

            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                My Story
              </p>
            </div>

            <div className="space-y-8 lg:col-span-7 lg:col-start-5">

              <p className="text-xl leading-9 text-neutral-700">
                I studied Printed Textile Design at UCA Farnham. I am
                obsessed with colour and texture. My influences have been
                many, from Matisse to Hodgkin and the bold colourists of
                the mid-twentieth century.
              </p>

              <p className="text-xl leading-9 text-neutral-700">
                I also explore mixed media, working with silks and textures
                such as leather, linen and wool. These materials have been
                combined in my current collection of handmade bags and
                purses.
              </p>

              <p className="text-xl leading-9 text-neutral-700">
                I use a variety of techniques including silkscreen printing,
                free machine embroidery and hand stitch to individually
                craft each piece. Many designs are further embellished with
                beading and buttons to add individuality and texture.
              </p>

            </div>

          </div>
        </section>

        {/* Philosophy */}
        <section className="border-t border-neutral-300 px-4 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 lg:grid-cols-12">

            <div className="lg:col-span-5">
              <h2 className="text-4xl leading-tight md:text-5xl">
                A love of colour,
                <br />
                texture and making.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-8 text-neutral-600">
                Each piece develops through experimentation with material,
                surface and stitch, allowing the character of the fabric
                and handcrafted details to shape the final design.
              </p>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}