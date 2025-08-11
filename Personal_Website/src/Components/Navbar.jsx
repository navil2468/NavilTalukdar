import React from 'react'
import { useState } from 'react'

function Navbar() {
  const [open, setopen] = useState(false);
  
  return (
    <div className='mx-6 mt-7 flex justify-between'>
      <h1 className='font-bold text-xl'>NAVIL TALUKDAR</h1>
      <div className='text-3xl'>
        -
        {/* HAMBURGER MENU */}
      </div>
    </div>
  )
}

export default Navbar
