import React, { useMemo, useState } from 'react'
import { AnimatePresence, motion as Motion } from 'motion/react'
import assets from '../assets/assets'

const categories = ['All projects', 'Web & SaaS', 'Mobile apps', 'AI & automation', 'Digital growth']

const projects = [
  {
    title: 'Inphra Operations Suite',
    category: 'Web & SaaS',
    image: assets.work_dashboard_management,
    logo: assets.inphra_logo,
    layout: 'lg:col-span-8',
    ratio: 'aspect-[16/10]',
    surface: 'from-[#dbe8ff] via-white to-[#a9c7ff]',
    position: 'object-center',
  },
  {
    title: 'Slour Mobile Experience',
    category: 'Mobile apps',
    image: assets.work_mobile_app,
    logo: assets.slour_logo,
    layout: 'lg:col-span-4',
    ratio: 'aspect-[4/5] lg:aspect-auto lg:h-full',
    surface: 'from-[#e8efff] via-[#cfdcff] to-[#98b5ff]',
    position: 'object-center',
  },
  {
    title: 'Venuefy Event Platform',
    category: 'Web & SaaS',
    image: assets.bgImage1,
    logo: assets.venuefy_logo,
    layout: 'lg:col-span-4',
    ratio: 'aspect-[4/5]',
    surface: 'from-[#fff3e9] via-white to-[#dbe8ff]',
    position: 'object-center',
  },
  {
    title: 'Fitness Companion',
    category: 'Mobile apps',
    image: assets.work_fitness_app,
    layout: 'lg:col-span-4',
    ratio: 'aspect-[4/5]',
    surface: 'from-[#e7efff] via-[#f9fbff] to-[#b7cbff]',
    position: 'object-center',
  },
  {
    title: 'AI Workflow Systems',
    category: 'AI & automation',
    image: assets.hero_img,
    layout: 'lg:col-span-4',
    ratio: 'aspect-[4/5]',
    surface: 'from-[#dfe8ff] via-[#f5f8ff] to-[#b6c9ff]',
    position: 'object-center',
  },
  {
    title: 'Commerce Command Center',
    category: 'Web & SaaS',
    image: assets.bgImage2,
    layout: 'lg:col-span-8',
    ratio: 'aspect-[16/9]',
    surface: 'from-[#e5edff] via-white to-[#b7ccff]',
    position: 'object-center',
  },
  {
    title: 'Customer Growth Engine',
    category: 'Digital growth',
    image: assets.hero_img,
    layout: 'lg:col-span-4',
    ratio: 'aspect-square',
    surface: 'from-[#eef3ff] via-white to-[#c9d8ff]',
    position: 'object-right',
  },
  {
    title: 'Mobile Service Portal',
    category: 'Mobile apps',
    image: assets.work_mobile_app,
    layout: 'lg:col-span-4',
    ratio: 'aspect-square',
    surface: 'from-[#dce7ff] via-[#f6f9ff] to-[#a7c0ff]',
    position: 'object-center',
  },
  {
    title: 'Performance Intelligence',
    category: 'AI & automation',
    image: assets.work_dashboard_management,
    layout: 'lg:col-span-4',
    ratio: 'aspect-square',
    surface: 'from-[#edf2ff] via-white to-[#c5d5ff]',
    position: 'object-center',
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
                transition={{ duration: 0.6, delay: 0.35 }}
                className='mt-7 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base'
              >
                Explore digital products and platforms designed around real business goals, clear user journeys and dependable technology.
              </Motion.p>
            </div>
          </div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.5 }}
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

      <section className='px-4 pb-20 sm:px-12 lg:px-24 xl:px-40'>
        <Motion.div layout className='mx-auto grid max-w-7xl grid-cols-1 gap-x-3 gap-y-7 sm:grid-cols-2 sm:gap-y-9 lg:grid-cols-12'>
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
                className={`group sm:col-span-1 ${project.layout}`}
              >
                <div className={`relative overflow-hidden rounded-[1.4rem] bg-gradient-to-br ${project.surface} ${project.ratio}`}>
                  <Motion.div
                    initial={{ opacity: 0.2, scale: 1.08, filter: 'blur(8px)' }}
                    whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className='h-full w-full'
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      loading={index > 1 ? 'lazy' : 'eager'}
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] ${project.position}`}
                    />
                  </Motion.div>

                  <div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06102b]/45 via-transparent to-transparent opacity-25 transition-opacity duration-500 group-hover:opacity-45' />

                  {project.logo && (
                    <div className='absolute left-5 top-5 rounded-xl bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:left-7 sm:top-7'>
                      <img src={project.logo} alt='' className='h-6 max-w-28 object-contain' />
                    </div>
                  )}

                  <span className='absolute bottom-5 right-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-xl text-primary opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
                    ↗
                  </span>
                </div>

                <div className='flex items-start justify-between gap-4 px-1 pt-4'>
                  <h2 className='text-base font-extrabold sm:text-lg'>{project.title}</h2>
                  <p className='shrink-0 pt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400'>
                    {project.category}
                  </p>
                </div>
              </Motion.article>
            ))}
          </AnimatePresence>
        </Motion.div>
      </section>

      <section className='px-4 py-16 sm:px-12 sm:py-20 lg:px-24 xl:px-40'>
        <div className='mx-auto grid max-w-7xl gap-10 border-t border-black/10 pt-14 dark:border-white/10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:pt-20'>
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

      <section className='px-4 pb-0 sm:px-12 lg:px-24 xl:px-40'>
        <Motion.div
          data-cursor-light
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-primary px-7 py-10 text-white sm:px-12 sm:py-14 md:flex-row md:items-end'
        >
          <div>
            <p className='text-xs font-bold uppercase tracking-[0.2em] text-white/70'>Have a project in mind?</p>
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
