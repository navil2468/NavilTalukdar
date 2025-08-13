import React from 'react'
import profile from '../assets/ProfilePic.JPG'

function HeroSection() {
  return (
    <div className='lg:mx-7 sm:mx-7 mx-10 mt-6 flex relative justify-center font-mono' >
        <div>
            <h1>THIS IS ME</h1>
        </div>
        <img className='w-52 h-62 rounded-4xl border border-pink-200' src={profile} alt='Navil Talukdar'/>
    </div>
  )
}

export default HeroSection
