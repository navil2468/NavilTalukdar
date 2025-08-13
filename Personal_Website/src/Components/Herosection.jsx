import React from 'react'
import profile from '../assets/ProfilePic.JPG'

function HeroSection() {
  return (
    <div className='lg:mx-7 sm:mx-7 mx-10 mt-6 flex relative justify-center font-mono' >
        <img src={profile} />
    </div>
  )
}

export default HeroSection
