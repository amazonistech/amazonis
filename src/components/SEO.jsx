import { useEffect } from 'react'

const siteUrl = 'https://amazonis.in'
const siteName = 'Amazonis IT Services'
const defaultImage = `${siteUrl}/web-app-manifest-512x512.png`

const pageMeta = {
  '/': {
    title: 'Amazonis | Technologies',
    description:
      'Amazonis IT Services Pvt. Ltd. builds websites, AI solutions, mobile apps, e-commerce platforms, SEO campaigns and digital growth systems for modern businesses.',
    path: '/',
    type: 'website',
      schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Amazonis IT Services Pvt. Ltd.',
      alternateName: 'Amazonis',
      url: siteUrl,
      logo: `${siteUrl}/web-app-manifest-512x512.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@amazonis.in',
        contactType: 'customer support',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi'],
      },
      sameAs: [
        'https://www.linkedin.com/company/amazonis-official',
        'https://x.com/Amazonisindia',
        'https://www.instagram.com/amazonis.in',
        'https://www.facebook.com/amazonisofficial',
      ],
    },
  },
  '/about': {
    title: 'Amazonis | Technologies',
    description:
      'Learn about Amazonis IT Services Pvt. Ltd., a technology company building digital solutions and owned products including Venuefy, Slour and Inphra.',
    path: '/about',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Amazonis',
      url: `${siteUrl}/about`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/services': {
    title: 'Amazonis | Technologies',
    description:
      'Explore Amazonis IT services including website development, e-commerce, mobile apps, AI solutions, digital marketing, social media management, influencer marketing and hosting.',
    path: '/services',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Amazonis IT Services',
      provider: {
        '@type': 'Organization',
        name: 'Amazonis IT Services Pvt. Ltd.',
        url: siteUrl,
      },
      areaServed: 'IN',
      url: `${siteUrl}/services`,
    },
  },
  '/work': {
    title: 'Our Work | Amazonis Technologies',
    description:
      'Explore websites, SaaS platforms, mobile apps, AI automations and digital growth systems designed and built by Amazonis.',
    path: '/work',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Amazonis Work',
      url: `${siteUrl}/work`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/contact': {
    title: 'Amazonis | Technologies',
    description:
      'Contact Amazonis IT Services Pvt. Ltd. for websites, apps, AI solutions, digital marketing, hosting, maintenance and technology support.',
    path: '/contact',
    type: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Amazonis',
      url: `${siteUrl}/contact`,
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/privacy-policy': {
    title: 'Amazonis | Technologies',
    description:
      'Read how Amazonis IT Services Pvt. Ltd. collects, uses, stores, protects and shares personal information when you use amazonis.in or contact us.',
    path: '/privacy-policy',
    type: 'article',
    robots: 'index, follow, max-image-preview:large',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      url: `${siteUrl}/privacy-policy`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Amazonis IT Services Pvt. Ltd.',
        url: siteUrl,
      },
    },
  },
  '/terms-and-conditions': {
    title: 'Amazonis | Technologies',
    description:
      'Read the Terms & Conditions for using amazonis.in and working with Amazonis IT Services Pvt. Ltd.',
    path: '/terms-and-conditions',
    type: 'article',
  },
  '/cookie-policy': {
    title: 'Amazonis | Technologies',
    description:
      'Learn how Amazonis IT Services Pvt. Ltd. may use cookies and similar technologies on amazonis.in.',
    path: '/cookie-policy',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Cookie Policy',
      url: `${siteUrl}/cookie-policy`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/refund-policy': {
    title: 'Amazonis | Technologies',
    description:
      'Review how Amazonis IT Services Pvt. Ltd. generally handles service refund requests.',
    path: '/refund-policy',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Refund Policy',
      url: `${siteUrl}/refund-policy`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/cancellation-policy': {
    title: 'Amazonis | Technologies',
    description:
      'Review how Amazonis IT Services Pvt. Ltd. handles project and service cancellation requests.',
    path: '/cancellation-policy',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Cancellation Policy',
      url: `${siteUrl}/cancellation-policy`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/disclaimer': {
    title: 'Amazonis | Technologies',
    description:
      'Read important disclaimers about Amazonis website information, service outcomes, and third-party platforms.',
    path: '/disclaimer',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Disclaimer',
      url: `${siteUrl}/disclaimer`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/acceptable-use-policy': {
    title: 'Amazonis | Technologies',
    description:
      'Read the Acceptable Use Policy for Amazonis websites, services, products, platforms and digital systems.',
    path: '/acceptable-use-policy',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Acceptable Use Policy',
      url: `${siteUrl}/acceptable-use-policy`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/service-delivery-fulfilment-policy': {
    title: 'Amazonis | Technologies',
    description:
      'Read how Amazonis handles service delivery, fulfilment, timelines, customer responsibilities and completion.',
    path: '/service-delivery-fulfilment-policy',
    type: 'article',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Service Delivery and Fulfilment Policy',
      url: `${siteUrl}/service-delivery-fulfilment-policy`,
      dateModified: '2026-09-01',
      isPartOf: {
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
      },
    },
  },
  '/sitemap': {
    title: 'Amazonis | Technologies',
    description: 'Browse all public pages, legal policies, and sitemap resources from Amazonis.',
    path: '/sitemap',
    type: 'website',
  },
}

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

const upsertLink = (rel, href) => {
  let element = document.head.querySelector(`link[rel="${rel}"]`)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

const SEO = ({ path }) => {
  useEffect(() => {
    const meta = pageMeta[path] || {
      title: 'Amazonis | Technologies',
      description: 'The page you are looking for could not be found on Amazonis IT Services.',
      path,
      robots: 'noindex, follow',
      type: 'website',
    }

    const canonicalUrl = `${siteUrl}${meta.path === '/' ? '/' : meta.path}`

    document.title = meta.title
    upsertMeta('meta[name="description"]', { name: 'description', content: meta.description })
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: meta.robots || 'index, follow, max-image-preview:large',
    })
    upsertMeta('meta[name="author"]', {
      name: 'author',
      content: 'Amazonis IT Services Pvt. Ltd.',
    })
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: meta.type })
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: meta.title })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    })
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl })
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: siteName })
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: defaultImage })
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: meta.title })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    })
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: defaultImage })
    upsertLink('canonical', canonicalUrl)

    document.head.querySelector('#page-schema')?.remove()

    if (meta.schema) {
      const schema = document.createElement('script')
      schema.id = 'page-schema'
      schema.type = 'application/ld+json'
      schema.textContent = JSON.stringify(meta.schema)
      document.head.appendChild(schema)
    }
  }, [path])

  return null
}

export default SEO
