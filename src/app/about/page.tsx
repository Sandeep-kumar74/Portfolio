import React from 'react'
import { FaCode, FaLaptopCode, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <div className="container max-w-7xl mx-auto py-20 text-center">
      <h1 className="text-4xl font-bold mb-8">About page</h1>

      {/* bio section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl mx-auto">
          I'm a passionate Full Stack Developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless user
          experiences and robust server-side solutions.
        </p>
      </section>

      {/* skill section */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

          {/* Frontend */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center">
            <FaCode className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Frontend</h3>
            <ul className="text-secondary flex flex-wrap justify-center gap-3">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML / CSS3</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Backend</h3>
            <ul className="text-secondary flex flex-wrap justify-center gap-3">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Others */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-center">
            <FaGraduationCap className="h-8 w-8 text-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Tools & Others</h3>
            <ul className="text-secondary flex flex-wrap justify-center gap-3">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* experiences section */}
      <section className="mb-16">
        <h2 className="section-title mb-8">Experiences</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md text-left">
            <h3 className="text-xl font-semibold mb-2">Senior Full Stack Developer</h3>
            <p className="text-primary mb-4">Company Name - 2020 - Present</p>
            <ul className="text-secondary list-disc list-inside space-y-2">
              <li>Led development of multiple web applications using React and Node.js</li>
              <li>Implemented CI/CD pipeline reducing deployment time by 50%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
