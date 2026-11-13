import React, { useRef, useState } from 'react'
import { motion as Motion } from 'motion/react'

const serviceIcons = {
    website: (
        <>
            <rect x="3" y="4" width="18" height="16" rx="2.5" />
            <path d="M3 8.5H21" />
            <path d="M8.5 12.5L6 15L8.5 17.5" />
            <path d="M15.5 12.5L18 15L15.5 17.5" />
            <path d="M13.5 11.5L10.5 18.5" />
        </>
    ),
    ecommerce: (
        <>
            <path d="M4 8H20L18.5 20H5.5L4 8Z" />
            <path d="M8 10V6A4 4 0 0 1 16 6V10" />
            <path d="M9 13H9.01" />
            <path d="M15 13H15.01" />
        </>
    ),
    mobile: (
        <>
            <rect x="6.5" y="2" width="11" height="20" rx="2.5" />
            <path d="M10 5H14" />
            <path d="M11 19H13" />
        </>
    ),
    ai: (
        <>
            <rect x="6" y="6" width="12" height="12" rx="3" />
            <path d="M9 2V6M15 2V6M9 18V22M15 18V22" />
            <path d="M2 9H6M2 15H6M18 9H22M18 15H22" />
            <path d="M12 9V15M9 12H15" />
        </>
    ),
    marketing: (
        <>
            <path d="M3 11V15A2 2 0 0 0 5 17H8L17 21V5L8 9H5A2 2 0 0 0 3 11Z" />
            <path d="M8 17L10 22" />
            <path d="M20 9.5C21.4 10.8 21.4 15.2 20 16.5" />
        </>
    ),
    social: (
        <>
            <circle cx="6" cy="12" r="2.5" />
            <circle cx="18" cy="6" r="2.5" />
            <circle cx="18" cy="18" r="2.5" />
            <path d="M8.2 10.9L15.8 7.1M8.2 13.1L15.8 16.9" />
        </>
    ),
    influencer: (
        <>
            <circle cx="9" cy="8" r="3" />
            <path d="M3.5 20C4 15.8 6 14 9 14C12 14 14 15.8 14.5 20" />
            <circle cx="17.5" cy="9" r="2.5" />
            <path d="M16 14.5C18.8 14.3 20.5 16 21 19" />
        </>
    ),
    hosting: (
        <>
            <rect x="3" y="4" width="18" height="6" rx="2" />
            <rect x="3" y="14" width="18" height="6" rx="2" />
            <path d="M7 7H7.01M7 17H7.01M17 7H18M17 17H18" />
            <path d="M12 10V14" />
        </>
    ),
}

const ServiceIcon = ({ name, title }) => (
    <svg
        viewBox="0 0 24 24"
        role="img"
        aria-label={`${title} icon`}
        className="h-9 w-9 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {serviceIcons[name] || serviceIcons.website}
    </svg>
)

const ServiceCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect()
        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        })
    }

    const CardContent = (
        <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            ref={divRef}
            onMouseMove={handleMouseMove}
        >
            <div
                className={`pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten ${
                    visible ? 'opacity-70' : 'opacity-0'
                }`}
                style={{
                    top: position.y - 150,
                    left: position.x - 150,
                }}
            />

            <div className="flex items-center gap-10 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-[18px] bg-primary/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-primary/12 dark:bg-primary/12 dark:shadow-none dark:ring-primary/20">
                    <ServiceIcon name={service.iconName} title={service.title} />
                </div>

                <div className="flex-1">
                    <h3 className="font-bold">{service.title}</h3>
                    <p className="text-sm mt-2">{service.description}</p>
                </div>
            </div>
        </Motion.div>
    )

    if (!service.link) {
        return <div className="block">{CardContent}</div>
    }

    const isExternalLink = /^https?:\/\//.test(service.link)

    return (
        <a
            href={service.link}
            target={isExternalLink ? "_blank" : "_self"}
            rel={isExternalLink ? "noopener noreferrer" : undefined}
            className="block"
        >
            {CardContent}
        </a>
    )
}

export default ServiceCard
