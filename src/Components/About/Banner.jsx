import React from "react";

export const Banner = ({ title, img }) => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-10 px-4 ">
        <div className="relative">
          <img
            className="w-full h-40 object-cover rounded-xl"
            src={'https://images.pexels.com/photos/952670/pexels-photo-952670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt=""
          />
          <p className="absolute top-5 left-5 bg-dark border-l-green border-l-2 px-4 py-1 rounded text-white border-l-[#DDF247]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
