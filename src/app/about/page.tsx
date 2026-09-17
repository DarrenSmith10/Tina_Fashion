import Footer from "../../components/Footer";
import ProfilePic from "../../components/ProfilePic";
import { Pinyon_Script } from "next/font/google";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon-script",
});

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
                I am a textile designer/textile artist. 
                I have always been creative from an early age and when I had a career break, 
                to look after my kids I decided to do a degree in Art and Design 
                and then went on to study Printed Textiles Design at the University of Creative Arts, 
                Farnham.
              </p>

              <p className="text-xl leading-9 text-neutral-700">
                Colour is the driving force behind each one of my designs. 
                I enjoy exploring and experimenting with colour, and I love the results I achieve. 
                I love the freedom and surprise of mixing colours and creating different shades 
                and the uniqueness this can give. 
                My influences have been many from Matisse to Howard Hodgkin and the other bold 
                colourists of the mid-21st century. I am also captivated by natural world and the colours 
                and textures of my surroundings. 
                I use photography to capture this and then extract the shape, 
                form, colour from these by creating patterns to 
                hand screen printed and for colourways.
              </p>

              <p className="text-xl leading-9 text-neutral-700">
                My aim is to produce handmade pieces,
                which are both interesting and unique that signify beauty and pleasure. 
                The pieces are One Offs and are colourful and whimsical. 
                I hand dye the fabrics and screenprint by hand, 
                mixing many tones of the same colour to gives texture. 
                I gradually build up layers of colour and pattern using various textile techniques. 
                Pieces are then completed by embellishing using appliqué, 
                free motion stitching and beading and can then be made into, textile art and handbags.
              </p>

              <p className={`${pinyonScript.className} text-[34px] italic leading-none text-neutral-700}`}>
                Justina Smith
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