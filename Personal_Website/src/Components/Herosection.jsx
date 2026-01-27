import React from 'react'
import profile from '../assets/ProfilePic.JPG'

function HeroSection() {
  return (
    <div data-aos='fade-up' className='mx-10 mt-10 lg:flex relative lg:justify-center items-center gap-16' >
        <div className='lg:space-y-1 space-y-0 text-center'>
            <h1 className='text-9xl tracking-wide leading-none font-bold bg-gradient-to-r from-pink-200 to-blue-200 bg-clip-text text-transparent'>
              THIS
            </h1>
            <h1 className='text-9xl tracking-wide leading-none font-bold bg-gradient-to-r from-blue-200 to-pink-200 bg-clip-text text-transparent'>
              IS ME
            </h1>
        </div>
        <div className='lg:mt-0 mt-15'>
          <img 
            className='lg:h-133 sm:h-130 max-w-full h-110 rounded-xl mx-auto shadow-2xl shadow-pink-200/20 hover:border-blue-200 transition-all duration-500' 
            src={profile} 
            alt='Navil Talukdar'
          />
        </div>
    </div>
  )
}

export default HeroSection