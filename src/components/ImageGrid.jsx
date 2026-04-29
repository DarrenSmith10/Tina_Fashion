export default function ImageGrid() {
    const imageList = [
    "assets/Images/HandBag_1.jpg",
    "assets/Images/HandBag_2.jpg",
    "assets/Images/HandBag_3.jpg",
    "assets/Images/HandBag_4.jpg",
    "assets/Images/HandBag_5.jpg",
    "assets/Images/HandBag_6.jpg"
  ];

    return (
        <div className=" grid gap-4 grid-cols-2 md:grid-cols-3 mt-12">
    {imageList.map((img, i) => (
      <div key={i} className="hero-images relative w-full pt-[100%]">
        <img src={img} className="absolute inset-0 object-cover w-full h-full" alt="" />
      </div>
    ))}
  </div>
     
    );
}