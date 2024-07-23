import React from "react";
import { CiCamera } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";
import { HiOutlinePaintBrush } from "react-icons/hi2";

export const Services = () => {
  const services = [
    { icon: <CiCamera />, title: "Portrait Photography" },
    { icon: <GiSparkles />, title: "Event Coverage" },
    { icon: <HiOutlinePaintBrush />, title: "Fine Arts Prints" },
  ];

  return (
    <div className="bg-dark text-white">
      <div className="py-20 px-4 max-w-7xl mx-auto text-center lg:text-left lg:flex lg:space-x-10 justify-between">
        <div className="lg:w-1/2 hidden lg:block">
          <img
            className="rounded-xl h-96 w-full object-cover"
            src="https://images.pexels.com/photos/707408/pexels-photo-707408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Professional Services"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="title text-4xl">Signature Services</h1>
          <p className="opacity-60 pt-4 md:pt-0">
            Discover our range of bespoke services designed to meet your needs with precision and artistry. Each service is crafted to offer a unique experience, ensuring exceptional quality and customer satisfaction. Whether you're looking for professional photography or stunning fine art prints, our offerings are tailored to exceed your expectations.
          </p>

          <div className="lg:w-1/2 block lg:hidden pt-10">
            <img
              className="rounded-xl h-96 w-full object-cover"
              src="https://images.pexels.com/photos/707408/pexels-photo-707408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Professional Services"
            />
          </div>

          <h1 className="text-2xl pt-10 md:pt-20">Our Services</h1>
          <div>
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between space-x-4 border-b w-full border-gray-600 opacity-60">
                <div className="flex items-center space-x-4 py-4">
                  <div className="text-xl text-green-500">{service.icon}</div>
                  <p>{service.title}</p>
                </div>
                <FiArrowRight />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
