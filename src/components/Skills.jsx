

import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen bg-gray-900 px-6 py-16 text-gray-800 flex items-center justify-center ">
      <div className="max-w-6xl w-full text-center space-y-12 ">
        <h2 className="text-4xl font-bold text-white">Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center text-white">
          {/* Skill Card */}
          <div className="flex flex-col items-center space-y-2">
            <FaHtml5 className="text-6xl text-orange-600" />
            <p className="font-semibold">HTML</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaCss3Alt className="text-6xl text-blue-500" />
            <p className="font-semibold">CSS</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaJs className="text-6xl text-yellow-400" />
            <p className="font-semibold">JavaScript</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <SiTypescript className="text-6xl text-blue-700" />
            <p className="font-semibold">TypeScript</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <SiTailwindcss className="text-6xl text-cyan-500" />
            <p className="font-semibold">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaReact className="text-6xl text-blue-400 animate-spin-slow" />
            <p className="font-semibold">React</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaAngular className="text-6xl text-red-500" />
            <p className="font-semibold">Angular</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
