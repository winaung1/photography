import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { RiMenu4Fill } from "react-icons/ri";
export const Navbar = () => {
  return (
    <div className='bg-[#121212]'>

    <div className='p-4 flex items-center z-10  max-w-7xl mx-auto justify-between border-b sticky top-0  w-full text-white border-gray-500'>
        <RiMenu4Fill className='green text-3xl lg:hidden'/>
        <ul className='lg:flex items-center space-x-4 hidden'>
            <li className='border border-gray-600 w-fit px-5 py-2 rounded-full'>HOME</li>
            <li className='border border-gray-600 w-fit px-5 py-2 rounded-full'>ABOUT ME</li>
            <li className='border border-gray-600 w-fit px-5 py-2 rounded-full'>FEATURED WORKS</li>
            <li className='border border-gray-600 w-fit px-5 py-2 rounded-full'>PROJECTS</li>
            <li className='border border-gray-600 w-fit px-5 py-2 rounded-full'>BLOGS</li>
        </ul>
        <div className='flex items-center space-x-2 border-b w-fit border-green pb-1'>
            <p>LET'S TALK</p>
            <FiArrowUpRight/>
        </div>
    </div>
    </div>
  )
}
