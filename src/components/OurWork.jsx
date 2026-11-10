import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import { motion as Motion } from 'motion/react'

const OurWork = () => {
  const workData = [
    {
      title: 'Dashboard Management',
      category: 'Operations Platform',
      description: 'A clean business dashboard for tracking performance, workflows and daily decisions.',
      image: assets.work_dashboard_management,
    },
    {
      title: 'Fitness App',
      category: 'Mobile Experience',
      description: 'A modern fitness product experience with simple progress tracking and guided flows.',
      image: assets.work_fitness_app,
    },
    {
      title: 'Mobile App',
      category: 'Product Design',
      description: 'A polished mobile interface built for fast navigation and clear user action.',
      image: assets.work_mobile_app,
    },
  ]

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='our-work'
      className='flex flex-col items-center gap-9 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title title='Our work' desc='A look at the digital experiences, apps and platforms we build for real business needs.' />

      <div className='grid w-full max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {workData.map((work, index) => (
          <Motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={work.title}
            className='group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-100 transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20 dark:border-gray-700 dark:bg-gray-900 dark:shadow-white/10'
          >
            <div className='aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800'>
              <img
                src={work.image}
                alt={work.title}
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
                width='640'
                height='434'
                loading='lazy'
                decoding='async'
              />
            </div>

            <div className='p-6'>
              <p className='text-xs font-bold uppercase tracking-[0.18em] text-primary'>
                {work.category}
              </p>
              <h3 className='mt-3 text-2xl font-extrabold text-gray-900 dark:text-white'>
                {work.title}
              </h3>
              <p className='mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400'>
                {work.description}
              </p>
            </div>
          </Motion.article>
        ))}
      </div>

      <Motion.a
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        href='/work'
        className='rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105'
      >
        View all work ↗
      </Motion.a>
    </Motion.div>
  )
}

export default OurWork
