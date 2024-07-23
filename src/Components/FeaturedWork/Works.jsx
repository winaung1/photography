import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export const Works = () => {
  const works = [
    {
      id: 1,
      title: "Exploring the Beauty of Nature",
      description:
        "Join us on a journey to explore the most beautiful natural landscapes around the world. From majestic mountains to serene lakes, discover the wonders of nature.",
      image:
        "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
      captured: "Captured by John Doe",
    },
    {
      id: 2,
      title: "The Art of Mindfulness",
      description:
        "Learn the art of mindfulness and how it can transform your life. Discover techniques and practices to help you live in the present moment and reduce stress.",
      image:
        "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg",
      captured: "Captured by Jane Smith",
    },
    {
      id: 3,
      title: "Culinary Adventures: A Foodie's Guide",
      description:
        "Embark on a culinary adventure and explore the world of flavors. From street food to gourmet cuisine, get insights into the best places to eat and what to try.",
      image:
        "https://images.pexels.com/photos/5038147/pexels-photo-5038147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      captured: "Captured by Mike Johnson",
    },
    {
      id: 4,
      title: "Tech Innovations: The Future of Technology",
      description:
        "Stay updated with the latest tech innovations and trends. From AI and robotics to sustainable tech, explore how technology is shaping the future.",
      image:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      captured: "Captured by Emily Davis",
    },
    {
      id: 5,
      title: "Travel Guide: Top Destinations for 2024",
      description:
        "Planning your next vacation? Check out our travel guide to the top destinations for 2024. Get tips on what to see, where to stay, and how to make the most of your trip.",
      image:
        "https://images.pexels.com/photos/21014/pexels-photo.jpg",
      captured: "Captured by Chris Lee",
    },
  ];

  return (
    <div className="px-4 max-w-7xl mx-auto py-10 lg:py-20">
      <div className="grid md:grid-cols-2 gap-8 pt-4">
        {works.map((work) => (
          <div key={work.id} className="">
            <div className="py-2">
              <h1 className="font-semibold uppercase line-clamp-1">
                {work.title}
              </h1>
              <p className="opacity-60 line-clamp-2">{work.description}</p>
            </div>
            <img
              className="w-full h-80 my-4 object-cover rounded-xl"
              src={work.image}
              alt={work.title}
            />
            <div className="flex items-center space-x-2 pt-4 justify-between">
              <h1 className="font-semibold">{work.captured}</h1>
              <div className="flex items-center space-x-2 border px-4 py-2 rounded-full">
                <p>View Project</p>
                <FiArrowUpRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
