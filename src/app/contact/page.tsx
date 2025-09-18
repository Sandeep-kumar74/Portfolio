'use client'

import Link from 'next/link';
import React, { useState } from 'react'
import { FaEnvelope, FaLocationArrow, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error"

const Contact = () => {
  const [] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  const [status, setStatus] = useState("idle");
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-24 text-center'>Contact page</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>

        {/* contact info */}
        <div className='space-y-8'>
          <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
          <p className='text-secondary md:w-2/3'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
          <div className='space-y-4'>

            <div className='flex items-center gap-4 '>
              <FaEnvelope className='w-6 h-6 text-primary' />
              <div>
                <h3 className='text-semibold'>Email</h3>
                <Link href='https://mail.google.com/mail/u/0/#inbox' className='text-secondary hover:text-primary'>munnakumr74975@gmail.com</Link>
              </div>
            </div>

            <div className='flex items-center gap-4 '>
              <FaPhone className='w-6 h-6 text-primary' />
              <div>
                <h3 className='text-semibold'>Phone</h3>
                <Link href='tel: +91 7494042474' className='text-secondary hover:text-primary'>+91 7494042474</Link>
              </div>
            </div>

            <div className='flex items-center gap-4 '>
              <FaMapMarkerAlt className='w-6 h-6 text-primary' />
              <div>
                <h3 className='text-semibold'>Location</h3>
                <p className='text-secondary hover:text-primary'>Lucknow Utterpardesh India</p>
              </div>
            </div>
          </div>
        </div>

        {/*contact form  */}
        <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
          <form className='space-y-6'>
            <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
            <input
              required 
              type="text" id='name' name='name' placeholder='Enter your Name'
              className='w-full px-4 py-2 rounded-md placeholder:text-white/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:bordr-non' />

            <div>
              <form className='space-y-6'>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Email</label>
                <input
                  required
                  type="email" id='email' name='email' placeholder='Enter your Email'
                  className='w-full px-4 py-2 rounded-md placeholder:text-white/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:bordr-non' />
              </form>
            </div>

            <div >
              <form className='space-y-6'>
                <label htmlFor="" className='block text-sm font-medium mb-2'>Message</label>
                <textarea
                  rows={4}
                  required
                  id='message' name='message' placeholder='Enter your Message'
                  className='w-full px-4 py-2 rounded-md  placeholder:text-white/50 border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark focus:ring-2 focus:ring-primary focus:bordr-non' />
              </form>
            </div>

            <button type="submit" className='w-full btn btn-primary'>
              {status === 'loading' ? "sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;