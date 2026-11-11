import React from 'react'
import {company_logos} from '../assets/assets'
import { motion as Motion } from "motion/react"

const TrustedBy = () => {
  return (
    <Motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
      <Motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      className='font-semibold'>Trusted by Leading Companies</Motion.h3>

      <Motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      className='grid w-full max-w-4xl grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5'>
        {company_logos.map((logo, index)=>(
            <Motion.img 
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
            key={index} src={logo} alt="" className='mx-auto h-6 w-auto max-w-full object-contain dark:drop-shadow-xl'/>
        ))}
      </Motion.div>
    </Motion.div>
  )
}

export default TrustedBy
