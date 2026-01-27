import React from 'react'

function Hobbies() {
  return (
    <div data-aos='fade-up' className='flex-col justify-center text-center mt-55 mb-25'>
      <div className='bg-gradient-to-br from-pink-100 to-pink-50 text-neutral-900 rounded-3xl mx-auto inline-block lg:px-15 sm:px-10 px-5 py-8 shadow-2xl border-4 border-pink-200'>
        <h1 className='lg:text-8xl sm:text-7xl text-6xl font-bold'>INTERESTS</h1>
      </div>
      <div className='lg:mt-15 mt-10'>
        <ul className='lg:space-y-10 space-y-5 lg:text-5xl sm:text-4xl text-3xl'>
            <li className='text-pink-200 hover:text-pink-100 transition-colors duration-300'>Basketball</li>
            <li className='text-blue-200 hover:text-blue-100 transition-colors duration-300'>Exercise</li>
            <li className='text-pink-200 hover:text-pink-100 transition-colors duration-300'>Cars</li>
            <li className='text-blue-200 hover:text-blue-100 transition-colors duration-300'>Food</li>
            <li className='text-pink-200 hover:text-pink-100 transition-colors duration-300'>Traveling</li>
        </ul>
      </div>
    </div>
  )
}

export default Hobbies