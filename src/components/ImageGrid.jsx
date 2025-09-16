export default function ImageGrid() {
    const imageList = [
    "assets/Images/gallery1.jpg",
    "assets/Images/gallery2.jpg",
    "assets/Images/gallery3.jpg",
    "assets/Images/gallery4.jpg"
  ];

    return (
        <div className=" grid gap-4 grid-cols-2 md:grid-cols-4 mt-12">
    {imageList.map((img, i) => (
      <div key={i} className="hero-images relative w-full pt-[100%]">
        <img src={img} className="absolute inset-0 object-cover w-full h-full" alt="" />
      </div>
    ))}
  </div>
     
    );
}