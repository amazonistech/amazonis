import React, { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'motion/react'
import assets from '../assets/assets'
import servicesData from '../data/servicesData'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const eyebrowClass =
  'inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-900 dark:text-white before:h-2 before:w-2 before:rounded-full before:bg-primary'

const serviceImages = [
  assets.work_dashboard_management,
  assets.hero_img,
  assets.work_mobile_app,
  assets.bgImage2,
  assets.bgImage1,
  assets.work_fitness_app,
]

const processSteps = [
  {
    title: 'Share',
    text: 'Share your idea, existing problem or business goal. You do not need to prepare a technical document.',
  },
  {
    title: 'Discuss',
    text: 'We discuss the features, audience, technology, budget, deliverables and expected timeline.',
  },
  {
    title: 'Design',
    text: 'Our team prepares a clean and easy-to-use design aligned with your brand and users.',
  },
  {
    title: 'Develop',
    text: 'After approval, we begin development and keep you informed about the project’s progress.',
  },
  {
    title: 'Test',
    text: 'We test the design, features, speed, responsiveness, security and overall user experience.',
  },
  {
    title: 'Deploy',
    text: 'Once the project is approved, we deploy it and provide the agreed maintenance and technical support.',
  },
]

const expectations = [
  'Solutions built around your requirements',
  'Clear project scope and communication',
  'Modern and responsive design',
  'Secure and scalable development',
  'Transparent timelines and deliverables',
  'Support throughout the project',
  'Hosting and post-launch maintenance',
  'Long-term technical assistance',
]

const ServiceShowcaseCard = ({ service, index, onOpen }) => {
  const isBlue = index === 1 || index === 5 || index === 8

  return (
    <Motion.article
      {...fadeUp}
      data-cursor-light={isBlue || undefined}
      transition={{ ...fadeUp.transition, delay: index * 0.035 }}
      className={`group relative isolate flex min-h-[420px] overflow-hidden rounded-[18px] p-6 ring-1 transition duration-500 sm:p-7 hover:z-10 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,64,193,0.14)] ${
        isBlue
          ? 'bg-primary text-white ring-primary/20'
          : 'bg-white text-gray-950 ring-gray-200 dark:bg-gray-950 dark:text-white dark:ring-gray-800'
      }`}
    >
      <img
        src={serviceImages[index % serviceImages.length]}
        alt=''
        className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:opacity-20 group-focus-within:scale-110 group-focus-within:opacity-20 ${
          isBlue ? 'opacity-22 mix-blend-screen' : 'opacity-10 grayscale group-hover:grayscale-0'
        }`}
      />
      <div
        className={`absolute inset-0 ${
          isBlue
            ? 'bg-gradient-to-t from-primary via-primary/92 to-primary/62'
            : 'bg-gradient-to-t from-white via-white/95 to-white/74 dark:from-gray-950 dark:via-gray-950/92 dark:to-gray-950/68'
        }`}
      />
      <div className='absolute right-4 top-4 h-16 w-16 rounded-full bg-primary/10 blur-2xl transition duration-700 group-hover:scale-[2.2] group-hover:bg-primary/25' />

      <div className='relative z-10 flex w-full flex-col'>
        <div className='flex items-start justify-between gap-4'>
          <span
            className={`inline-flex rounded-full px-4 py-2 text-xs font-extrabold tracking-[0.18em] ${
              isBlue ? 'bg-white text-primary' : 'bg-primary/10 text-primary'
            }`}
          >
            0{index + 1}
          </span>
          <span
            className={`h-3 w-3 rounded-full ${
              isBlue ? 'bg-white' : 'bg-primary'
            } shadow-[0_0_24px_currentColor]`}
            aria-hidden='true'
          />
        </div>

        <div className='pt-9 transition duration-500 group-hover:-translate-y-1 group-focus-within:-translate-y-1'>
          <h3 className='max-w-xl text-[1.55rem] font-extrabold uppercase leading-[1.08] tracking-normal sm:text-[1.8rem]'>
            {service.title}
          </h3>
          <p className={`mt-6 max-w-xl text-[15px] leading-7 ${isBlue ? 'text-white/82' : 'text-gray-600 dark:text-gray-300'}`}>
            {service.summary || service.description}
          </p>

          <div className='mt-6 flex flex-wrap gap-2.5'>
            {service.features.slice(0, 2).map((feature) => (
              <span
                key={feature}
                className={`rounded-full px-4 py-1.5 text-[11px] font-bold leading-5 ring-1 ${
                  isBlue
                    ? 'bg-white/12 text-white ring-white/18'
                    : 'bg-primary/7 text-gray-700 ring-primary/10 dark:bg-white/8 dark:text-white/78 dark:ring-white/10'
                }`}
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className='mt-auto pt-8'>
          <button
            type='button'
            onClick={() => onOpen(service)}
            className={`inline-flex w-max items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isBlue
                ? 'bg-white text-primary focus-visible:ring-white focus-visible:ring-offset-primary'
                : 'bg-primary text-white focus-visible:ring-primary dark:ring-offset-gray-950'
            }`}
          >
            View Details
            <img src={assets.arrow_icon} alt='' className={`w-3 ${isBlue ? 'invert' : ''}`} />
          </button>
        </div>
      </div>
    </Motion.article>
  )
}

const ServiceDetailsModal = ({ service, onClose }) => {
  if (!service) return null

  return (
    <div className='fixed inset-0 z-[80] flex items-center justify-center bg-gray-950/55 px-4 py-6 backdrop-blur-sm'>
      <Motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className='max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[22px] bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:p-8 dark:bg-gray-950'
        role='dialog'
        aria-modal='true'
        aria-labelledby='service-detail-title'
      >
        <div className='flex items-start justify-between gap-6'>
          <div>
            <p className={eyebrowClass}>Service Detail</p>
            <h3
              id='service-detail-title'
              className='mt-4 text-4xl font-extrabold uppercase leading-none tracking-normal text-gray-950 sm:text-5xl dark:text-white'
            >
              {service.title}
            </h3>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='shrink-0 rounded-full border border-gray-200 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-gray-700 transition hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-gray-800 dark:text-gray-300'
          >
            Close
          </button>
        </div>

        <div className='mt-8 grid gap-7 lg:grid-cols-[0.95fr_1.05fr]'>
          <div className='overflow-hidden rounded-[16px] bg-primary/8'>
            <img
              src={serviceImages[servicesData.findIndex((item) => item.title === service.title) % serviceImages.length]}
              alt=''
              className='h-full min-h-[280px] w-full object-cover'
            />
          </div>
          <div>
            <p className='text-lg leading-8 text-gray-800 dark:text-gray-200'>{service.description}</p>
            <p className='mt-4 text-base leading-8 text-gray-600 dark:text-gray-400'>{service.detail}</p>
            <div className='mt-6 grid gap-2 sm:grid-cols-2'>
              {service.features.map((feature) => (
                <span
                  key={feature}
                  className='rounded-[10px] bg-primary/8 px-4 py-3 text-sm font-bold text-gray-700 ring-1 ring-primary/10 dark:bg-white/8 dark:text-white/78 dark:ring-white/10'
                >
                  {feature}
                </span>
              ))}
            </div>
            <a
              href={service.link || '/contact'}
              target={service.link ? '_blank' : undefined}
              rel={service.link ? 'noopener noreferrer' : undefined}
              className='mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-extrabold text-white transition hover:scale-105'
            >
              {service.cta}
              <img src={assets.arrow_icon} alt='' className='w-4' />
            </a>
          </div>
        </div>
      </Motion.div>
    </div>
  )
}

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(null)
  const [activeProcess, setActiveProcess] = useState(0)
  const currentProcess = processSteps[activeProcess]

  return (
    <main className='overflow-hidden bg-[#f4f4f2] text-gray-900 dark:bg-black dark:text-white'>
      <section className='px-4 py-6 sm:px-8 sm:py-8 lg:px-14'>
        <div className='mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white px-5 pb-14 pt-16 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16 lg:pt-24 dark:bg-gray-950'>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-5xl text-center'
          >
            <h1 className='text-6xl font-extrabold uppercase leading-none tracking-normal text-gray-950 sm:text-7xl lg:text-8xl dark:text-white'>
              Services
            </h1>
            <p className='mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400'>
              At Amazonis IT Services, we help businesses use technology in a simple and practical
              way, from planning to launch and beyond.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className='mt-14 overflow-hidden rounded-[18px] bg-[#eaf2ff] sm:mt-16'
          >
            <img
              src={assets.services_ai_ecosystem}
              alt='Connected digital services including websites, applications, cloud systems, AI automation and analytics'
              className='h-auto max-h-[470px] w-full object-cover object-center'
            />
          </Motion.div>

          <div className='mt-16 grid gap-10 border-b border-gray-200 pb-16 lg:grid-cols-[1fr_1.15fr] lg:gap-16 dark:border-gray-800'>
            <Motion.div {...fadeUp}>
              <p className={eyebrowClass}>What We Build</p>
              <h2 className='mt-7 max-w-xl text-4xl font-extrabold uppercase leading-tight tracking-normal text-gray-950 sm:text-5xl lg:text-6xl dark:text-white'>
                Complete digital services for modern businesses.
              </h2>
            </Motion.div>

            <Motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className='max-w-2xl text-2xl leading-snug text-gray-700 sm:text-3xl dark:text-gray-300'>
                You do not need to understand every technical detail.
                <span className='text-gray-300 dark:text-gray-600'> Tell us what you want to achieve.</span>
              </p>
              <div className='mt-9 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400'>
                <p>
                  Whether you need a professional website, a SaaS platform, reliable hosting, a
                  mobile app or support with digital marketing, our team can help.
                </p>
                <p>
                  We listen to your requirement, explain the options clearly and build according to
                  what your business actually needs.
                </p>
              </div>
              <a
                href='/contact'
                className='mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-extrabold text-white transition hover:scale-105'
              >
                Discuss Your Project
                <img src={assets.arrow_icon} alt='' className='w-4' />
              </a>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-14 sm:px-12 lg:px-24 lg:py-16 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto max-w-7xl'>
          <Motion.div {...fadeUp} className='max-w-4xl'>
            <p className={eyebrowClass}>Our Services</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              Built to launch, manage and scale your digital presence.
            </h2>
          </Motion.div>

          <div className='mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {servicesData.map((service, index) => (
              <ServiceShowcaseCard
                key={service.title}
                service={service}
                index={index}
                onOpen={setActiveService}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f4f4f2] px-4 py-16 sm:px-12 sm:py-20 lg:px-24 xl:px-40 dark:bg-black'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]'>
          <Motion.div {...fadeUp} className='lg:sticky lg:top-28 lg:h-max'>
            <p className={eyebrowClass}>How We Work</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              A simple path from idea to launch.
            </h2>
            <div className='mt-8 min-h-[220px] overflow-hidden rounded-[18px] bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.05)] ring-1 ring-gray-200 dark:bg-gray-950 dark:ring-gray-800'>
              <AnimatePresence mode='wait'>
                <Motion.div
                  key={currentProcess.title}
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 28 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <p className='text-sm font-extrabold text-primary/70'>0{activeProcess + 1}</p>
                  <h3 className='mt-5 text-3xl font-extrabold uppercase leading-none tracking-normal text-gray-950 dark:text-white'>
                    {currentProcess.title}
                  </h3>
                  <p className='mt-5 text-base leading-8 text-gray-600 dark:text-gray-400'>
                    {currentProcess.text}
                  </p>
                </Motion.div>
              </AnimatePresence>
            </div>
          </Motion.div>

          <div className='grid gap-4'>
            {processSteps.map((step, index) => (
              <Motion.article
                key={step.title}
                initial={{ opacity: 0, y: 48, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                onViewportEnter={() => setActiveProcess(index)}
                viewport={{ once: false, amount: 0.75 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className={`grid gap-4 rounded-[16px] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.04)] ring-1 transition duration-300 sm:grid-cols-[5rem_1fr] ${
                  activeProcess === index
                    ? 'bg-white text-gray-950 ring-primary/25 dark:bg-gray-950 dark:text-white'
                    : 'bg-white/58 text-gray-500 ring-gray-200 dark:bg-gray-950/50 dark:text-gray-500 dark:ring-gray-800'
                }`}
              >
                <p className={`text-3xl font-extrabold ${activeProcess === index ? 'text-primary/70' : 'text-primary/25'}`}>
                  0{index + 1}
                </p>
                <div>
                  <h3 className='text-2xl font-extrabold'>{step.title}</h3>
                  <p className='mt-3 text-base leading-7 text-gray-600 dark:text-gray-400'>
                    {step.text}
                  </p>
                </div>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-16 sm:px-12 sm:py-20 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>What You Can Expect</p>
            <h2 className='mt-7 max-w-lg text-3xl font-extrabold uppercase leading-tight tracking-normal sm:text-4xl lg:text-[2.7rem]'>
              Technology and marketing as one connected system.
            </h2>
            <p className='mt-7 text-base leading-8 text-gray-600 dark:text-gray-400'>
              You should not have to work with a different company for your website, hosting,
              application and digital marketing.
            </p>
          </Motion.div>

          <Motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className='grid gap-3 sm:grid-cols-2'
          >
            {expectations.map((item) => (
              <div
                key={item}
                className='rounded-[12px] border border-gray-200 bg-[#f8f8f7] px-5 py-4 text-sm font-bold text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300'
              >
                {item}
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className='bg-white px-4 py-16 sm:px-12 sm:py-20 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div data-cursor-light className='mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-primary p-7 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center'>
          <Motion.div {...fadeUp}>
            <p className='text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/70'>
              Start a Project
            </p>
            <h2 className='mt-5 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Tell us what you are trying to achieve.
            </h2>
            <p className='mt-5 max-w-2xl text-base leading-8 text-white/75'>
              We will understand your requirements and suggest a solution that fits your business
              without making the process unnecessarily complicated.
            </p>
          </Motion.div>
          <Motion.a
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            href='/contact'
            className='inline-flex w-max items-center gap-3 rounded-full bg-white px-8 py-3 text-sm font-extrabold text-primary transition hover:scale-105'
          >
            Contact Our Team
            <img src={assets.arrow_icon} alt='' className='w-4 invert' />
          </Motion.a>
        </div>
      </section>
      <ServiceDetailsModal service={activeService} onClose={() => setActiveService(null)} />
    </main>
  )
}

export default ServicesPage
