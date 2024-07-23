import React from 'react'
import { motion } from 'framer-motion'

export const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto px-4'>
      <motion.h1
        className='text-6xl md:text-7xl lg:text-9xl xl:text-[150px] title'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        BENJ <span className='green'>DELANQUO</span>
      </motion.h1>
      <motion.h3
        className='opacity-60 text-3xl md:text-5xl py-4 md:leading-[56px]'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        CAPTURING LIFE'S ESSENCE THROUGH LENS
      </motion.h3>
    </div>
  )
}
