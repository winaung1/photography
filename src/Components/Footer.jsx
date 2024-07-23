import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export const Footer = () => {
  return (
    <div className="bg-dark text-white py-10 relative md:h-[550px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="md:flex justify-between items-center border-b pb-8 border-b-gray-600">
          <div>
            <h1 className="text-4xl title">
              Say <span className="green">Hello</span>
            </h1>
            <p className="pt-2">contact@mywebsite.com</p>
          </div>
          <a href="/contact" className="mt-4 md:mt-0 flex items-center space-x-2 bg-white px-5 py-2 text-black w-fit rounded-full">
            <p>Get in Touch</p>
            <FiArrowUpRight />
          </a>
        </div>
        <div className="pt-8 md:flex md:space-x-4 justify-between">
          <p className="md:w-[500px] opacity-60">
            Discover more about our services and how we can help you achieve your goals. From creative projects to professional advice, we are here to support you every step of the way.
          </p>
          <div className="grid grid-cols-2 gap-x-20 lg:grid-cols-3 pt-4 md:py-0">
            <ul className="opacity-60">
              <li><a href="/support">Support</a></li>
              <li><a href="/tips">Tips</a></li>
              <li><a href="/techniques">Techniques</a></li>
              <li><a href="/software">Software</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="lg:py-0 opacity-60">
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
            <ul className="opacity-60 pt-4 lg:pt-0">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 opacity-60 md:flex items-center justify-between">
          <p>Copyright © 2024 MyWebsite</p>
          <div className="flex items-center space-x-4 text-4xl md:text-2xl pt-4 md:pt-0">
            <a href="https://twitter.com/mywebsite" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://facebook.com/mywebsite" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com/mywebsite" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com/mywebsite" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <h1 className="max-w-7xl mx-auto hidden md:block text-[250px] tracking-widest title text-gray-100 opacity-10 absolute -bottom-0 left-20 italic">MYWEBSITE</h1>
    </div>
  );
};
