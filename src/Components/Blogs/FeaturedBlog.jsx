import React from "react";

export const FeaturedBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Discover the Magic of the Northern Lights",
      description:
        "Experience the awe-inspiring beauty of the Northern Lights. Learn the best places and times to witness this natural phenomenon.",
      image:
        "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
    },
    {
      id: 2,
      title: "A Journey Through Ancient Rome",
      description:
        "Step back in time and explore the rich history of Ancient Rome. Visit iconic landmarks and uncover fascinating stories from the past.",
      image:
        "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg",
    },
    {
      id: 3,
      title: "The Culinary Wonders of Italy",
      description:
        "Indulge in the exquisite flavors of Italian cuisine. Discover traditional recipes and the best places to enjoy authentic Italian dishes.",
      image:
        "https://images.pexels.com/photos/140822/pexels-photo-140822.jpeg",
    },
    {
      id: 4,
      title: "Exploring the Depths of the Ocean",
      description:
        "Dive into the mysterious world beneath the waves. Learn about the incredible marine life and the importance of ocean conservation.",
      image:
        "https://images.pexels.com/photos/3410956/pexels-photo-3410956.jpeg",
    },
    {
      id: 5,
      title: "Adventures in the Amazon Rainforest",
      description:
        "Embark on an adventure through the lush Amazon Rainforest. Discover the diverse wildlife and the importance of preserving this.",
      image:
        "https://images.pexels.com/photos/544900/pexels-photo-544900.jpeg",
    },
  ];

  return (
    <div className="py-14 px-4 max-w-7xl mx-auto ">
      <h1 className="title text-4xl text-center md:text-left">FEATURED BLOG</h1>
      <p className="opacity-60 md:w-3/4 text-center md:text-left">
        Explore our featured blog posts and dive into a world of exciting topics
        and inspiring stories. From travel adventures to culinary delights,
        there's something for everyone.
      </p>

      <div className="pt-4 lg:flex lg:space-x-4">
        <div className="w-full">
          <img
            className="rounded-xl h-96 w-full"
            src="https://images.pexels.com/photos/35600/road-sun-rays-path.jpg"
            alt="The Art of Seeing Perspective in Photography"
          />
          <h1 className="font-bold pt-2">
            THE ART OF SEEING PERSPECTIVE IN PHOTOGRAPHY
          </h1>
          <p className="opacity-60">
            Discover the techniques to capture stunning perspectives in your
            photographs. Learn from experts and elevate your photography skills
            to new heights.
          </p>

          <div className="flex items-center space-x-2 pt-4">
            <img
              className="rounded-full w-10 h-10 object-cover"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Lorry James"
            />
            <div>
              <h1 className="font-semibold">LORRY JAMES</h1>
              <p className="opacity-60">Author</p>
            </div>
          </div>
        </div>
        <div className="pt-4 md:pt-0">
          {blogPosts.map((blogPost) => (
            <div key={blogPost.id} className="flex space-x-4 mb-3">
              <div className="w-80 h-20">
                <img
                  className="w-full h-full object-cover rounded-xl"
                  src={blogPost.image}
                  alt={blogPost.title}
                />
              </div>
              <div>
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
