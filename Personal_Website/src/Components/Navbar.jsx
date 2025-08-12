import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import Hamburger from 'hamburger-react'

function Navbar() {
  const[ open, setOpen ] = useState(false)
  return (
    <div className='lg:mx-7 sm:mx-7 mx-10 mt-6 flex relative justify-between font-mono'>
      <Link to='/'><h1 className='font-mono font-bold mt-2 text-2xl hover:text-pink-100 cursor-pointer'>Navil Talukdar</h1></Link>
      <div >
        <Hamburger toggled={open} toggle={setOpen}/>
        {open && 
        <div className='text-pink-100 fixed top-0 left-0 z-50 bg-blue-950 h-screen w-screen px-5 py-5 space-y-18'>
          <div className='absolute top-5 right-8 pt-1'>
            <Hamburger size={35} toggled={open} toggle={setOpen} />
          </div>
          <ul className='pt-35 text-center space-y-15 text-5xl'>
            <li className='hover:text-blue-300 cursor-pointer'>Projects</li>
            <li className='hover:text-blue-300 cursor-pointer'>Resume</li>
            <li className='hover:text-blue-300 cursor-pointer'>Contact</li>
          </ul>
          {/* Icons */}
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar;

