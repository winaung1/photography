import React from 'react';
import { Banner } from '../About/Banner';

export const ContactSection = () => {
  return (
    <div className="bg-dark pb-10">
      <Banner
        title={"Get in Touch"}
        img={
          "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <div className="text-white px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
        <h1 className="title text-4xl green">Contact Us</h1>
        <div className="md:w-[60%]">
          <p className="opacity-60 pt-4 md:pt-0 text-2xl">
            We would love to hear from you! Whether you have questions, need
            assistance, or want to discuss a potential project, our team is
            here to help. Our commitment is to provide exceptional support and
            deliver personalized solutions that meet your needs. Reach out to
            us through the contact form below, or connect with us directly. 
            Let’s start a conversation and explore how we can work together to 
            achieve your goals. Your journey to outstanding results begins here.
          </p>
        </div>
      </div>
    </div>
  );
};
