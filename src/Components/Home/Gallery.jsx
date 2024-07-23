import React from "react";

export const Gallery = () => {
  return (
    <div className="py-5 px-4 max-w-7xl mx-auto text-center pb-20 pt-14">
      <h1 className="title text-4xl">CAPTURING LIFE'S INTIMATE MOMENTS</h1>
      <h3 className="pt-2 opacity-60">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        suscipit consectetur sunt animi. Quia beatae molestiae quaerat possimus
        doloremque fugiat sequi eius dolore ipsum, blanditiis dignissimos.
        Accusantium deleniti illum incidunt!
      </h3>
      <div className="overflow-x-scroll flex space-x-4 pt-10 hide-scrollbar">
        <img className="h-60 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className="h-64 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/831890/pexels-photo-831890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className="h-80 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className="h-64 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/1199607/pexels-photo-1199607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img className="h-60 w-full object-cover rounded-xl" src="https://images.pexels.com/photos/323260/pexels-photo-323260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  );
};
