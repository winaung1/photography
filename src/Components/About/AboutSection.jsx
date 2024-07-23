import React from 'react'
import { Banner } from './Banner'

export const AboutSection = () => {
  return (
    <div className='bg-dark  pb-10'>
        <Banner title={'About Me'} img={'https://images.pexels.com/photos/1547813/pexels-photo-1547813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}/>
        <div className=" text-white px-4 max-w-7xl mx-auto text-center md:text-left md:flex md:space-x-4 justify-between">
        <h1 className="title text-4xl green">ABOUT US</h1>
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
    </div>
  )
}
