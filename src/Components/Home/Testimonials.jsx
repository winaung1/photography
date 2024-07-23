import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: `"Working with this team has been an incredible experience. Their expertise and dedication to our project were evident throughout. Highly recommended for any business looking to elevate their brand."`,
    company: "Microsoft",
    name: "James Smith",
    position: "Marketing Manager",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    text: `"The attention to detail and customer service provided by this team were outstanding. They delivered results that exceeded our expectations and were a pleasure to work with."`,
    company: "Apple",
    name: "Emily Johnson",
    position: "Product Manager",
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  // Add more testimonials as needed
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const { text, company, name, position, image } = testimonials[currentIndex];

  return (
    <div className="bg-dark text-white py-14 px-4 relative">
      <div className="md:flex md:space-x-4 justify-between max-w-7xl mx-auto">
        <div className="md:w-[60%]">
          <h1 className="title text-4xl">What Our Clients Say</h1>
          <p className="pt-4 text-2xl pr-20">{text}</p>
          <div className="pt-12">
            <h1 className="title text-3xl">{company}</h1>
            <p className="py-2 text-xl font-semibold">{name}</p>
            <p className="font-medium opacity-60">{position}</p>
          </div>
        </div>
        <img
          className="rounded-xl w-full mt-4 md:w-96 h-80 object-cover"
          src={image}
          alt={`${name} from ${company}`}
        />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-6 h-2 rounded-2xl ${
              currentIndex === index ? "bg-[#DDF247]" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
