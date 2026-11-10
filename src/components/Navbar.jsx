import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'motion/react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import navigationLinks from '../data/navigationLinks'

const Navbar = ({ theme, setTheme, currentPath }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('/#hero')

  const closeSidebar = () => {
    setSidebarOpen(false)
  }

  useEffect(() => {
    const normalizedPath = currentPath.replace(/\/$/, '') || '/'

    if (normalizedPath === '/about') {
      setActiveHref('/about')
      return
    }

    if (normalizedPath === '/services') {
      setActiveHref('/services')
      return
    }

    if (normalizedPath === '/work') {
      setActiveHref('/work')
      return
    }

    if (normalizedPath === '/contact') {
      setActiveHref('/contact')
      return
    }

    if (normalizedPath !== '/') {
      setActiveHref('')
      return
    }

    const sectionLinks = navigationLinks.filter((link) => link.href.startsWith('/#'))

    const updateActiveSection = () => {
      const selectedLink = sectionLinks.reduce((activeLink, link) => {
        const section = document.querySelector(link.href.slice(1))

        if (!section) {
          return activeLink
        }

        const rect = section.getBoundingClientRect()
        return rect.top <= 120 ? link : activeLink
      }, sectionLinks[0])

      setActiveHref(selectedLink.href)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [currentPath])

  return (
    <Motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'
    >
      <a href='/' aria-label='Amazonis home'>
        <img
          src={theme === 'dark' ? assets.logo_dark : assets.logo}
          className='w-32 sm:w-40'
          alt='Amazonis'
          width='160'
          height='31'
        />
      </a>

      <nav
        aria-label='Main navigation'
        className={`text-gray-700 dark:text-white sm:text-sm ${
          sidebarOpen
            ? 'max-sm:w-60 max-sm:pl-10'
            : 'max-sm:w-0 max-sm:overflow-hidden'
        } max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <button
          type='button'
          className='absolute right-4 top-4 sm:hidden'
          onClick={closeSidebar}
          aria-label='Close menu'
        >
          <img src={assets.close_icon} alt='' className='w-5' />
        </button>

        {navigationLinks.map((link) => {
          const isActive = activeHref === link.href

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={closeSidebar}
              className={`border-b-2 pb-1 transition-colors ${
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent hover:border-gray-400 dark:hover:border-gray-300'
              }`}
            >
              {link.name}
            </a>
          )
        })}
      </nav>

      <div className='flex items-center gap-2 sm:gap-4'>
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <button
          type='button'
          className='sm:hidden'
          onClick={() => setSidebarOpen(true)}
          aria-label='Open menu'
        >
          <img
            src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
            alt=''
            className='w-8'
          />
        </button>

        <a
          href='/contact'
          className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:scale-103 transition-all'
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt='' />
        </a>
      </div>
    </Motion.header>
  )
}

export default Navbar
