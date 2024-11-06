"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner() {
  const images = ["/img/cover1.jpg", "/img/cover2.jpg","/img/cover3.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-[80vh] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          width={1920}
          height={1080}
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* <div className="absolute bottom-1 left-5">{currentImageIndex}</div> */}
    </div>
  );
}
