import React, { useState } from 'react'
import { motion as Motion } from 'motion/react'
import toast from 'react-hot-toast'
import assets from '../assets/assets'
import Title from './Title'
import {
  WEB3FORMS_ENDPOINT,
  isWeb3FormsReady,
  prepareWeb3FormsData,
} from '../config/web3forms'

const ContactUs = () => {
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
      subject: 'New Amazonis homepage enquiry',
      source: 'Homepage contact section',
    })

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
    <Motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id='contact-us'
      className='flex flex-col items-center gap-7 px-4 pt-30 text-gray-700 sm:px-12 lg:px-24 xl:px-40 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <Motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className='grid w-full max-w-2xl gap-3 sm:grid-cols-2 sm:gap-5'
      >
        <input type='checkbox' name='botcheck' className='hidden' tabIndex='-1' autoComplete='off' />

        <div>
          <label htmlFor='homepage-name' className='mb-2 block text-sm font-medium'>Your name</label>
          <div className='flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600'>
            <img src={assets.person_icon} alt='' />
            <input
              id='homepage-name'
              name='name'
              type='text'
              placeholder='Enter your name'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor='homepage-email' className='mb-2 block text-sm font-medium'>Email id</label>
          <div className='flex rounded-lg border border-gray-300 pl-3 dark:border-gray-600'>
            <img src={assets.email_icon} alt='' />
            <input
              id='homepage-email'
              name='email'
              type='email'
              placeholder='Enter your email'
              className='w-full p-3 text-sm outline-none'
              required
            />
          </div>
        </div>

        <div className='sm:col-span-2'>
          <label htmlFor='homepage-message' className='mb-2 block text-sm font-medium'>Message</label>
          <textarea
            id='homepage-message'
            name='message'
            rows={8}
            placeholder='Enter your message'
            className='w-full resize-none rounded-lg border border-gray-300 p-3 text-sm outline-none dark:border-gray-600'
            required
          />
        </div>

        <button
          type='submit'
          disabled={isSubmitting}
          className='flex w-max cursor-pointer gap-2 rounded-full bg-primary px-10 py-3 text-sm text-white transition-all hover:scale-103 disabled:cursor-not-allowed disabled:opacity-60'
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
          <img src={assets.arrow_icon} alt='' className='w-4' />
        </button>
      </Motion.form>
    </Motion.div>
  )
}

export default ContactUs
