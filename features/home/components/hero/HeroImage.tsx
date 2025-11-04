"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  "/images/heroSlides/slide1.jpg",
  "/images/heroSlides/slide2.jpg",
  "/images/heroSlides/slide3.jpg",
  "/images/heroSlides/slide4.jpg",
  "/images/heroSlides/slide5.jpg",
  "/images/heroSlides/slide6.jpg",
];

function HeroImage() {
  const [imageIndex, setimageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setimageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroSlides.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Hero Slide ${index + 1}`}
          fill
          priority
          className={`object-cover transition-opacity duration-1000 ${
            index === imageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}

export default HeroImage;
