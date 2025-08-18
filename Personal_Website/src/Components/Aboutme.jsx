import React from 'react'

function Aboutme() {
  return (
    <div className='mt-55 lg:flex sm:flex relative container mx-auto lg:justify-center font-mono items-center mb-30' >
        <div className='bg-pink-100 mx-15 py-5 text-neutral-900 text-center rounded-4xl sm:px-10 lg:px-14 lg:py-7'>
            <h1 className='sm:text-8xl lg:text-9xl text-7xl'>WHO</h1>
            <h1 className='sm:text-8xl lg:text-9xl text-7xl'>AM</h1>
            <h1 className='sm:text-8xl lg:text-9xl text-7xl'>I<span className='text-red-600'>?</span></h1>
        </div>
        <div className='text-center flex items-center pt-25 sm:pt-0 text-blue-200 lg:w-150 sm:w-115'>
           <ul className='px-10 lg:space-y-7 lg:text-end sm:text-end text-center space-y-12 lg:text-4xl text-3xl'>
            <li>Columbia University Sophomore</li>
            <li>CS Major</li>
            <li>Lifelong Puzzle Solver</li>
            <li>Front-End Developer</li>
            {/* <li>Full-stack builder fluent in React, Node.js, Tailwind, and PostgreSQL</li> */}
            <li>Loves challeneges and riddles</li>
           </ul>
        </div>
    </div>
  )
}

export default Aboutme
