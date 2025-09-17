import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
      <div className='container max-w-7xl mx-auto px-4 py-8'>
        <div className='flex flex-row justify-between items-center'>

          <div className='mb-4 md:mb-0'>
            <Link href="/" className='text-xl font-bold text-primary'>Portfolio&trade;</Link>
            <p className='text-sm text-decondary mt-2'>Potfolio. All rights reserved.</p>
          </div>

          <footer className="text-center py-4 text-gray-400">
            © {new Date().getFullYear()} Sandeep Kumar
          </footer>

          {/* ✅ All Social Links in one flex */}
        <div className='flex space-x-6 text-2xl text-gray-600 dark:text-gray-300'>
          <Link 
            href="https://github.com/Sandeep-kumar74" 
            target="_blank" 
            className='hover:text-primary transition duration-300'
          >
            <FaGithub />
          </Link>

          <Link 
            href="https://www.linkedin.com/in/sandeep-kumar-45ba7a2a3/" 
            target="_blank" 
            className='hover:text-primary transition duration-300'
          >
            <FaLinkedin />
          </Link>

          <Link 
            href="https://x.com/Sandeep749404" 
            target="_blank" 
            className='hover:text-primary transition duration-300'
          >
            <FaTwitter />
          </Link>
        </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
