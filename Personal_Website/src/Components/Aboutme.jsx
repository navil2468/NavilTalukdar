import React from 'react'

function Aboutme() {
  return (
    <div className='lg:mx-7 sm:mx-7 mx-10 mt-45 lg:flex relative lg:justify-center font-mono' >
        <div className='text-center flex items-center text-pink-200 lg:w-150 max-w-screen'>
           <ul className='lg:space-y-3 text-start list-disc text-4xl'>
            <li>Columbia University sophomore, majoring in Computer Science</li>
            <li>Lifelong puzzle-solver</li>
            <li>Front-end developer</li>
            {/* <li>Full-stack builder fluent in React, Node.js, Tailwind, and PostgreSQL</li> */}
            <li>Loves challeneges and riddles</li>
           </ul>
        </div>
        <div className='bg-pink-100 p-5 px-10 text-neutral-900 text-center rounded-4xl'>
            <h1 className='text-9xl'>WHO</h1>
            <h1 className='text-9xl'>AM</h1>
            <h1 className='text-9xl'>I❓</h1>
        </div>
    </div>
  )
}

export default Aboutme
