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
        Tina is a passionate textile designer with a love using colours and painting. 
        With a background in fashion and textile design, she has a keen eye for detail and a unique approach to creating vibrant and innovative designs. Her work is inspired by nature, culture, and the world around her, resulting in captivating patterns and textures that bring life to fabrics.
      </p>
      <p className="text-gray-700">
        In her free time, Tina enjoys exploring latest trends and spreading her creativity. Feel free to connect with her on her email or check out her projects!
      </p>
      
      <main>
      <Footer />
      </main>
    </div>
    
  
  );
  
}   