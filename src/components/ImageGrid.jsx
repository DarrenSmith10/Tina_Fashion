"use client";

import { useState } from "react";

export default function ImageGrid({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    setSelectedIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <>
      {/* IMAGE GRID */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-square cursor-pointer overflow-hidden"
          >
            <img
              src={img}
              alt={`Portfolio image ${index + 1}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={closeImage}
        >
          {/* CLOSE */}
          <button
            type="button"
            onClick={closeImage}
            className="absolute right-6 top-6 z-20 text-4xl text-white hover:opacity-60"
            aria-label="Close image"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              previousImage();
            }}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 text-4xl text-white hover:opacity-60 md:left-8"
            aria-label="Previous image"
          >
            ←
          </button>

          {/* LARGE IMAGE */}
          <img
            src={images[selectedIndex]}
            alt={`Portfolio image ${selectedIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />

          {/* NEXT */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 text-4xl text-white hover:opacity-60 md:right-8"
            aria-label="Next image"
          >
            →
          </button>

          {/* COUNTER */}
          <p className="absolute bottom-5 text-sm tracking-widest text-white">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}