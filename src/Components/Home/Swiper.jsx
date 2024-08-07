import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const slides = [
  {
    image:
      "https://images.pexels.com/photos/163872/italy-cala-gonone-air-sky-163872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/176400/pexels-photo-176400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    image:
      "https://images.pexels.com/photos/3757141/pexels-photo-3757141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const Swiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:space-x-4 pt-4">
      <div className="md:w-1/2 relative swiper-container">
        <img
          className="rounded-2xl w-full h-96 object-cover"
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
        />
        <div className="absolute bottom-4 left-10">
          <div className="flex items-center space-x-1">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-2 rounded-2xl ${
                  currentIndex === index ? "bg-yellow-300" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center space-x-6 pt-4">
            <button onClick={handlePrev}>
              <FaArrowLeft className="text-3xl" />
            </button>
            <button onClick={handleNext}>
              <FaArrowRight className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="border h-72 md:h-96 mt-4 md:mt-0 w-full md:w-1/2 rounded-2xl p-4 bg-white/10 border-white/30 backdrop-blur-lg relative">
        <div className="bg-green-400/40 w-40 h-40 rounded-full blur-3xl absolute top-10 -z-10"/>
        <div className="flex items-center">
          <div className="flex">
            <img
              className="w-8 h-8 object-cover border rounded-full"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Client"
            />
            <img
              className="w-8 h-8 -translate-x-3 object-cover border rounded-full"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Client"
            />
            <img
              className="w-8 h-8 -translate-x-6 object-cover border rounded-full"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Client"
            />
          </div>
          <div className="green">
            <h1 className="text-2xl">50+</h1>
            <p className="text-xs">Happy Clients</p>
          </div>
        </div>
        <p className="opacity-60 pt-4">
          We’ve had the pleasure of working with over 50 happy clients, delivering exceptional results with each project. Our commitment to quality and client satisfaction is what sets us apart.
        </p>
        <a href="/contact" className="cursor-pointer flex items-center space-x-2 border px-4 py-1 rounded-full absolute bottom-6 border-gray-600 backdrop-blur-md">
          <p>Let's Talk</p>
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};
