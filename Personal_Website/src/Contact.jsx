import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-purple-950'>
      <h1 className='text-4xl pb-35 text-pink-300'>Contact</h1>
      <div className='pt-2'>
        <Link to={'/'} className='text-4xl pb-35 text-pink-500'>Homepage</Link>
      </div>
    </div>
  )
}

export default Contact
