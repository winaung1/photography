import React from "react";
import { Banner } from "../About/Banner";

export const FeaturedWorkSection = () => {
  return (
    <div className="bg-dark pb-10">
      <Banner
        title={"Featured Works"}
        img={
          "https://images.pexels.com/photos/2877375/pexels-photo-2877375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <div className="text-white px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
        <h1 className="title text-4xl green">Featured Works</h1>
        <div className="md:w-[60%]">
          <p className="opacity-60 pt-4 md:pt-0 text-xl">
            Discover our curated collection of featured works, showcasing the
            best of our creative and professional endeavors. Each project
            highlights our commitment to excellence and innovation, from
            stunning visual designs to impactful campaigns. Explore these works
            to see our dedication to pushing boundaries, delivering high-quality
            results, and making a difference in our industry. Whether you're
            looking for inspiration or evaluating our capabilities, our featured
            works provide a comprehensive look at what we can achieve.
          </p>
        </div>
      </div>
    </div>
  );
};
