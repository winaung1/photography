import React from "react";

export const Specialist = () => {
  const skills = [
    { item: "Take pictures" },
    { item: "Hiking" },
    { item: "Painting" },
    { item: "Business" },
    { item: "Business" },
    { item: "Business" },
    { item: "Business" },
  ];
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-10">
      <div>
        <h1 className="title text-4xl">TAKING PICTURES ALWAYS HAS MEANING</h1>
        <p className="opacity-60 py-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro nam
          accusantium laudantium ad, commodi sit autem quos consectetur
          voluptates totam sint quo explicabo quae reiciendis alias a. Quisquam,
          ipsa nesciunt.
        </p>
        <div className="hidden md:block pt-10">
          <h1 className="text-2xl">MY SPECIALIST</h1>
          <div className="flex  gap-2 flex-wrap my-2">
            {skills.map((skill) => (
              <div className="border px-5 py-2 rounded-full w-fit shrink-0">
                {skill.item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="rounded-xl w-full h-96 object-cover"
        src="https://images.pexels.com/photos/172067/pexels-photo-172067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
       <div className="md:hidden pt-4">
          <h1 className="text-2xl">MY SPECIALIST</h1>
          <div className="flex gap-2 flex-wrap my-2">
            {skills.map((skill) => (
              <div className="border px-5 py-2 rounded-full w-fit shrink-0">
                {skill.item}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};
