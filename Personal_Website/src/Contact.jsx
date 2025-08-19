import React from 'react'
import Navbar from './Components/Navbar'

function Contact() {
  return (
    <div >
      <Navbar />
      <div className='flex-col justify-center text-center font-mono mt-10'>
        <div className='bg-pink-100 text-neutral-900 rounded-3xl mx-auto inline-block lg:px-15 sm:px-10 px-5 py-8'>
          <h1 className='lg:text-8xl sm:text-7xl text-6xl'>Contact Me</h1>
        </div>
        <div className='lg:mt-20 mt-15 border border-pink-200 py-15 rounded-3xl mx-auto inline-block lg:px-20'>
          <ul className='text-blue-200 lg:space-y-10 space-y-5 lg:text-5xl sm:text-4xl text-3xl'>
              <li>Phone Number: 917-528-5084</li>
              <li>Email: <a className='hover:text-white' href='mailto:naviltalukdar3@gmail.com' target='_blank'>naviltalukdar3@gmail.com</a></li>
          </ul>
      </div>
      </div>
    </div>
  )
}

export default Contact
