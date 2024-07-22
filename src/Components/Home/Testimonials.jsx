import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum totam recusandae iusto itaque voluptatum quos. Quas, iusto quasi explicabo dolor debitis earum qui ullam odio magnam ratione quibusdam nemo."`,
    company: "Microsoft",
    name: "James Smith",
    position: "Marketing Manager",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    text: `"Another testimonial text goes here. It provides insight into the customer's experience with the company and their services."`,
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
    <div className="bg-[#121212] text-white py-14 px-4 relative">
      <div className="md:flex md:space-x-4 justify-between max-w-7xl mx-auto">
        <div className="md:w-[60%]">
          <h1 className="title text-4xl">TESTIMONIALS</h1>
          <p className="pt-4">{text}</p>
          <div className="pt-20">
            <h1 className="title text-3xl">{company}</h1>
            <p className="py-2">{name}</p>
            <p className="font-[400] opacity-60">{position}</p>
          </div>
        </div>
        <img
          className="rounded-xl w-full mt-4 md:w-96 h-80 object-cover"
          src={image}
          alt={company}
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


