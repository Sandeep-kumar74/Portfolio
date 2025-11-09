'use client'

import React from 'react'
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInDown, 
  fadeIn, 
  staggerContainer
} from '../utils/animation'

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20 text-center">
      {/* Heading */}
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial="initial"
        animate="animate"
        variants={fadeInDown}
      >
        About page
      </motion.h1>

      {/* bio section */}
      <motion.section 
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h2>Hi,I'm Sandeep Kumar</h2>
        <p className="text-lg text-secondary max-w-3xl mx-auto">I'm a 3rd-Year BCA student from INDIA</p>
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          I'm a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless user
          experiences and robust server-side solutions.
        </p>
      </motion.section>

      {/* skill section */}
      <motion.section 
        className="mb-16" 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ delay: 0.2 }}
      >
        <motion.h2 className="section-title mb-8" variants={fadeInUp}>Skills</motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Frontend */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaCode className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="text-secondary flex flex-wrap justify-center gap-3">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS3</li>
            </ul>
          </motion.div>

          {/* Backend */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLaptopCode className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="text-secondary flex flex-wrap justify-center gap-3">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>

          {/* Tools & Others */}
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGraduationCap className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
            <ul className="text-secondary flex flex-wrap justify-center gap-3">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* experiences section */}
      <motion.section 
        className="mb-16" 
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ delay: 0.4 }}
      >
        <motion.h2 className="section-title mb-8" variants={fadeInUp}>Experiences</motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Member, Soft Computing Research Society Student Chapter</h3>
            <p className="text-primary mb-4">Babu Banarasi Das University, Lucknow 2023-26</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications</li>
              <li>Participating in technical events software exhibition with 2nd position</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-4">Self-Employed with Friends Remote</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Developed and maintained RESTful APIs </li>
              <li>Built responsive user interfaces with modern Next.js frameworks</li>
              <li>Optimized database queries improving performance by 100%</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* education section */}
      <motion.section 
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ delay: 0.6 }}
      >
        <motion.h2 className="section-title mb-8" variants={fadeInUp}>Education</motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div 
            className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-left"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">Bachelor of Computer Application (Data Science & Artificial Intelligence)</h3>
            <p className="text-primary mb-4">Babu Banarasi Das University (Lucknow) - 2023-2026</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Graduated with honors. Focused on software engineering or web developer and Data engineering</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default About
