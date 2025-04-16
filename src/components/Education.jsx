import React from 'react'

const Education = () => {
  return (
    <div id="education" className="min-h-screen bg-gray-900 px-6 py-16 text-gray-900 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-12">
        <h2 className="text-4xl font-bold text-blue-600 text-center">Education</h2>

        <div className="space-y-8">
          {/* B.E */}
          <div className="bg-gray-100 shadow-md rounded-xl p-6 flex justify-between items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold">Bachelor of Engineering (B.E)</h3>
              <p className="text-gray-600">Computer Science & Engineering<br />St Joseph Engineering College (VTU)</p>
            </div>
            <div className="w-full md:w-1/2 text-center text-blue-500 font-medium text-lg">
              2020 - 2024
            </div>
          </div>

          {/* PUC */}
          <div className="bg-gray-100 shadow-md rounded-xl p-6 flex justify-between items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold">Pre-University Course (PUC)</h3>
              <p className="text-gray-600">Science Stream<br />Sharada INDP PU College</p>
            </div>
            <div className="w-full md:w-1/2 text-center text-purple-500 font-medium text-lg">
              2018 - 2020
            </div>
          </div>

          {/* SSLC */}
          <div className="bg-gray-100 shadow-md rounded-xl p-6 flex justify-between items-center flex-col md:flex-row">
            <div className="w-full md:w-1/2 text-center mb-4 md:mb-0">
              <h3 className="text-2xl font-semibold">SSLC (10th Grade)</h3>
              <p className="text-gray-600">Ladyhill Victoria Girls High School</p>
            </div>
            <div className="w-full md:w-1/2 text-center text-pink-500 font-medium text-lg">
              2017 - 2018
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
