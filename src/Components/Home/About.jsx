import React from "react";

export const About = () => {
  return (
    <>
      <div className="py-14 px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
        <h1 className="title text-4xl">About Me</h1>
        <div className="md:w-[60%]">
          <p className="opacity-60 pt-4 md:pt-0">
            I am a passionate photographer with a love for capturing life's most memorable moments. With years of experience in portrait and event photography, I strive to create images that tell a story and evoke emotion. My journey in photography has been driven by a desire to explore the world through my lens, and I am dedicated to providing high-quality, creative solutions tailored to each client's needs. Whether it's a special event or a personal portrait session, I am committed to delivering stunning results that exceed expectations.
          </p>
        </div>
      </div>
      <div className="pt-4 flex hide-scrollbar overflow-x-scroll md:grid md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        <img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/2198947/pexels-photo-2198947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Portrait Photography"
        />
        <img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Event Photography"
        />
        <img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1878482/pexels-photo-1878482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Artistic Photography"
        />
      </div>
    </>
  );
};
