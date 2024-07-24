import React from "react";
import { Banner } from "./Banner";

export const AboutSection = () => {
  return (
    <div className="bg-dark pb-10">
      <Banner
        title={"About Us"}
        img={
          "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <div className="text-white px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
        <h1 className="title text-4xl green">About Us</h1>
        <div className="md:w-[60%]">
          <p className="opacity-60 pt-4 md:pt-0 text-xl">
            Welcome to our world where creativity meets innovation. At our core,
            we are a team dedicated to pushing boundaries and delivering
            exceptional results. Our journey began with a vision to create
            impactful solutions that resonate with our audience and stand the
            test of time. Through our passion for design and technology, we
            craft experiences that are not only visually stunning but also
            functional and meaningful. Explore our story, values, and commitment
            to excellence as we continue to shape the future with our unique
            approach and unwavering dedication.
          </p>
        </div>
      </div>
    </div>
  );
};
