import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const RecentBlog = () => {
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
        "Indulge in the exquisite flavors of Italian cuisine. Discover traditional recipes and culinary secrets passed down through generations.",
      image:
        "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg",
    },
    {
      id: 4,
      title: "Exploring the Amazon Rainforest",
      description:
        "Dive into the heart of the Amazon Rainforest. Learn about its diverse ecosystems, unique wildlife, and conservation efforts.",
      image:
        "https://images.pexels.com/photos/1577283/pexels-photo-1577283.jpeg",
    },
    {
      id: 5,
      title: "The Wonders of the Great Barrier Reef",
      description:
        "Discover the vibrant underwater world of the Great Barrier Reef. Explore its stunning coral formations and marine life.",
      image:
        "https://images.pexels.com/photos/3571576/pexels-photo-3571576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Hiking the Rocky Mountains",
      description:
        "Embark on an adventurous hike through the Rocky Mountains. Find the best trails, tips for preparation, and breathtaking viewpoints.",
      image:
        "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogPosts.length / blogsPerPage);

  const handleClick = (pageNumber) => {
    if (pageNumber < 1) {
      setCurrentPage(1);
    } else if (pageNumber > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(pageNumber);
    }
  };

  const getPageNumbers = () => {
    const maxPagesToShow = 6;
    const pages = [];
    const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const currentBlogs = blogPosts.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="py-14 px-4 max-w-7xl mx-auto text-center md:text-left">
      <h1 className="title text-4xl">RECENT BLOG</h1>
      <p className="opacity-60 md:w-3/4">
        Stay updated with our latest blog posts on travel, food, adventure, and nature. Explore new destinations, learn unique recipes, and find inspiration for your next journey.
      </p>
      <div className="grid md:grid-cols-3 gap-4 pt-4">
        {currentBlogs.map((blogPost) => (
          <a href={`/details/${blogPost.id}`} key={blogPost.id} className="">
            <img
              className="w-full h-60 object-cover rounded-xl"
              src={blogPost.image}
              alt={blogPost.title}
            />
            <div className="py-2">
              <h1 className="font-semibold uppercase line-clamp-1">
                {blogPost.title}
              </h1>
              <p className="opacity-60 line-clamp-2">{blogPost.description}</p>
            </div>
            <div className="flex items-center space-x-2 pt-4">
              <img
                className="rounded-full w-10 h-10 object-cover"
                src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Lorry James"
              />
              <div>
                <h1 className="font-semibold">LORRY JAMES</h1>
                <p className="opacity-60 text-left">Author</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 pt-6">
        <button
          className="p-2 rounded-full bg-gray-200 text-black"
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        >
          <FiChevronsLeft />
        </button>
        <button
          className="p-2 rounded-full bg-gray-200 text-black"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FiArrowLeft />
        </button>
        {getPageNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            className={`px-3 py-1 rounded-lg ${currentPage === pageNumber ? 'bg-dark text-white' : 'bg-gray-200 text-black'}`}
            onClick={() => handleClick(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
        {totalPages > getPageNumbers().length && (
          <span className="px-3 py-1">...</span>
        )}
        <button
          className="p-2 rounded-full bg-gray-200 text-black"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <FiArrowRight />
        </button>
        <button
          className="p-2 rounded-full bg-gray-200 text-black"
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};
