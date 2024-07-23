import React from "react";

export const Specialist = () => {
  const skills = [
    { item: "Creative Photography" },
    { item: "Outdoor Adventures" },
    { item: "Artistic Painting" },
    { item: "Business Strategy" },
    { item: "Marketing Expertise" },
    { item: "Leadership" },
    { item: "Project Management" },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto text-center lg:text-left lg:flex lg:space-x-10">
      <div className="lg:w-1/2">
        <h1 className="title text-4xl">PASSION MEETS EXPERTISE IN EVERY SHOT</h1>
        <p className="opacity-60 py-3">
          My journey is defined by a blend of creativity and strategic thinking. From capturing stunning visuals to leading impactful projects, each skill I possess contributes to a holistic approach to both art and business. Explore how my diverse expertise shapes every endeavor.
        </p>
        <div className="hidden lg:block pt-10">
          <h1 className="text-2xl">MY AREAS OF EXPERTISE</h1>
          <div className="flex gap-2 flex-wrap my-2">
            {skills.map((skill, index) => (
              <div key={index} className="border px-5 py-2 rounded-full w-fit shrink-0">
                {skill.item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="rounded-xl w-full lg:w-1/2 h-96 object-cover"
        src="https://images.pexels.com/photos/7176291/pexels-photo-7176291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Specialist in Action"
      />
      <div className="lg:hidden pt-4">
        <h1 className="text-2xl">MY AREAS OF EXPERTISE</h1>
        <div className="flex gap-2 flex-wrap my-2">
          {skills.map((skill, index) => (
            <div key={index} className="border px-5 py-2 rounded-full w-fit shrink-0">
              {skill.item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
