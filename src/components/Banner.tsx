"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Banner({ isAdmin }: { isAdmin: boolean }) {
  const router = useRouter();
  const images = ["/img/cover1.jpg", "/img/cover2.jpg", "/img/cover3.jpg"];
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
      {isAdmin && (
        <button
          className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent"
          onClick={(e) => {
            e.stopPropagation();
            router.push("/admin");
          }}
        >
          Admin Restaurant Console
        </button>
      )}
    </div>
  );
}
