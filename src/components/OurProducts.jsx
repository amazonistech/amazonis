import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import { motion as Motion } from 'motion/react'

const ProductCard = ({ product, index }) => {
  const isComingSoon = product.status === 'coming-soon'
  const Card = isComingSoon ? Motion.div : Motion.a

  return (
    <Card
      {...(!isComingSoon
        ? {
            href: product.href,
            target: product.href.startsWith('http') ? '_blank' : '_self',
            rel: product.href.startsWith('http') ? 'noopener noreferrer' : undefined,
          }
        : {})}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className='group relative flex min-h-[430px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-7 shadow-none transition-all duration-300 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_50%_0%,var(--product-glow),transparent_54%)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1 hover:border-[var(--product-color)] hover:shadow-[0_28px_80px_var(--product-glow-strong)] hover:before:opacity-100 dark:border-gray-700 dark:bg-gray-900'
      style={{
        '--product-color': product.hoverColor,
        '--product-glow': product.glowColor,
        '--product-glow-strong': product.strongGlowColor,
      }}
    >
      <span
        className='absolute inset-x-0 top-0 h-1.5 bg-[var(--product-color)]'
        aria-hidden='true'
      />

      <div className='relative z-10 flex h-full flex-1 flex-col'>
        <div
          className={`relative grid h-28 w-28 shrink-0 place-items-center overflow-hidden rounded-full border transition-all duration-300 group-hover:border-[var(--product-color)] ${
            product.filledLogo
              ? 'border-[#162c53] bg-[#162c53] group-hover:bg-[#162c53]'
              : 'border-gray-200 bg-gray-100 group-hover:bg-white dark:border-gray-700 dark:bg-gray-800'
          }`}
        >
          <img
            src={product.logo}
            alt={`${product.title} logo`}
            className={`h-full w-full ${product.filledLogo ? 'object-cover' : 'object-contain p-3'}`}
          />
        </div>

        <div className='relative mt-8 flex flex-1 flex-col'>
          <div className={isComingSoon ? 'pointer-events-none select-none blur-[3px]' : ''}>
            <div className='flex-1'>
              <h3 className='text-3xl font-extrabold leading-tight text-[#0b2148] dark:text-white'>
                {product.title}
              </h3>
              <p className='mt-5 inline-flex rounded-full bg-gray-100 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0b2148] transition-colors duration-300 group-hover:bg-[var(--product-color)]/10 group-hover:text-[var(--product-color)] dark:bg-gray-800 dark:text-gray-200'>
                {product.category}
              </p>
              <p className='mt-6 text-base leading-8 text-gray-600 dark:text-gray-400'>
                {product.description}
              </p>
            </div>

            <span
              className='mt-8 inline-flex w-max items-center gap-3 border-b-2 border-[#0b2148] pb-2 text-sm font-extrabold text-[#0b2148] transition-colors duration-300 group-hover:border-[var(--product-color)] group-hover:text-[var(--product-color)] dark:border-white dark:text-white'
            >
              Explore product
              <span aria-hidden='true'>→</span>
            </span>
          </div>

          {isComingSoon && (
            <div className='absolute inset-0 z-20 grid place-items-center rounded-xl bg-white/45 backdrop-blur-[1px] dark:bg-gray-900/45'>
              <span className='rounded-full bg-[var(--product-color)] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-shadow duration-300 group-hover:shadow-[0_18px_42px_var(--product-glow-strong)]'>
                Coming soon
              </span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

const OurProducts = () => {
  const productData = [
    {
      title: 'Venuefy',
      tagline: 'Venue booking made simple',
      description: 'Discover, manage and book event venues with confidence.',
      category: 'Venue Discovery & Booking',
      logo: assets.venuefy_logo_hover,
      filledLogo: true,
      hoverColor: '#162c53',
      glowColor: 'rgba(22, 44, 83, 0.14)',
      strongGlowColor: 'rgba(22, 44, 83, 0.24)',
      href: 'https://venuefy.in/',
    },
    {
      title: 'Slour',
      tagline: 'Social scheduling with AI',
      description: 'Plan, schedule and automate content across social platforms.',
      category: 'AI Social Media Workspace',
      logo: assets.slour_logo,
      hoverColor: '#ef4444',
      glowColor: 'rgba(239, 68, 68, 0.14)',
      strongGlowColor: 'rgba(239, 68, 68, 0.24)',
      href: 'https://slour.in/',
    },
    {
      title: 'Inphra',
      tagline: 'Infrastructure for digital growth',
      description: 'Manage projects, teams, materials and site operations in one place.',
      category: 'Construction Management Platform',
      logo: assets.inphra_logo,
      hoverColor: '#0959ed',
      glowColor: 'rgba(9, 89, 237, 0.14)',
      strongGlowColor: 'rgba(9, 89, 237, 0.24)',
      href: 'https://inphra.in/',
      status: 'coming-soon',
    },
  ]

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='our-products'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >
      <Title title='Our products' desc='Amazonis builds and operates digital products designed for real business growth.' />

      <div className='grid w-full max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {productData.map((product, index) => (
          <ProductCard key={product.title} product={product} index={index} />
        ))}
      </div>
    </Motion.div>
  )
}

export default OurProducts
