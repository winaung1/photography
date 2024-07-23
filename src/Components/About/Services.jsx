import React from "react";
import { CiCamera } from "react-icons/ci";
import { FiArrowRight } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
export const Services = () => {
  const services = [
    { icon: <CiCamera />, title: "Portait Photography" },
    { icon: <GiSparkles />, title: "Event Coverage" },
    { icon: <HiOutlinePaintBrush />, title: "Fine Arts Prints" },
  ];
  return (
    <div className="bg-dark text-white">
      <div className="py-20 px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-10 justify-between">
        <div className="md:w-[60%] hidden md:block">
          <img
            className="rounded-xl h-96 w-full object-cover"
            src="https://images.pexels.com/photos/447329/pexels-photo-447329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h1 className="title text-4xl">MY BEST SIGNATURE SERVICES</h1>
          <p className="opacity-60 pt-4 md:pt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid ipsa nesciunt nemo deleniti aperiam delectus
            itaque, consequuntur, natus aspernatur dignissimos autem tempore
          </p>

          <div className="md:w-[60%] block md:hidden pt-10">
          <img
            className="rounded-xl h-96 w-full object-cover"
            src="https://images.pexels.com/photos/447329/pexels-photo-447329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

          <h1 className="text-2xl pt-10 md:pt-20">MY SERVICES</h1>
          <div>
            {services.map((service) => (
              <div className="flex items-center justify-between space-x-4  border-b w-full border-gray-600 opacity-60">
                <div className="flex items-center space-x-4 py-4">
                  <div className="text-xl green">{service.icon}</div>
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
