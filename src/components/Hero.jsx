import React from 'react'
import assets from '../assets/assets'
import { motion as Motion } from "motion/react"

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

        <Motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.02 }}
        viewport={{ once: true }}
        className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
            <img className='w-20' src={assets.group_profile} alt="" width='80' height='32' decoding='async' />
            <p className='text-xs font-medium'>Trusted by 50+ Growing Businesses Worldwide</p>
        </Motion.div>

        <Motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.08 }}
        viewport={{ once: true }}
        className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl'>Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.</Motion.h1>

        <Motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.14 }}
          viewport={{ once: true }}
        className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>We build websites, AI solutions, digital marketing, branding, and software that help businesses grow.</Motion.p>

        <Motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.2 }}
        viewport={{ once: true }}
        
        className='relative'>
            <img
              src={assets.hero_img}
              alt='Amazonis digital product dashboard preview'
              className='w-full max-w-6xl'
              width='1920'
              height='1056'
              fetchPriority='high'
              decoding='async'
            />
        </Motion.div>
      
    </div>
  )
}

export default Hero
