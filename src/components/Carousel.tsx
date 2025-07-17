import React, { useState, useEffect } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

type CarouselProps = {
  images: string[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`transition-opacity duration-700 ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10"
              : "opacity-0 z-0 absolute inset-0"
          }`}
        >
          <img
            src={image}
            alt="Project Images"
            className="w-full aspect-[16/9] rounded-4xl border object-cover transition-transform duration-500"
          />
        </div>
      ))}

      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 white-button p-1.5"
        onClick={prevSlide}
      >
        <MdNavigateBefore size={20} />
      </button>

      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 white-button p-1.5"
        onClick={nextSlide}
      >
        <MdNavigateNext size={20} />
      </button>
    </div>
  );
};

export default Carousel;
