import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Profile Image */}
        <div className="flex flex-col items-center mb-4">
          <Image
            src="/sandeep.avif"
            alt="profile image"
            width={128}
            height={128}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </div>

        {/* Heading */}
        <h1 className='text-4xl md:text-6xl font-bold mb-6'>
          Hi, I'm <span className='text-primary'>Sandeep Kumar</span>
        </h1>

        {/* Subtitle */}
        <p className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>
          Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
        </p>
        
        {/* ✅ All Social Links in one flex */}
        <div className='flex justify-center space-x-6 mb-8 text-2xl text-gray-600 dark:text-gray-300'>
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

        <div className='flex flex-col md:flex-row justify-center gap-4'>
            <Link href="/projects" className='bg-primary inline-block w-full md:w-auto text-withe px-8 
            py-3 rounded-lg hover:bg-primary/80 transition-color'>View Project</Link>
            
            <Link href="/contact" className='bg-gray-500 inline-block w-full md:w-auto text-white
             hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors'>Contact Me </Link>
        </div>

      </div>
    </section>
  )
}

export default Hero
