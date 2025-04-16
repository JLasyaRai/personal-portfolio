import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="min-h-screen bg-gray-900 px-6 py-16 text-white flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-blue-500 text-center mb-12">Experience</h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {/* Front-End Intern */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-blue-400">Front-End Developer Intern</h3>
            <p className="text-sm text-gray-400 mb-4">Perficient Inc · Jan 2025 - Present</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Developed and styled responsive web pages using HTML, CSS, and JavaScript, ensuring a seamless user experience across devices.</li>
              <li>Worked with React.js to build interactive UI components, optimizing performance and improving code reusability.</li>
              <li>Collaborated with the team to debug and enhance web applications, utilizing version control tools like Git for efficient development.</li>
            </ul>
          </div>

          {/* Data Science Intern */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-purple-400">Data Science Intern</h3>
            <p className="text-sm text-gray-400 mb-4">Zephyr Technologies and Solutions Pvt Ltd · Aug 2023 – Sept 2023</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Designed and implemented a Heart Disease Prediction System using logistic regression, optimizing model performance through data preprocessing and feature engineering.</li>
              <li>Worked with Python libraries like Pandas, NumPy, and Scikit-Learn for data cleaning, analysis, and modeling, using Jupyter Notebook for visualization and iteration.</li>
              <li>Presented project insights to team members and mentors, highlighting technical details and practical implications.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
