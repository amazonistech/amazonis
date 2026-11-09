import React, { useState } from 'react'
import { motion as Motion } from 'motion/react'
import toast from 'react-hot-toast'
import assets from '../assets/assets'
import servicesData from '../data/servicesData'
import {
  WEB3FORMS_ENDPOINT,
  isWeb3FormsReady,
  prepareWeb3FormsData,
} from '../config/web3forms'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const eyebrowClass =
  'inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-gray-900 dark:text-white before:h-2 before:w-2 before:rounded-full before:bg-primary'

const contactDetails = [
  {
    label: 'Email',
    value: 'info@amazonis.in',
    href: 'mailto:info@amazonis.in',
  },
  {
    label: 'Phone',
    value: '+91 99712 28021',
    href: 'tel:+919971228021',
  },
  {
    label: 'Business Address',
    value: 'Flat 19, C-001/A2, Sector 16B, Noida, Uttar Pradesh - 201301, India',
  },
  {
    label: 'Registered Office',
    value: '11/48 DSIDC, Pocket-II, Mayur Vihar Phase-I, East Delhi, Delhi - 110091, India',
  },
]

const supportItems = [
  'Business enquiries',
  'Customer support',
  'Billing assistance',
  'Transaction-related concerns',
]

const officeAddress = 'Flat 19, C-001/A2, Sector 16B, Noida, Uttar Pradesh 201301'
const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (event) => {
    event.preventDefault()

    if (!isWeb3FormsReady()) {
      toast.error('Web3Forms access key is missing.')
      return
    }

    setIsSubmitting(true)
    const form = event.currentTarget
    const formData = prepareWeb3FormsData(form, {
      subject: 'New Amazonis contact enquiry',
      source: 'Contact page',
    })
    const firstName = formData.get('first_name') || ''
    const lastName = formData.get('last_name') || ''
    formData.append('name', `${firstName} ${lastName}`.trim())

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()

      if (data.success) {
        toast.success('Message sent successfully.')
        form.reset()
      } else {
        toast.error(data.message || 'Unable to send message right now.')
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className='overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-white'>
      <section className='px-4 py-8 sm:px-8 lg:px-14'>
        <div className='mx-auto max-w-7xl px-5 pb-16 pt-20 sm:px-10 sm:pb-24 sm:pt-28 lg:px-16 lg:pt-36'>
          <Motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mx-auto max-w-5xl text-center'
          >
            <h1 className='text-6xl font-extrabold uppercase leading-none tracking-normal text-gray-950 sm:text-7xl lg:text-8xl dark:text-white'>
              Contact
            </h1>
            <p className='mx-auto mt-8 max-w-3xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400'>
              Tell us what you want to build, improve or manage. We will help you understand the
              right scope, timeline and next step.
            </p>
          </Motion.div>

        </div>
      </section>

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr]'>
          <Motion.div {...fadeUp}>
            <p className={eyebrowClass}>Get in Touch</p>
            <h2 className='mt-7 text-4xl font-extrabold uppercase leading-tight tracking-normal sm:text-5xl lg:text-6xl'>
              Share your requirement with Amazonis.
            </h2>
            <p className='mt-8 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400'>
              For business enquiries, customer support, billing assistance or transaction-related
              concerns, contact us through our official email address or phone number.
            </p>

            <div className='mt-9 grid gap-3 sm:grid-cols-2'>
              {supportItems.map((item) => (
                <div
                  key={item}
                  className='rounded-[12px] border border-gray-200 bg-[#f8f8f7] px-5 py-4 text-sm font-bold text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300'
                >
                  {item}
                </div>
              ))}
            </div>
          </Motion.div>

          <Motion.form
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            onSubmit={onSubmit}
            className='rounded-[18px] border border-gray-200 bg-[#f8f8f7] p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900'
          >
            <input type='checkbox' name='botcheck' className='hidden' tabIndex='-1' autoComplete='off' />
            <h2 className='text-3xl font-extrabold uppercase leading-tight text-gray-950 dark:text-white'>
              Send us your message
            </h2>

            <div className='mt-7 grid gap-5 sm:grid-cols-2'>
              <label className='block text-sm font-bold text-gray-900 dark:text-white'>
                First Name
                <input
                  name='first_name'
                  type='text'
                  placeholder='First name'
                  className='mt-2 w-full rounded-[10px] border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-primary dark:border-gray-700 dark:bg-black dark:text-gray-200'
                  required
                />
              </label>
              <label className='block text-sm font-bold text-gray-900 dark:text-white'>
                Last Name
                <input
                  name='last_name'
                  type='text'
                  placeholder='Last name'
                  className='mt-2 w-full rounded-[10px] border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-primary dark:border-gray-700 dark:bg-black dark:text-gray-200'
                  required
                />
              </label>
            </div>

            <label className='mt-6 block text-sm font-bold text-gray-900 dark:text-white'>
              Email
              <input
                name='email'
                type='email'
                placeholder='you@company.com'
                className='mt-2 w-full rounded-[10px] border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-primary dark:border-gray-700 dark:bg-black dark:text-gray-200'
                required
              />
            </label>

            <label className='mt-6 block text-sm font-bold text-gray-900 dark:text-white'>
              Phone
              <input
                name='phone'
                type='tel'
                placeholder='+91 98765 43210'
                className='mt-2 w-full rounded-[10px] border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-primary dark:border-gray-700 dark:bg-black dark:text-gray-200'
              />
            </label>

            <label className='mt-6 block text-sm font-bold text-gray-900 dark:text-white'>
              Select which service
              <select
                name='service'
                className='mt-2 w-full rounded-[10px] border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-primary dark:border-gray-700 dark:bg-black dark:text-gray-200'
              >
                {servicesData.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
                <option>Other</option>
              </select>
            </label>

            <label className='mt-6 block text-sm font-bold text-gray-900 dark:text-white'>
              Message
              <textarea
                name='message'
                rows={7}
                placeholder='Tell us about your project'
                className='mt-2 w-full resize-none rounded-[10px] border border-gray-200 bg-white px-4 py-4 text-sm text-gray-700 outline-none transition focus:border-primary dark:border-gray-700 dark:bg-black dark:text-gray-200'
                required
              />
            </label>

            <label className='mt-5 flex items-start gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300'>
              <input
                type='checkbox'
                name='privacy_policy'
                value='Accepted'
                className='mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary'
                required
              />
              <span>
                I accept the website{' '}
                <a href='/privacy-policy' className='font-bold text-primary underline underline-offset-4'>
                  privacy policy
                </a>
                .
              </span>
            </label>

            <button
              type='submit'
              disabled={isSubmitting}
              className='mt-7 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-3 text-sm font-extrabold text-white transition-all hover:scale-103 disabled:cursor-not-allowed disabled:opacity-60'
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
              <img src={assets.arrow_icon} alt='' className='w-4' />
            </button>
          </Motion.form>
        </div>
      </section>

      <section className='bg-white px-4 pb-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-gray-950'>
        <div className='mx-auto grid max-w-6xl gap-5 md:grid-cols-2'>
          {contactDetails.map((detail, index) => (
            <Motion.div
              key={detail.label}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className='rounded-[16px] border border-gray-200 bg-[#f8f8f7] p-7 dark:border-gray-800 dark:bg-gray-900'
            >
              <p className='text-xs font-extrabold uppercase tracking-[0.18em] text-primary'>
                {detail.label}
              </p>
              {detail.href ? (
                <a
                  href={detail.href}
                  className='mt-5 block text-2xl font-extrabold leading-tight text-gray-950 transition hover:text-primary dark:text-white'
                >
                  {detail.value}
                </a>
              ) : (
                <p className='mt-5 text-2xl font-extrabold leading-tight text-gray-950 dark:text-white'>
                  {detail.value}
                </p>
              )}
            </Motion.div>
          ))}
        </div>
      </section>

      <section className='bg-white px-4 py-20 sm:px-12 lg:px-24 xl:px-40 dark:bg-black'>
        <div className='mx-auto max-w-6xl'>
          <iframe
            title='Amazonis office location map'
            src={mapUrl}
            className='h-[360px] w-full rounded-[14px] border-0 sm:h-[460px]'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </section>
    </main>
  )
}

export default ContactPage
