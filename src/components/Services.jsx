import React from 'react'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion as Motion } from 'motion/react'
import servicesData from '../data/servicesData'

const Services = () => {
  const visibleServices = servicesData.slice(0, 4).map((service) => ({
    ...service,
    description: service.summary || service.description,
  }))

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}

      id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

      <div className='flex flex-col md:grid grid-cols-2'>
        {visibleServices.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <a
          href='/services'
          className='mt-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-white transition-transform hover:scale-105'
        >
          View All Services
        </a>

    </Motion.div>
  )
}

export default Services
