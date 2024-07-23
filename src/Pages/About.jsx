import React from "react";
import { AboutSection } from "../Components/About/AboutSection";
import { Specialist } from "../Components/About/Specialist";
import { Services } from "../Components/About/Services";
import {Gallery} from '../Components/Home/Gallery'
export const About = () => {
  return (
    <div>
      <AboutSection />
      <Specialist />
      <Services />
      <Gallery/>
    </div>
  );
};
