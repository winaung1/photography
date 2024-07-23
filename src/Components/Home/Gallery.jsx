import React from "react";

export const Gallery = () => {
  return (
    <div className="py-5 px-4 max-w-7xl mx-auto text-center pb-20 pt-14">
      <h1 className="title text-4xl">SHOWCASING MOMENTS OF BEAUTY</h1>
      <h3 className="pt-2 opacity-60">
        Discover a curated collection of breathtaking images that capture the essence of beauty and emotion. Each moment tells a unique story, showcasing the rich tapestry of life's most intimate and striking moments.
      </h3>
      <div className="overflow-x-scroll flex space-x-4 pt-10 hide-scrollbar">
        <img className="h-60 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image 1" />
        <img className="h-64 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/5687850/pexels-photo-5687850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image 2" />
        <img className="h-80 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/5471674/pexels-photo-5471674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image 3" />
        <img className="h-64 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/227692/landscape-reflection-waves-ripples-227692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image 4" />
        <img className="h-60 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Gallery Image 5" />
      </div>
    </div>
  );
};
