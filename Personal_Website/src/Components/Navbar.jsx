import React from 'react'
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

function Navbar() {
  const [open, setopen] = useState(false);
  
  return (
    <div className='mx-6 mt-7 flex justify-between'>
      <Link to='/'><h1 className='font-bold text-xl hover:text-blue-300 cursor-pointer'>NAVIL TALUKDAR</h1></Link>
      <div className='text-3xl'>
        {/* HAMBURGER MENU */}
      </div>
    </div>
  )
}

export default Navbar
