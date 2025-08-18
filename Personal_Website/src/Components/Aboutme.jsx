import React from 'react'

function Aboutme() {
  return (
  <div className='mt-55 relative container mx-auto font-mono mb-30 flex flex-col items-center sm:flex-row sm:justify-center sm:items-center'>
    <div className='bg-pink-100 py-5 text-neutral-900 text-center rounded-4xl px-15 inline-block mb-10 sm:mb-0'>
      <h1 className='text-8xl lg:text-9xl'>WHO</h1>
      <h1 className='text-8xl lg:text-9xl'>AM</h1>
      <h1 className='text-8xl lg:text-9xl'>I<span className='text-red-600'>?</span>
      </h1>
    </div>

    <div className='text-center flex items-center sm:pt-0 text-blue-200 lg:w-150 sm:w-115'>
      <ul className='px-10 lg:space-y-8 lg:text-end sm:text-end text-center space-y-10 lg:text-4xl text-3xl'>
        <li>Columbia University Sophomore</li>
        <li>CS Major</li>
        <li>Lifelong Puzzle Solver</li>
        <li>Front-End Developer</li>
        <li>Loves Challenges and Riddles</li>
      </ul>
    </div>
  </div>
  )
}

export default Aboutme
