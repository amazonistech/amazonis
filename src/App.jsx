import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import ContactUs from './components/ContactUs'
import About from './components/About'
import NotFound from './components/NotFound'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import SEO from './components/SEO'
import LegalPage from './components/LegalPage'
import SitemapPage from './components/SitemapPage'
import ContactPage from './components/ContactPage'
import ServicesPage from './components/ServicesPage'
import BackToTopButton from './components/BackToTopButton'
import WorkPage from './components/WorkPage'

const appRoutes = [
  '/',
  '/about',
  '/services',
  '/work',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookie-policy',
  '/refund-policy',
  '/cancellation-policy',
  '/disclaimer',
  '/acceptable-use-policy',
  '/service-delivery-fulfilment-policy',
  '/sitemap',
]

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  const dotRef = useRef(null)
  const outlineRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  const normalizedPath = currentPath.replace(/\/$/, '') || '/'
  const isHomePage = normalizedPath === '/'
  const isAboutPage = normalizedPath === '/about'
  const isServicesPage = normalizedPath === '/services'
  const isWorkPage = normalizedPath === '/work'
  const isContactPage = normalizedPath === '/contact'
  const isPrivacyPolicyPage = normalizedPath === '/privacy-policy'
  const isLegalPage = [
    '/terms-and-conditions',
    '/cookie-policy',
    '/refund-policy',
    '/cancellation-policy',
    '/disclaimer',
    '/acceptable-use-policy',
    '/service-delivery-fulfilment-policy',
  ].includes(normalizedPath)
  const isSitemapPage = normalizedPath === '/sitemap'
  const isNotFoundPage = !appRoutes.includes(normalizedPath)

  useEffect(() => {
    const routes = new Set(appRoutes)
    const normalizeRoute = (path) => path.replace(/\/$/, '') || '/'

    const updatePath = () => {
      setCurrentPath(window.location.pathname)
    }

    const handleLinkClick = (event) => {
      const link = event.target.closest('a')

      if (!link || link.target || link.hasAttribute('download')) {
        return
      }

      const url = new URL(link.href, window.location.origin)
      const isSameOrigin = url.origin === window.location.origin
      const routePath = normalizeRoute(url.pathname)
      const isKnownRoute = routes.has(routePath)

      if (!isSameOrigin || !isKnownRoute) {
        return
      }

      event.preventDefault()
      window.history.pushState({}, '', `${routePath}${url.hash}`)
      setCurrentPath(routePath)

      if (url.hash) {
        requestAnimationFrame(() => {
          document.querySelector(url.hash)?.scrollIntoView({ behavior: 'smooth' })
        })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }

    window.addEventListener('popstate', updatePath)
    document.addEventListener('click', handleLinkClick)

    return () => {
      window.removeEventListener('popstate', updatePath)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    let animationFrame
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className='dark:bg-black relative min-h-screen'>
      <SEO path={normalizedPath} />
      <Toaster />

      {!isNotFoundPage && <Navbar theme={theme} setTheme={setTheme} currentPath={currentPath} />}

      {isHomePage && (
        <>
          <Hero />
          <TrustedBy />
          <Services />
          <OurWork />
          <ContactUs />
        </>
      )}

      {isAboutPage && <About />}
      {isServicesPage && <ServicesPage />}
      {isWorkPage && <WorkPage />}
      {isContactPage && <ContactPage />}
      {isPrivacyPolicyPage && <PrivacyPolicy />}
      {isLegalPage && <LegalPage path={normalizedPath} />}
      {isSitemapPage && <SitemapPage />}
      {isNotFoundPage && <NotFound theme={theme} />}

      {!isNotFoundPage && <Footer theme={theme} compact={isContactPage} />}
      {!isNotFoundPage && <BackToTopButton />}

      <div
        ref={outlineRef}
        className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] max-sm:hidden'
        style={{ transition: 'transform 0.1s ease-out' }}
      />
      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] max-sm:hidden'
      />
    </div>
  )
}

export default App
