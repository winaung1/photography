import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { RiMenu4Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = (link) => {
    setActiveItem(link);
  };

  const navItems = [
    { link: "/", title: "HOME" },
    { link: "/about", title: "ABOUT ME" },
    { link: "/featured-works", title: "FEATURED WORKS" },
    { link: "/projects", title: "PROJECTS" },
    { link: "/blogs", title: "BLOGS" },
  ];

  return (
    <div className="bg-dark relative">
       <ul className={showMobileMenu ? "lg:hidden items-center space-x-4 text-white absolute top-20 bg-dark w-full z-50 p-4 transition-all duration-300 ease-linear left-0"  : "lg:hidden items-center space-x-4 text-white absolute top-20 bg-dark w-full z-50 p-4 transition-all duration-300 ease-linear -left-[1000px]"}>
          {navItems.map((item) => (
            <a key={item.link} href={item.link}>
              <li
                className={` w-fit px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  activeItem === item.link
                    ? "bg-green text-black border-none"
                    : "border-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => handleClick(item.link)}
              >
                {item.title}
              </li>
            </a>
          ))}
        </ul>
      <div className="p-4 flex items-center z-10 max-w-7xl mx-auto justify-between border-b sticky top-0 w-full text-white border-gray-500">
        <RiMenu4Fill onClick={() => setShowMobileMenu(!showMobileMenu)} className="cursor-pointer green text-3xl lg:hidden" />
        <ul className="lg:flex items-center space-x-4 hidden" >
          {navItems.map((item) => (
            <a key={item.link} href={item.link}>
              <li
                className={`border w-fit px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                  activeItem === item.link
                    ? "bg-green text-black border-none"
                    : "border-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => handleClick(item.link)}
              >
                {item.title}
              </li>
            </a>
          ))}
        </ul>
        <a href="/contact" className="flex items-center space-x-2 border-b w-fit border-green pb-1">
          <p>LET'S TALK</p>
          <FiArrowUpRight />
        </a>
      </div>
    </div>
  );
};
