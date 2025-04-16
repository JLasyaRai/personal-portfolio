import React from 'react'
import las from "../assets/las.jpg"

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-900 px-6 py-16 text-white"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
        
        {/* Text Section (Left) */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-blue-500">About Me</h2>
          <p className="text-lg text-gray-300">
            I’m a frontend developer with a passion for crafting clean,
            responsive, and visually engaging web interfaces. I specialize in
            turning creative ideas into functional digital experiences using
            HTML, CSS, JavaScript, and modern frameworks like React and Angular.
            My work focuses on delivering user-centric designs with attention to
            detail, performance, and accessibility.
          </p>
        </div>

        {/* Image Section (Right) */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 shadow-lg">
            <img src={las} alt="Lasya" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
