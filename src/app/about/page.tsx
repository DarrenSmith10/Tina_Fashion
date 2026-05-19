import Footer from "../../components/Footer";
import ProfilePic from "../../components/ProfilePic";

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 gap-6">
          
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">Hi, My Name is Tina</h1>
          
          <h2 className="text-xl font-semibold mb-4">Textile Designer</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <ProfilePic />
        </div>
        
      </div>
      {/* add a gap between the profile picture paragrah with Hi my name is Tina */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
        </div>
      <p className="text-gray-700 mb-4">
       I studied Printed Textile design at UCA Farnham.  I am obsessed with colour and texture. influences have been many, from Matisse to Hodgkin and the bold colourists of mid 21st century. 
      </p>
      <p className="text-gray-700 mb-4">
         I also explore with mixed  media working with silks Textures such as leather, linen and wool have been combined in my current collection of handmade bags and purses.
      </p>

      <p className="text-gray-700 mb-4">
        I use a variety of techniques including silkscreen printing, free machine embroidery and hand stitch to individually craft each piece. Many designs are then further embellished with beading and buttons to add individuality and texture.
      </p>
      
      <main>
      <Footer />
      </main>
    </div>
    
  
  );
  
}   