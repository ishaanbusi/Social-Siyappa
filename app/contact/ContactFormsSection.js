'use client'

import { useState } from 'react'

export default function ContactFormsSection() {
  const [leftForm, setLeftForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [rightForm, setRightForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleLeftFormChange = (e) => {
    setLeftForm({
      ...leftForm,
      [e.target.name]: e.target.value
    })
  }

  const handleRightFormChange = (e) => {
    setRightForm({
      ...rightForm,
      [e.target.name]: e.target.value
    })
  }

  const handleLeftSubmit = (e) => {
    e.preventDefault()
    console.log('Left form submitted:', leftForm)
  }

  const handleRightSubmit = (e) => {
    e.preventDefault()
    console.log('Right form submitted:', rightForm)
  }

  return (
    <section className="min-h-screen flex">
      
      {/* Left Form - Black Background */}
      <div className="flex-1 bg-black text-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <form onSubmit={handleLeftSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label htmlFor="left-name" className="block text-sm font-medium mb-3">
                Name and Surname
              </label>
              <input
                type="text"
                id="left-name"
                name="name"
                value={leftForm.name}
                onChange={handleLeftFormChange}
                className="w-full px-4 py-4 bg-white text-black rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="left-email" className="block text-sm font-medium mb-3">
                Email address
              </label>
              <input
                type="email"
                id="left-email"
                name="email"
                value={leftForm.email}
                onChange={handleLeftFormChange}
                className="w-full px-4 py-4 bg-white text-black rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="left-message" className="block text-sm font-medium mb-3">
                Comment or Message
              </label>
              <textarea
                id="left-message"
                name="message"
                value={leftForm.message}
                onChange={handleLeftFormChange}
                rows={6}
                className="w-full px-4 py-4 bg-white text-black rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Dividing Line */}
      <div className="w-px bg-gray-300"></div>

      {/* Right Form - White Background with Card */}
      <div className="flex-1 bg-white p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          
          {/* Newsletter Card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
            
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-black">
                SIGN UP FOR OUR NEWSLETTER
              </h3>
            </div>

            <form onSubmit={handleRightSubmit} className="space-y-4">
              
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={rightForm.name}
                  onChange={handleRightFormChange}
                  className="w-full px-4 py-3 bg-gray-200 text-black rounded-lg border-0 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={rightForm.email}
                  onChange={handleRightFormChange}
                  className="w-full px-4 py-3 bg-gray-200 text-black rounded-lg border-0 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder="Comment or Message"
                  value={rightForm.message}
                  onChange={handleRightFormChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-200 text-black rounded-lg border-0 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
