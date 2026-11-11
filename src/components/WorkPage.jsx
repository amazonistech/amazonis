import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'motion/react'
import assets from '../assets/assets'

const categories = ['All projects', 'Web & SaaS', 'AI & automation', 'Digital growth']

const projects = [
  {
    title: 'Venuefy',
    displayTitle: 'Venuefy Event Platform',
    category: 'Web & SaaS',
    image: assets.venuefy_landing_page,
    logo: assets.venuefy_logo,
    website: 'https://venuefy.in/',
    surface: 'bg-[#1d4778]',
  },
  {
    title: 'Slour',
    displayTitle: 'Slour Scheduler',
    category: 'AI & automation',
    image: assets.slour_landing_page,
    logo: assets.slour_logo,
    website: 'https://slour.in/',
    surface: 'bg-[#ff2938]',
  },
  {
    title: 'Amazonis',
    displayTitle: 'Amazonis Digital Experience',
    category: 'Web & SaaS',
    image: assets.amazonis_landing_page,
    logo: assets.logo,
    website: 'https://amazonis.in/',
    surface: 'bg-[#0849c8]',
  },
  {
    title: '3D Wisdom',
    displayTitle: '3D Wisdom Visualization',
    category: 'Web & SaaS',
    image: assets.three_d_landing_page,
    logo: assets.client_3d,
    website: 'https://3dwisdom.in/',
    surface: 'bg-[#675b4d]',
  },
  {
    title: 'Magpie Corporation',
    displayTitle: 'Magpie Corporation',
    category: 'Digital growth',
    image: assets.magpie_landing_page,
    logo: assets.client_magpie_corp,
    website: 'https://magpiecorporation.com/',
    surface: 'bg-[#182657]',
  },
]

const faqs = [
  {
    question: 'What kind of projects does Amazonis build?',
    answer: 'We build business websites, SaaS platforms, mobile apps, AI automations, e-commerce systems and digital growth solutions.',
  },
  {
    question: 'Can you build a product from the initial idea?',
    answer: 'Yes. We can take a product from discovery and interface planning through development, launch and ongoing improvement.',
  },
  {
    question: 'Can you improve an existing website or app?',
    answer: 'Yes. We can modernize the design, repair usability issues, improve performance and add new features without rebuilding everything unnecessarily.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'The timeline depends on scope. After a short discovery call, we share a practical delivery plan with clear milestones.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. Maintenance, hosting, monitoring, updates and product support can continue after the initial launch.',
  },
]

const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const [openFaq, setOpenFaq] = useState(0)

  const visibleProjects = useMemo(
    () => activeCategory === categories[0]
      ? projects
      : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  )

  return (
    <main className='overflow-hidden bg-[#f3f3f1] text-[#0b1324] dark:bg-[#070b14] dark:text-white'>
      <section className='px-4 pb-12 pt-12 sm:px-12 sm:pb-16 sm:pt-16 lg:px-24 xl:px-40'>
        <div className='mx-auto max-w-7xl'>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className='flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700 dark:text-gray-300'
          >
            <span className='h-2 w-2 rounded-full bg-primary' />
            Selected digital work
          </Motion.div>

          <div className='mt-10 grid items-end gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-12 sm:mt-12'>
            <div className='hidden md:block' />
            <div>
              <div className='overflow-hidden'>
                <Motion.h1
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className='text-[clamp(4.5rem,12vw,10.5rem)] font-extrabold leading-[0.82] tracking-[-0.08em]'
                >
                  Work
                </Motion.h1>
              </div>
              <Motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='mt-7 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base'
              >
                Explore digital products and platforms designed around real business goals, clear user journeys and dependable technology.
              </Motion.p>
            </div>
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className='mt-10 flex flex-wrap gap-2 border-t border-black/10 pt-5 dark:border-white/10 sm:mt-14 sm:pt-6'
          >
            {categories.map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type='button'
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-300 sm:px-5 ${
                    isActive
                      ? 'border-primary bg-primary text-white'
                      : 'border-black/10 bg-white/60 text-gray-600 hover:border-primary hover:text-primary dark:border-white/15 dark:bg-white/5 dark:text-gray-300'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </Motion.div>
        </div>
      </section>

      <section className='px-4 pb-12 sm:px-12 lg:px-24 xl:px-40'>
        <Motion.div layout className='mx-auto max-w-7xl space-y-14 sm:space-y-20'>
          <AnimatePresence mode='popLayout'>
            {visibleProjects.map((project, index) => (
              <Motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 45, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.65, delay: Math.min(index * 0.05, 0.3), ease: [0.22, 1, 0.36, 1] }}
                className='space-y-3'
              >
                <div className='grid gap-x-3 gap-y-8 lg:grid-cols-3'>
                  <div className='space-y-4 lg:col-span-2'>
                    <div className={`group relative aspect-[16/10] overflow-hidden rounded-[1.4rem] ${project.surface}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        loading={index > 1 ? 'lazy' : 'eager'}
                        decoding='async'
                        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035] ${
                          project.contain ? 'object-contain p-10 sm:p-16' : 'object-cover'
                        }`}
                      />
                      <div className='absolute left-4 top-4 z-10 grid h-8 w-10 place-items-center rounded-lg bg-white p-1.5 shadow-lg sm:left-6 sm:top-6 sm:h-10 sm:w-12 sm:p-2'>
                        <img src={project.logo} alt={`${project.title} logo`} className='h-full w-full object-contain' />
                      </div>
                      <a
                        href={project.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Visit ${project.title} website`}
                        className='absolute bottom-4 right-4 z-20 grid h-6 w-6 place-items-center rounded-full bg-white text-sm font-bold text-primary shadow-xl transition duration-300 hover:scale-110 hover:bg-primary hover:text-white sm:bottom-6 sm:right-6 sm:h-7 sm:w-7 sm:text-base'
                      >
                        ↗
                      </a>
                    </div>
                    <div className='flex items-start justify-between gap-5 px-1'>
                      <h2 className='text-lg font-extrabold sm:text-2xl'>{project.displayTitle}</h2>
                      <p className='shrink-0 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400'>
                        {project.category}
                      </p>
                    </div>
                  </div>

                  <div className='space-y-4'>
                    <div className={`group relative aspect-[4/5] overflow-hidden rounded-[1.4rem] ${project.surface}`}>
                      <img
                        src={project.image}
                        alt={`${project.title} mobile presentation`}
                        loading='lazy'
                        decoding='async'
                        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                          project.contain ? 'object-contain p-10' : 'object-cover object-center'
                        }`}
                      />
                      <div className='absolute left-4 top-4 z-10 grid h-8 w-10 place-items-center rounded-lg bg-white p-1.5 shadow-lg sm:left-6 sm:top-6 sm:h-10 sm:w-12 sm:p-2'>
                        <img src={project.logo} alt={`${project.title} logo`} className='h-full w-full object-contain' />
                      </div>
                      <a
                        href={project.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={`Visit ${project.title} website`}
                        className='absolute bottom-4 right-4 z-20 grid h-6 w-6 place-items-center rounded-full bg-white text-sm font-bold text-primary shadow-xl transition duration-300 hover:scale-110 hover:bg-primary hover:text-white sm:bottom-6 sm:right-6 sm:h-7 sm:w-7 sm:text-base'
                      >
                        ↗
                      </a>
                    </div>
                    <div className='flex items-start justify-between gap-5 px-1'>
                      <h3 className='text-lg font-extrabold sm:text-2xl'>{project.title} Mobile Version</h3>
                      <p className='shrink-0 pt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-gray-500 dark:text-gray-400'>
                        Mobile apps
                      </p>
                    </div>
                  </div>
                </div>

                <div className='grid gap-3 sm:grid-cols-3'>
                  {['object-left', 'object-center', 'object-right'].map((position, tileIndex) => (
                    <div
                      key={`${project.title}-${position}`}
                      className={`group relative aspect-[4/3] overflow-hidden rounded-[1.2rem] ${project.surface}`}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} detail ${tileIndex + 1}`}
                        loading='lazy'
                        decoding='async'
                        className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.05] ${
                          project.contain ? 'object-contain p-8' : `object-cover ${position}`
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </Motion.article>
            ))}
          </AnimatePresence>
        </Motion.div>
      </section>

      <section className='px-4 py-12 sm:px-12 sm:py-16 lg:px-24 xl:px-40'>
        <div className='mx-auto grid max-w-7xl gap-10 border-t border-black/10 pt-10 dark:border-white/10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:pt-12'>
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className='flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-300'>
              <span className='h-2 w-2 rounded-full bg-primary' />
              Quick answers
            </p>
            <h2 className='mt-7 text-5xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-7xl'>
              Common<br />questions.
            </h2>
          </Motion.div>

          <div className='border-t border-black/15 dark:border-white/15'>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <Motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  key={faq.question}
                  className='border-b border-black/15 dark:border-white/15'
                >
                  <button
                    type='button'
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className='flex w-full items-center justify-between gap-5 py-6 text-left text-sm font-extrabold sm:text-base'
                  >
                    {faq.question}
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-lg transition-transform duration-300 dark:border-white/20 ${isOpen ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <Motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32 }}
                        className='overflow-hidden'
                      >
                        <p className='max-w-2xl pb-7 pr-12 text-sm leading-7 text-gray-600 dark:text-gray-300'>
                          {faq.answer}
                        </p>
                      </Motion.div>
                    )}
                  </AnimatePresence>
                </Motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className='px-4 pb-12 sm:px-12 sm:pb-16 lg:px-24 xl:px-40'>
        <Motion.div
          data-cursor-light
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-primary px-7 py-10 text-white sm:px-12 sm:py-14 md:flex-row md:items-end'
        >
          <div>
            <p className='text-xs font-bold uppercase tracking-[0.2em] text-white/90'>Have a project in mind?</p>
            <h2 className='mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-6xl'>
              Let&apos;s build the next one together.
            </h2>
          </div>
          <a href='/contact' className='shrink-0 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-primary transition-transform hover:scale-105'>
            Start a project ↗
          </a>
        </Motion.div>
      </section>
    </main>
  )
}

export default WorkPage
