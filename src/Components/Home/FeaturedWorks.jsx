import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ImageCard = ({ src, title, date, isExpanded, onClick }) => {
  return (
    <div className={`relative transition-all duration-300 ${isExpanded ? 'h-80 md:h-[700px]' : 'h-20 md:h-40'} overflow-hidden pt-4`} onClick={onClick}>
      <img
        className="w-full object-cover rounded-xl h-full"
        src={src}
        alt=""
      />
      <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4 z-10">
        <p className="text-white">{title}</p>
        <p className="text-white">{date}</p>
      </div>
    </div>
  );
};

export const FeaturedWorks = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const images = [
    {
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "MARRIED ON THE BEACH",
      date: "MARCH 2024",
    },
    {
      src: "https://images.pexels.com/photos/2253821/pexels-photo-2253821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "ARIEL VIEW OF A BEAUTIFUL BEACH",
      date: "JUNE 2022",
    },
    {
      src: "https://images.pexels.com/photos/2145/sea-sunset-beach-couple.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "BOTTLES UP",
      date: "APRIL 2021",
    },
    {
      src: "https://images.pexels.com/photos/105819/pexels-photo-105819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "DON'T MIND ME, I'M JUST CHILLAX",
      date: "MARCH 2024",
    },
  ];

  return (
    <div className="relative my-10 py-14 px-4 text-white">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/60015/cinque-terre-italy-rocks-sea-60015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(20%)", // Darkens the background image
        }}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="title text-4xl">FEATURED WORKS</h1>
        <div className="title flex flex-wrap items-center space-x-4 pt-2 opacity-70">
          <h2 className="">VISIONS CAPTURED</h2>
          <div className="w-2 h-2 rounded-full bg-white" />
          <h2 className="">MOMENTS FROZEN</h2>
          <div className="w-2 h-2 rounded-full bg-white" />
          <h2 className="">STORIES TOLD THROUGH DANIEL'S LENS.</h2>
        </div>
        <div className="py-4">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              src={image.src}
              title={image.title}
              date={image.date}
              isExpanded={expandedIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="flex items-center space-x-2 bg-white text-black px-5 py-2 rounded-full w-fit mx-auto mt-4">
          <p>Let's Talk</p>
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
};
