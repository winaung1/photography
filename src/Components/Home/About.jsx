import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export const About = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    
    // Get the position of the About section
    const aboutSection = document.getElementById("about-section");
    const aboutSectionTop = aboutSection.getBoundingClientRect().top + scrollY;

    // Trigger animation when the section comes into view
    if (scrollY + windowHeight > aboutSectionTop) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.6 } });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger scroll effect on initial load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      <div
        id="about-section"
        className="py-14 px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between"
      >
        <motion.h1
          className="title text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          About Me
        </motion.h1>
        <motion.div
          className="md:w-[60%]"
          initial={{ opacity: 0, x: 20 }}
          animate={controls}
        >
          <p className="opacity-60 pt-4 md:pt-0">
            I am a passionate photographer with a love for capturing life's most memorable moments. With years of experience in portrait and event photography, I strive to create images that tell a story and evoke emotion. My journey in photography has been driven by a desire to explore the world through my lens, and I am dedicated to providing high-quality, creative solutions tailored to each client's needs. Whether it's a special event or a personal portrait session, I am committed to delivering stunning results that exceed expectations.
          </p>
        </motion.div>
      </div>
      <motion.div
        className="pt-4 flex hide-scrollbar overflow-x-scroll md:grid md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <motion.img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/2198947/pexels-photo-2198947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Portrait Photography"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Event Photography"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1878482/pexels-photo-1878482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Artistic Photography"
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
};
