import React from "react";

export const FeaturedBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Beauty of Nature",
      description:
        "Join us on a journey to explore the most beautiful natural landscapes around the world. From majestic mountains to serene lakes, discover the wonders of nature.",
      image:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    },
    {
      id: 2,
      title: "Exploring the Beauty of Nature",
      description:
        "Join us on a journey to explore the most beautiful natural landscapes around the world. From majestic mountains to serene lakes, discover the wonders of nature.",
      image:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    },
    {
      id: 3,
      title: "Exploring the Beauty of Nature",
      description:
        "Join us on a journey to explore the most beautiful natural landscapes around the world. From majestic mountains to serene lakes, discover the wonders of nature.",
      image:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    },
    {
      id: 4,
      title: "Exploring the Beauty of Nature",
      description:
        "Join us on a journey to explore the most beautiful natural landscapes around the world. From majestic mountains to serene lakes, discover the wonders of nature.",
      image:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    },
    {
      id: 5,
      title: "Exploring the Beauty of Nature",
      description:
        "Join us on a journey to explore the most beautiful natural landscapes around the world. From majestic mountains to serene lakes, discover the wonders of nature.",
      image:
        "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
    },
 
  ]

  return (
    <div className="py-14 px-4 max-w-7xl mx-auto ">
      <h1 className="title text-4xl text-center md:text-left">FEATURED BLOG</h1>
      <p className="opacity-60 md:w-3/4 text-center md:text-left">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iure
        sapiente hic nesciunt sed quam possimus ullam delectus architecto atque,
        eveniet vero dolor voluptatem minus voluptates nihil et omnis debitis.
      </p>

      <div className="pt-4 md:flex md:space-x-4">
        <div className="">
          <img
            className="rounded-xl"
            src="https://images.pexels.com/photos/1480807/pexels-photo-1480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <h1 className="font-bold pt-2">
            THE ART OF SEEING PERSPECTIVE IN PHOTOGRAPH
          </h1>
          <p className="opacity-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            tenetur odit officiis atque dicta eveniet dignissimos impedit
            adipisci modi nulla sed recusandae, vitae nihil. Id ipsam tempora
            modi sapiente ducimus?
          </p>

          <div className="flex items-center space-x-2 pt-4">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div>
              <h1 className="font-semibold">LORRY JAMES</h1>
              <p className="opacity-60">Author</p>
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-0">
          {blogPosts.map((blogPost) => (
            <div key={blogPost.id} className="flex space-x-4">
                <div className="w-80 h-20 mb-3">

              <img
                className=" w-full h-full object-cover rounded-xl"
                src={blogPost.image}
                alt=""
                />
                </div>
              <div className="">
                <h1 className="font-semibold uppercase line-clamp-1">
                  {blogPost.title}
                </h1>
                <p className="opacity-60 line-clamp-2">
                  {blogPost.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
