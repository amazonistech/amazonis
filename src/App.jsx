import React, { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import SEO from './components/SEO'
import BackToTopButton from './components/BackToTopButton'

const About = lazy(() => import('./components/About'))
const ContactPage = lazy(() => import('./components/ContactPage'))
const LegalPage = lazy(() => import('./components/LegalPage'))
const NotFound = lazy(() => import('./components/NotFound'))
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'))
const ServicesPage = lazy(() => import('./components/ServicesPage'))
const SitemapPage = lazy(() => import('./components/SitemapPage'))
const WorkPage = lazy(() => import('./components/WorkPage'))

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
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
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
    const finePointer = window.matchMedia('(pointer: fine) and (min-width: 640px)')

    if (!finePointer.matches) {
      return undefined
    }

    let animationFrame
    let isAnimating = false

    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.18
      position.current.y += (mouse.current.y - position.current.y) * 0.18

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      const distance = Math.abs(mouse.current.x - position.current.x) + Math.abs(mouse.current.y - position.current.y)

      if (distance > 0.25) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        isAnimating = false
      }
    }

    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX
      mouse.current.y = event.clientY

      const useLightCursor = event.target.closest?.('[data-cursor-light]')

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.opacity = '1'
        outlineRef.current.style.opacity = '1'
        dotRef.current.style.backgroundColor = useLightCursor ? '#ffffff' : '#0040c1'
        outlineRef.current.style.borderColor = useLightCursor ? '#ffffff' : '#0040c1'
        dotRef.current.style.transform = `translate3d(${event.clientX - 6}px, ${event.clientY - 6}px, 0)`
      }

      if (!isAnimating) {
        isAnimating = true
        animationFrame = requestAnimationFrame(animate)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

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

      <Suspense fallback={<main className='min-h-[60vh]' aria-busy='true' />}>
        {isAboutPage && <About />}
        {isServicesPage && <ServicesPage />}
        {isWorkPage && <WorkPage />}
        {isContactPage && <ContactPage />}
        {isPrivacyPolicyPage && <PrivacyPolicy />}
        {isLegalPage && <LegalPage path={normalizedPath} />}
        {isSitemapPage && <SitemapPage />}
        {isNotFoundPage && <NotFound theme={theme} />}
      </Suspense>

      {!isNotFoundPage && <Footer theme={theme} compact={isContactPage || isWorkPage || isServicesPage} />}
      {!isNotFoundPage && <BackToTopButton />}

      <div
        ref={outlineRef}
        className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] max-sm:hidden'
        style={{ opacity: 0, transition: 'border-color 0.2s ease, opacity 0.2s ease' }}
      />
      <div
        ref={dotRef}
        className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] max-sm:hidden transition-colors duration-200'
        style={{ opacity: 0 }}
      />
    </div>
  )
}

export default App
