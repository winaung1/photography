import React from "react";

export const Projects = () => {
  return (
    <div className="py-10 px-4 max-w-7xl mx-auto text-center">
      <div>
        <h1 className="title text-4xl">PROJECTS</h1>
        <h3 className="pt-2 opacity-60">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          suscipit consectetur sunt animi. Quia beatae molestiae quaerat
          possimus doloremque fugiat sequi eius dolore ipsum, blanditiis
          dignissimos. Accusantium deleniti illum incidunt!
        </h3>
      </div>
      <div className="pt-4 grid grid-cols-3 gap-4">
        <img
          className="rounded-xl object-cover col-span-2 md:col-span-1 row-span-1 h-60 w-full"
          src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg"
          alt="Project 1"
        />
        <img
          className="rounded-xl object-cover col-span-2 md:col-span-1 row-span-1 h-60 w-full"
          src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project 2"
        />

        <img
          className="rounded-xl object-cover col-span-1 md:row-span-2 h-full w-full"
          src="https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project 4"
        />
        <img
          className="rounded-xl object-cover col-span-3 md:col-span-2 row-span-1 h-60 w-full"
          src="https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Project 5"
        />
        <img
          className="rounded-xl object-cover col-span-4 row-span-1 h-60 w-full"
          src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg"
          alt="Project 6"
        />
      </div>
    </div>
  );
};
