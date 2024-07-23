import React, { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

export const RecentBlog = () => {
  const blogPosts = Array.from({ length: 140 }, (_, index) => ({
    id: index + 1,
    title: `Blog Post ${index + 1}`,
    description:
      "This is a sample description for the blog post. It provides a brief overview of the blog content.",
    image:
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
  }));

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
    const maxPagesToShow = 2;
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, iure
        sapiente hic nesciunt sed quam possimus ullam delectus architecto atque,
        eveniet vero dolor voluptatem minus voluptates nihil et omnis debitis.
      </p>
      <div className="grid md:grid-cols-3 gap-4 pt-4">
        {currentBlogs.map((blogPost) => (
          <div key={blogPost.id} className="">
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
          </div>
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
