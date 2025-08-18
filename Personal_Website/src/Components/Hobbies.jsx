import React from 'react'

function Hobbies() {
  return (
    <div className='flex-col justify-center text-center font-mono mt-55 mb-25'>
      <div className='bg-pink-100 text-neutral-900 rounded-3xl mx-auto inline-block lg:px-15 sm:px-10 px-5 py-8'>
        <h1 className='lg:text-8xl sm:text-7xl text-6xl'>HOBBIES</h1>
      </div>
      <div className='lg:mt-20 mt-10'>
        <ul className='text-blue-200 lg:space-y-10 space-y-5 lg:text-5xl sm:text-4xl text-3xl'>
            <li>Basketball</li>
            <li>Eating</li>
            <li>Traveling</li>
            <li>Working Out</li>
            <li>Cooking</li>
        </ul>
      </div>
    </div>
  )
}

export default Hobbies
