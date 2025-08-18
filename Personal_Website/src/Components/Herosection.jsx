import React from 'react'
import profile from '../assets/ProfilePic.JPG'

function HeroSection() {
  return (
    <div className=' mx-10 mt-22 lg:flex relative lg:justify-center font-mono items-center' >
        <div className='lg:space-y-3 text-blue-100 text-center'>
            <h1 className='text-9xl'>THIS</h1>
            <h1 className='text-9xl'>IS ME</h1>
        </div>
        <div className='lg:mt-0 mt-15 lg:ml-35'>
          <img className='w-98 h-133 rounded-xl mx-auto' src={profile} alt='Navil Talukdar'/>
        </div>
    </div>
  )
}

export default HeroSection
