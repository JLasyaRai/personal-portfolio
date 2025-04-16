import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="min-h-screen bg-gray-900 px-6 py-16 text-white flex items-center justify-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">Projects</h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
          {/* Hey-Foodie Project */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-[30%]">
            <h3 className="text-2xl font-semibold text-pink-400">Hey-Foodie Recipe Web App</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Developed a dynamic recipe web app with features to browse, add, edit, and delete recipes.</li>
              <li>Used React.js and state management for seamless user experience.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-semibold text-white">Technologies:</span> HTML, Tailwind CSS, React, Material UI
            </p>
          </div>

          {/* Diabetes Diet Planner */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-[30%]">
            <h3 className="text-2xl font-semibold text-green-400">Diabetes Diet Planner System</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>Built a mobile app using ML to predict diabetes type and generate personalized diet plans.</li>
              <li>Included relevant articles and health tips for better awareness.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-semibold text-white">Technologies:</span> Python, Machine Learning, SQL
            </p>
          </div>

          {/* Hospital Management System */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-[30%]">
            <h3 className="text-2xl font-semibold text-blue-400">Hospital Management System</h3>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>The Hospital Management System efficiently manages patient and doctor information, diagnoses, and hospital data.</li>
              <li>It streamlines appointments, patient records, and medical history management for better healthcare efficiency.</li>
            </ul>
            <p className="text-sm text-gray-400 mt-4">
              <span className="font-semibold text-white">Technologies:</span> HTML, CSS, JavaScript, SQL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

