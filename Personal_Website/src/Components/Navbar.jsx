import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'


function Navbar() {
  return (
    <div className='p-7 flex justify-between sticky top-0 z-150 px-20 backdrop-blur-lg border-b border-gray-600'>
    <Link to={'/'}><h1 className='font-bold text-2xl hover:text-pink-200 cursor-pointer'>Navil Talukdar</h1></Link>
      <div className='flex space-x-5 pt-2'>
        <p>About</p>
        <p>Experience</p>
        <p>Projects</p>
        <p>Skills</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar;

