import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen bg-gray-900 px-6 py-16 text-white flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-10">
        <h2 className="text-4xl font-bold text-blue-500 text-center">Contact Me</h2>
        <p className="text-center text-gray-300 text-lg">
          Just want to say hi ? Feel free to reach out!
        </p>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Let's connect..."
              className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full text-white font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>

        
      </div>
    </div>
  )
}

export default Contact

