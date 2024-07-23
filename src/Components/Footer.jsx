import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="bg-dark text-white py-10 relative md:h-[550px]">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="md:flex justify-between items-center border-b pb-8 border-b-gray-600">
          <div>
            <h1 className="text-4xl title">
              Say <span className="green">Hello</span>
            </h1>
            <p className="pt-2">benj@gmail.com</p>
          </div>
          <div className="mt-4  md:mt-0 flex items-center space-x-2  bg-white px-5 py-2 text-black w-fit rounded-full">
            <p>Let's Talk</p>
            <FiArrowUpRight />
          </div>
        </div>
        <div className="pt-8 md:flex md:space-x-4 justify-between">
          <p className="md:w-[500px] opacity-60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
            voluptate temporibus necessitatibus nobis provident exercitationem
            voluptas odio, optio mollitia. Culpa vel modi ducimus quidem ratione
            nulla autem corrupti rem qui!
          </p>
          <div className="grid grid-cols-2 gap-x-20 lg:grid-cols-3 pt-4 md:py-0">
            <ul className="opacity-60">
              <li>Support</li>
              <li>Tips</li>
              <li>Techniques</li>
              <li>Software</li>
              <li>Contact</li>
            </ul>
            <ul className=" lg:py-0 opacity-60">
              <li>Support</li>
              <li>Tips</li>
              <li>Techniques</li>
              <li>Software</li>
              <li>Contact</li>
            </ul>
            <ul className="opacity-60 pt-4 lg:pt-0">
              <li>Support</li>
              <li>Tips</li>
              <li>Techniques</li>
              <li>Software</li>
              <li>Contact</li>
            </ul>
          </div>

        </div>
          <div className="pt-8 opacity-60 md:flex items-center justify-between">
            <p>Copyright @ 2024 BENJ</p>
            <div className="flex items-center space-x-4 text-4xl md:text-2xl pt-4 md:pt-0">
              <FaTwitter/>
              <FaFacebook/>
              <FaInstagram/>
              <FaYoutube/>
            </div>
          </div>
      </div>
      <h1 className="max-w-7xl mx-auto hidden md:block text-[250px] tracking-widest title text-gray-100 opacity-10 absolute -bottom-0 left-20 italic">BENJ</h1>
    </div>
  );
};
