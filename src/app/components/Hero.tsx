'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../utils/animation'

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Profile Image */}
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/sandeep.avif"
            alt="profile image"
            width={128}
            height={128}
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-primary">Sandeep Kumar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full Stack Developer | UI/UX Enthusiast | Open Source Contributor
        </motion.p>

        {/* Social Links */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-6 mb-8 text-2xl text-gray-600 dark:text-gray-300"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Sandeep-kumar74"
            target="_blank"
            className="hover:text-primary transition duration-300"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/sandeep-kumar-45ba7a2a3/"
            target="_blank"
            className="hover:text-primary transition duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="https://x.com/Sandeep749404"
            target="_blank"
            className="hover:text-primary transition duration-300"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          {...fadeInUp}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/projects"
              className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block w-full bg-gray-500 md:w-auto text-gray-800 dark:text-white px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* ✅ New Download CV Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/resume.pdf"
              download="Sandeep-Kumar-Resume.pdf"
              className="inline-block w-full md:w-auto bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>



      </div>
    </section>
  )
}

export default Hero
