import React from "react";
import { Banner } from "../About/Banner";
import { useParams } from "react-router-dom";

export const BlogDetails = () => {
  const { id } = useParams();
  return (
    <>
      <div className="bg-dark text-white pb-8">
        <Banner
          title={`Blog - ${id}`}
          img={
            "https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <p className="py-2 opacity-60">19 Jan 2022</p>
          <h1 className="uppercase text-2xl title">
            Exploring the Future of Design: Innovations and Trends
          </h1>
          <div className="flex items-center space-x-2 pt-4">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Lorry James"
            />
            <div>
              <h1 className="font-semibold">Lorry James</h1>
              <p className="opacity-60">Author</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#d3d3d3]">
        <div className="py-8 px-4 max-w-7xl mx-auto">
          <p className="opacity-60">
            The world of design is constantly evolving, driven by new technologies and innovative approaches. Staying ahead of the curve requires a deep understanding of emerging trends and a willingness to embrace change. In this article, we delve into the latest developments that are shaping the future of design.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-8">
          <h1 className="title text-2xl pb-4">Key Trends in Modern Design</h1>
          <div className="md:flex items-center justify-between">
            <div>
              <h1 className="font-semibold">Ordered List</h1>
              <ul className="list-decimal list-inside opacity-60 pt-2">
                <li>Adoption of AI and Machine Learning</li>
                <li>Increased Focus on Sustainability</li>
                <li>Integration of Augmented Reality</li>
              </ul>
            </div>
            <div className="pt-4 md:pt-0">
              <h1 className="font-semibold">Unordered List</h1>
              <ul className="list-disc list-inside opacity-60 pt-2">
                <li>User-Centric Design</li>
                <li>Minimalistic Aesthetics</li>
                <li>Responsive and Adaptive Layouts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-8">
          <h1 className="title text-2xl">Around the World in Eight Years</h1>
          <img
            className="w-full rounded-xl h-80 object-cover mt-4"
            src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Travel Journey"
          />
          <p className="opacity-60 py-2">
            Embark on a journey around the globe, exploring diverse cultures and landscapes. From bustling cityscapes to serene natural wonders, each destination offers a unique perspective on the beauty of our world.
          </p>
          <p className="opacity-60">
            Traveling not only broadens our horizons but also inspires us to create designs that are inclusive and reflective of different cultural influences. Discover how travel experiences can shape and enhance our creative processes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8 lg:flex lg:space-x-4">
          <div className="lg:w-1/2 flex space-x-4 opacity-60 items-center">
            <hr className="bg-[#3d3d3d] w-4 rounded-full h-40" />
            <p>
              Design is not just about aesthetics; it's about creating meaningful experiences that resonate with people. By understanding the needs and preferences of our audience, we can develop solutions that are both functional and emotionally engaging. Embracing diversity in design allows us to connect with a wider range of individuals, making our work more impactful and inclusive.
            </p>
          </div>
          <img
            className="w-full lg:w-1/2 rounded-xl h-80 object-cover mt-4 lg:mt-0"
            src="https://images.pexels.com/photos/130879/pexels-photo-130879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Design Thinking"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-8">
          <h1 className="title text-2xl">Innovative Approaches to Design</h1>
          <img
            className="w-full rounded-xl h-80 object-cover mt-4"
            src="https://images.pexels.com/photos/3722923/pexels-photo-3722923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Innovative Design"
          />
          <p className="opacity-60 py-2">
            In today's fast-paced world, staying innovative is key to success. Whether it's through the use of cutting-edge technologies or adopting new methodologies, innovation drives progress and sets us apart. Learn about the latest approaches that are revolutionizing the design industry and how you can apply them to your work.
          </p>
          <p className="opacity-60">
            From AI-driven design tools to sustainable materials, explore the innovations that are paving the way for a brighter and more sustainable future in design.
          </p>
        </div>
      </div>
    </>
  );
};
