import { useState } from "react"
import { Link } from "react-scroll"
import { Menu, X } from "lucide-react" // you can also use any other icon set

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ["home", "about", "skills", "education", "experience", "projects", "contact"]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white cursor-pointer">
          <Link to="home" smooth={true} duration={500}>LasyaRai</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {navItems.map(item => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="capitalize cursor-pointer hover:text-blue-600 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white text-black py-4 gap-4 shadow-md">
          {navItems.map(item => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="capitalize cursor-pointer hover:text-blue-600 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar
