import React from 'react';

export const ContactForm = () => {
  return (
    <div className="text-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold mb-4 title">SEND US A MESSAGE</h2>
          <p className="text-lg opacity-70">
            Fill out the form below to get in touch with us. We will get back
            to you as soon as possible.
          </p>
        </div>
        <div className="flex justify-center">
          <form className="w-full  space-y-6 px-4 ">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <label htmlFor="name" className="block text-black text-lg mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="email" className="block text-black text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-black text-lg mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full p-3 bg-white text-black rounded-lg border border-gray-300 focus:outline-none focus:border-black"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
