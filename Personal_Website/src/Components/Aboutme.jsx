import React from 'react'

function AboutMe() {
  return (
    <div data-aos='fade-up' className='mt-55 relative container mx-auto mb-30 flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:items-center sm:gap-16'>
      <div className='bg-gradient-to-br from-pink-100 to-pink-50 py-8 px-12 text-neutral-900 text-center rounded-4xl inline-block shadow-2xl border-4 border-pink-200'>
        <h1 className='text-7xl lg:text-8xl font-bold leading-tight'>WHO</h1>
        <h1 className='text-7xl lg:text-8xl font-bold leading-tight'>AM</h1>
        <h1 className='text-7xl lg:text-8xl font-bold leading-tight'>
          I<span className='text-blue-400'>?</span>
        </h1>
      </div>

      <div className='text-center flex items-center sm:pt-0 lg:w-150 sm:w-115'>
        <ul className='px-10 space-y-6 lg:text-end sm:text-end text-center lg:text-4xl text-3xl'>
          <li className='text-pink-200 hover:text-pink-100 transition-colors duration-300'>
            Columbia University student
          </li>
          <li className='text-blue-200 hover:text-blue-100 transition-colors duration-300'>
            Software Engineer
          </li>
          <li className='text-pink-200 hover:text-pink-100 transition-colors duration-300'>
            Product Builder
          </li>
          <li className='text-blue-200 hover:text-blue-100 transition-colors duration-300'>
            Thinker
          </li>
          <li className='text-pink-200 hover:text-pink-100 transition-colors duration-300'>
            Doer
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe