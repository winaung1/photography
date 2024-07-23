import React from "react";
import { motion } from "framer-motion";
import { Testimonials } from "../Home/Testimonials";

export const ProjectWork = () => {
  return (
    <>
      {/* Introduction */}
      <div className="py-10 px-4 max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-700 opacity-80">
            Discover some of our most recent and notable projects that showcase
            our commitment to quality and innovation. Each project reflects our
            dedication to creating impactful solutions tailored to our clients'
            needs.
          </h3>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              src: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
              alt: "Project 1",
              span: "col-span-1",
              title: "Modern Office Design",
              description: "A sleek and contemporary office space designed to enhance productivity and comfort.",
            },
            {
              src: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 2",
              span: "col-span-1",
              title: "Urban Landscape",
              description: "A vibrant urban landscape showcasing innovative architecture and design.",
            },
            {
              src: "https://images.pexels.com/photos/1424239/pexels-photo-1424239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 3",
              span: "col-span-1 md:row-span-2",
              title: "Luxury Residential",
              description: "An upscale residential project combining elegance with modern amenities.",
            },
            {
              src: "https://images.pexels.com/photos/321552/pexels-photo-321552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 4",
              span: "col-span-1 md:col-span-2",
              title: "Innovative Tech Hub",
              description: "A cutting-edge tech hub designed to foster creativity and collaboration.",
            },
            {
              src: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
              alt: "Project 5",
              span: "col-span-1",
              title: "Green Park",
              description: "A beautifully landscaped park with sustainable design elements and recreational spaces.",
            },
            {
              src: "https://images.pexels.com/photos/2397654/pexels-photo-2397654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 6",
              span: "col-span-1",
              title: "Beachfront Resort",
              description: "A luxurious beachfront resort offering stunning ocean views and exclusive amenities.",
            },
            {
              src: "https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 7",
              span: "col-span-1 md:row-span-2",
              title: "Art Gallery",
              description: "An elegant art gallery designed to showcase contemporary art in a sophisticated environment.",
            },
            {
              src: "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 8",
              span: "col-span-1 md:col-span-2",
              title: "Modern Restaurant",
              description: "A trendy restaurant combining modern design with a warm and inviting atmosphere.",
            },
            {
              src: "https://images.pexels.com/photos/1046125/pexels-photo-1046125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              alt: "Project 9",
              span: "col-span-1",
              title: "City Library",
              description: "A contemporary city library featuring an open and flexible design for community engagement.",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className={`relative rounded-xl overflow-hidden ${project.span} group`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                className="w-full h-full object-cover"
                src={project.src}
                alt={project.alt}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black opacity-0 group-hover:opacity-90 flex items-center justify-center text-center text-white p-4 transition-opacity duration-300">
                <div>
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Testimonials />
        </div>
      </div>
    </>
  );
};
