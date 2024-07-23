import React from "react";
import { Banner } from "../Components/Home/Banner";
import { Swiper } from "../Components/Home/Swiper";
import { About } from "../Components/Home/About";
import { FeaturedWorks } from "../Components/Home/FeaturedWorks";
import { Gallery } from "../Components/Home/Gallery";
import { Testimonials } from "../Components/Home/Testimonials";
import { Projects } from "../Components/Home/Projects";

export const Home = () => {
  return (
    <div>
      <div className="py-14  bg-dark text-white">
        <Banner />
        <Swiper />
      </div>
      <About/>
      <FeaturedWorks/>
      <Gallery/>
      <Testimonials/>
      <Projects/>
    </div>
  );
};
