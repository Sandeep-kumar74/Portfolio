'use client'

import { projects } from '@/contents/projects'
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { cardHoverSmall, fadeInUp, staggerContainer } from '../utils/animation'

const Project = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20 px-4'>
      <motion.h1 
      className='text-4xl font-bold mb-4 text-center'
      initial={{ opacity: 0, y: -20}}
      animate={{ opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      >
        My Projects
      </motion.h1>
      <motion.p 
      className='text-center mb-24 mt-4 text-secondary text-lg'
      initial={{ opacity: 0, y: 20}}
      animate={{ opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.2}}
      >
        Here are some of my recent projects. Click on the links to view the code or live demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 flex flex-col justify-between"
            variants={fadeInUp}
            whileHover={cardHoverSmall.whileHover}
          >
            {/* Project Image */}
            <motion.div
              className="relative aspect-video mb-4 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>

            {/* Title */}
            <motion.h3
              className="text-xl font-semibold mb-2"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-gray-600 dark:text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {project.description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Links - always horizontal */}
            <motion.div
              className="flex flex-row gap-4 mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="h-5 w-5" />
                <span>Code</span>
              </motion.a>

              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="h-5 w-5" />
                <span>Live Demo</span>
              </motion.a>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}

export default Project
