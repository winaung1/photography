import React from 'react'
import { Banner } from '../About/Banner'

export const ProjectSection = () => {
  return (
    <div className='bg-dark pb-10'>
    <Banner title={'Projects'} img={'https://images.pexels.com/photos/822528/pexels-photo-822528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
    <div className="text-white px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
      <h1 className="title text-4xl green">Projects</h1>
      <div className="md:w-[60%]">
        <p className="opacity-60 pt-4 md:pt-0 text-xl">
          Welcome to our blog section, where we share insights, stories, and tips on various topics. Whether you're looking for travel inspiration, culinary delights, or wellness advice, we've got you covered. Dive into our articles to explore new ideas, learn from experts, and get inspired to enhance your lifestyle. Each post is crafted to provide valuable information and thoughtful perspectives, making our blog a go-to resource for curious minds.
        </p>
      </div>
    </div>
  </div>
  )
}
