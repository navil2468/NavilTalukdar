import React from 'react'
import Navbar from './Components/Navbar'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className='flex-col justify-center text-center mt-10'>
        <div className='bg-gradient-to-br from-pink-100 to-pink-50 text-neutral-900 rounded-3xl mx-auto inline-block lg:px-15 sm:px-10 px-5 py-8 shadow-2xl border-4 border-pink-200'>
          <h1 className='lg:text-8xl sm:text-7xl text-6xl font-bold'>Contact Me</h1>
        </div>
        <div className='lg:mt-20 mt-15 border-4 border-blue-200 bg-blue-200/5 py-15 rounded-3xl mx-auto inline-block lg:px-20 px-10 shadow-xl hover:border-pink-200 transition-all duration-500'>
          <ul className='lg:space-y-10 space-y-5 lg:text-5xl sm:text-4xl text-3xl'>
              <li className='text-pink-200'>
                <span className='text-blue-200'>Phone Number:</span> 917-528-5084
              </li>
              <li className='text-pink-200'>
                <span className='text-blue-200'>Email:</span>{' '}
                <a 
                  className='hover:text-blue-100 transition-colors duration-300 underline decoration-blue-200/50' 
                  href='mailto:naviltalukdar3@gmail.com' 
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  naviltalukdar3@gmail.com
                </a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact