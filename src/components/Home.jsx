import lasya from "../assets/lasya.jpg"

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-2xl">
        
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-64 md:h-64 mb-8 rounded-full overflow-hidden shadow-lg border-4 border-white">
          <img
            src={lasya}
            alt="Lasya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Hi, I'm <span className="text-blue-600">Lasya Rai</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          A passionate <span className="font-semibold text-purple-600">Front-End Developer</span>
        </h2>
        
        <div className="flex gap-6 mb-6">
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/lasyarai/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          
          {/* GitHub Icon */}
          <a href="https://github.com/JLasyaRai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
            <i className="fab fa-github fa-2x"></i>
          </a>

          {/* Download CV Button */}
          <a href="/J_LASYA_RAI_NEW_RESUME.pdf" download>
            <button className="bg-green-600 text-sm px-4 py-2 rounded-full hover:bg-green-700 transition">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
