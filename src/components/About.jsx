import React from 'react'
import { motion as Motion } from 'motion/react'
import assets from '../assets/assets'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const eyebrowClass =
  'inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-900 dark:text-white before:h-2 before:w-2 before:rounded-full before:bg-primary'

const imageTiles = [
  { src: assets.bgImage1, alt: 'Team collaboration note', className: 'h-36 sm:h-48 lg:h-56' },
  { src: assets.work_dashboard_management, alt: 'Digital dashboard planning', className: 'h-28 sm:h-36 lg:h-40' },
  { src: assets.group_profile, alt: 'Amazonis project team', className: 'h-34 sm:h-44 lg:h-52' },
  { src: assets.hero_img, alt: 'Mobile technology solution', className: 'h-40 sm:h-56 lg:h-64' },
  { src: assets.work_mobile_app, alt: 'Mobile application interface', className: 'h-28 sm:h-36 lg:h-40' },
  { src: assets.bgImage2, alt: 'Professional using digital tools', className: 'h-34 sm:h-44 lg:h-52' },
]

const buildItems = [
  'Business and corporate websites',
  'E-commerce stores and online platforms',
  'Custom web applications and software',
  'SaaS product design and development',
  'UI/UX design and digital product development',
  'Cloud hosting and website maintenance',
  'AI-powered tools and business automation',
  'Social media and digital business management',
]

const values = [
  {
    title: 'Transparency',
    text: 'We clearly communicate scope, pricing, timelines and responsibilities before work begins.',
  },
  {
    title: 'Practical Innovation',
    text: 'We use modern technology where it creates genuine value and improves the final product.',
  },
  {
    title: 'Accountability',
    text: 'We take responsibility for assigned work and keep communication structured throughout.',
  },
  {
    title: 'Security and Privacy',
    text: 'We treat customer information responsibly and follow reasonable data-protection practices.',
  },
  {
    title: 'Long-Term Relationships',
    text: 'We aim to become a dependable technology partner as the customer’s business grows.',
  },
]

const products = [
  {
    name: 'Venuefy',
    mark: assets.venuefy_logo,
    text: 'A venue discovery and booking platform for wedding venues, banquet halls and event spaces.',
    href: 'https://venuefy.in/',
  },
  {
    name: 'Slour',
    mark: assets.slour_logo,
    text: 'An AI-powered social media management platform for creators, agencies and marketing teams.',
    href: 'https://slour.in/',
  },
  {
    name: 'Inphra',
    mark: assets.inphra_logo,
    text: 'A business operations product built to support real-world project and team management.',
    href: 'https://inphra.in/',
  },
]

const About = () => {
  return (
    <main className='overflow-hidden bg-[#f4f4f2] text-gray-900 dark:bg-black dark:text-white'>
      <section className='px-4 py-8 sm:px-8 lg:px-14'>
        <div className='mx-auto max-w-7xl overflow-hidden rounded-[22px] bg-white px-5 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28 lg:px-16 lg:pt-36 dark:bg-gray-950'>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-5xl text-center'
          >
            <h1 className='text-6xl font-extrabold uppercase leading-none tracking-normal text-gray-950 sm:text-7xl lg:text-8xl dark:text-white'>
              About Us
            </h1>
            <p className='mx-auto mt-8 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400'>
              Amazonis IT Services Pvt. Ltd. helps startups, professionals and growing businesses
              turn their ideas into practical, reliable and scalable digital solutions.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className='mt-20 flex items-end justify-center gap-3 sm:gap-5 lg:mt-28'
          >
            {imageTiles.map((tile, index) => (
              <div
                key={tile.alt}
                className={`relative w-24 overflow-hidden rounded-[14px] bg-gray-100 shadow-sm sm:w-32 lg:w-44 ${
                  tile.className
                } ${index === 0 || index === 5 ? 'max-md:hidden' : ''}`}
              >
                <img src={tile.src} alt={tile.alt} className='h-full w-full object-cover' />
              </div>
            ))}
          </Motion.div>

          <div className='mt-24 grid gap-12 border-b border-gray-200 pb-20 lg:mt-32 lg:grid-cols-[1fr_1.15fr] lg:gap-24 dark:border-gray-800'>
            <Motion.div {...fadeUp}>
              <p className={eyebrowClass}>About Amazonis</p>
              <h2 className='mt-7 max-w-xl text-4xl font-extrabold uppercase leading-tight tracking-normal text-gray-950 sm:text-5xl lg:text-6xl dark:text-white'>
                Building technology that helps businesses move forward.
              </h2>
            </Motion.div>

            <Motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <p className='max-w-2xl text-2xl leading-snug text-gray-700 sm:text-3xl dark:text-gray-300'>
                We believe technology should make running a business simpler,
                <span className='text-gray-300 dark:text-gray-600'> not more complicated.</span>
              </p>
              <div className='mt-9 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400'>
                <p>
                  Every solution we build starts with understanding the actual business requirement,
                  the people who will use it and the result it needs to deliver.
                </p>
                <p>
                  From establishing a strong online presence to developing complete software
                  platforms, Amazonis works as a long-term technology partner for modern businesses.
                </p>
              </div>
            </Motion.div>
          </div>
        </div>
      </section>

      <section className='bg-white px-4 pb-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto max-w-6xl'>
          <Motion.div {...fadeUp} className='max-w-3xl'>
            <p className={eyebrowClass}>Products Developed by Amazonis</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Digital products designed to solve practical business problems.
            </h2>
          </Motion.div>

          <div className='mt-6 grid gap-5 lg:grid-cols-3'>
            {products.map((product, index) => (
              <Motion.a
                key={product.name}
                href={product.href}
                target='_blank'
                rel='noopener noreferrer'
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.08 }}
                className='group flex min-h-72 flex-col rounded-[16px] border border-gray-200 bg-[#f8f8f7] p-7 transition hover:-translate-y-1 hover:border-primary dark:border-gray-800 dark:bg-gray-900'
              >
                <span className='grid h-20 w-20 place-items-center rounded-full bg-white p-4 dark:bg-black'>
                  <img src={product.mark} alt={`${product.name} logo`} className='max-h-full max-w-full object-contain' />
                </span>
                <h3 className='mt-8 text-3xl font-extrabold'>{product.name}</h3>
                <p className='mt-4 flex-1 text-base leading-7 text-gray-600 dark:text-gray-400'>
                  {product.text}
                </p>
                <span className='mt-8 text-sm font-extrabold text-primary'>Explore product →</span>
              </Motion.a>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1fr] lg:items-start'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>Our Story</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              From clear beginnings to trusted technology partners.
            </h2>
          </Motion.div>

          <Motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            <div className='overflow-hidden rounded-[16px] bg-gray-100 dark:bg-gray-900'>
              <img
                src={assets.work_fitness_app}
                alt='Amazonis digital product work'
                className='h-72 w-full object-cover sm:h-96'
              />
            </div>
            <div className='mt-8 space-y-5 text-base leading-8 text-gray-600 dark:text-gray-400'>
              <p>
                Amazonis was created with a straightforward idea: businesses should be able to access
                dependable technology without unnecessary complexity, unclear pricing or disconnected
                service providers.
              </p>
              <p>
                Many businesses have strong ideas but struggle to find the right technical support to
                execute them properly. We bridge that gap by combining development, design,
                infrastructure and digital execution within one professional team.
              </p>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className='bg-white px-4 pb-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto max-w-6xl'>
          <Motion.div {...fadeUp} className='max-w-4xl'>
            <p className={eyebrowClass}>Our Mission / Vision</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              Driven by purpose,
              <span className='block text-gray-300 dark:text-gray-700'>guided by vision.</span>
            </h2>
          </Motion.div>

          <div className='mt-14 grid gap-5 lg:grid-cols-2'>
            <Motion.article
              {...fadeUp}
              className='rounded-[16px] border border-gray-200 bg-[#f8f8f7] p-7 sm:p-9 dark:border-gray-800 dark:bg-gray-900'
            >
              <span className='inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900 dark:bg-black dark:text-white'>
                Mission
              </span>
              <p className='mt-8 text-2xl leading-snug text-gray-700 dark:text-gray-300'>
                Make dependable technology accessible to businesses at every stage of growth, with
                solutions that are useful today and adaptable for tomorrow.
              </p>
            </Motion.article>

            <Motion.article
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className='rounded-[16px] border border-gray-200 bg-[#f8f8f7] p-7 sm:p-9 dark:border-gray-800 dark:bg-gray-900'
            >
              <span className='inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold text-gray-900 dark:bg-black dark:text-white'>
                Vision
              </span>
              <p className='mt-8 text-2xl leading-snug text-gray-700 dark:text-gray-300'>
                Become a trusted technology company known for meaningful digital products,
                transparent client relationships and thoughtful execution.
              </p>
            </Motion.article>
          </div>
        </div>
      </section>

      <section className='bg-white px-4 pb-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr]'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>What We Build</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Websites, software, SaaS and AI-powered business tools.
            </h2>
          </Motion.div>

          <Motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className='grid gap-3 sm:grid-cols-2'
          >
            {buildItems.map((item) => (
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

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>What We Value</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Clear process, thoughtful execution and dependable support.
            </h2>
          </Motion.div>

          <div className='grid gap-4'>
            {values.map((value, index) => (
              <Motion.article
                key={value.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                className='grid gap-3 border-t border-gray-200 pt-5 sm:grid-cols-[0.45fr_1fr] dark:border-gray-800'
              >
                <h3 className='text-xl font-extrabold'>{value.title}</h3>
                <p className='text-base leading-8 text-gray-600 dark:text-gray-400'>{value.text}</p>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-[#f4f4f2] px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-black'>
        <div className='mx-auto grid max-w-6xl gap-8 rounded-[18px] bg-white p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] dark:bg-gray-950'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>Company Information</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl'>
              Amazonis IT Services Pvt. Ltd.
            </h2>
            <p className='mt-7 text-base leading-8 text-gray-600 dark:text-gray-400'>
              Information Technology and Digital Solutions company operating from India.
            </p>
          </Motion.div>

          <Motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className='grid gap-5 text-sm leading-7 text-gray-600 sm:grid-cols-2 dark:text-gray-400'
          >
            <div>
              <p className='font-extrabold text-gray-950 dark:text-white'>Email</p>
              <a href='mailto:info@amazonis.in' className='text-primary'>info@amazonis.in</a>
            </div>
            <div>
              <p className='font-extrabold text-gray-950 dark:text-white'>Phone</p>
              <a href='tel:+919971228021' className='text-primary'>+91 99712 28021</a>
            </div>
            <div>
              <p className='font-extrabold text-gray-950 dark:text-white'>Business Address</p>
              <p>Flat 19, C-001/A2, Sector 16B, Noida, Uttar Pradesh - 201301, India</p>
            </div>
            <div>
              <p className='font-extrabold text-gray-950 dark:text-white'>Registered Office</p>
              <p>11/48 DSIDC, Pocket-II, Mayur Vihar Phase-I, East Delhi, Delhi - 110091, India</p>
            </div>
          </Motion.div>
        </div>
      </section>
    </main>
  )
}

export default About
