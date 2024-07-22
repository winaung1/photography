import React from "react";

export const About = () => {
  return (
    <>
      <div className="py-14 px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
        <h1 className="title text-4xl">ABOUT ME</h1>
        <div className="md:w-[60%]">
          <p className="opacity-60 pt-4 md:pt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem aliquid ipsa nesciunt nemo deleniti aperiam delectus
            itaque, consequuntur, natus aspernatur dignissimos autem tempore
            labore necessitatibus assumenda consectetur hic eaque porro. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            aliquid ipsa nesciunt nemo deleniti aperiam delectus itaque,
            consequuntur, natus aspernatur dignissimos autem tempore labore
            necessitatibus assumenda consectetur hic eaque porro.
          </p>
        </div>
      </div>
      <div className="pt-4 flex hide-scrollbar overflow-x-scroll md:grid md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        <img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1998439/pexels-photo-1998439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1122413/pexels-photo-1122413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <img
          className="w-80 md:w-full h-80 object-cover rounded-2xl"
          src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </>
  );
};
