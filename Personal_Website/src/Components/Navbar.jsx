import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { SocialIcon } from 'react-social-icons'


function Navbar() {
  const[ open, setOpen ] = useState(false)
  return (
    <div className='px-7 flex justify-between font-mono sticky top-0 z-150 py-3 backdrop-blur-lg'>
      <Link to={'/'}><h1 className='font-bold mt-2 text-2xl hover:text-pink-200 cursor-pointer'>Navil Talukdar</h1></Link>
      <div>
        <Hamburger toggled={open} toggle={setOpen}/>
        {open && 
        <div className='text-neutral-800 fixed top-0 left-0 z-50 bg-pink-100 h-screen w-screen space-y-18'>
          <div className='absolute top-3 right-7'>
            <Hamburger size={35} toggled={open} toggle={setOpen} />
          </div>  
          <ul className='pt-35 text-center space-y-15 text-4xl lg:text-5xl'>
            <li className='hover:text-blue-300 cursor-pointer'><Link to={'../Projects'}>PROJECTS</Link></li>
            <li className='hover:text-blue-300 cursor-pointer'><a href='https://drive.google.com/file/d/1gMRnmk5pCGkwX2nCpzm6Te_Slc9DQYKg/view?usp=share_link' target='_blank'>RESUME</a></li>
            <Link to={'../Contact'}><li className='hover:text-blue-300 cursor-pointer'>CONTACT</li></Link>
          </ul>
          <div className=' pt-24 flex justify-center space-x-7 text-5xl'>
            <SocialIcon url='www.instagram.com' href='https://www.instagram.com/navil2468/' target='_blank '/>
            <SocialIcon url='www.linkedin.com' href='www.linkedin.com/in/navil-talukdar' target='_blank '/>
            <SocialIcon url='www.github.com' href='https://github.com/navil2468' target='_blank'/>
            <SocialIcon url='www.email.com' href='mailto:naviltalukdar3@gmail.com' target='_blank'/>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;

