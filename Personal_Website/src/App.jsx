import React from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-yellow-100'>
      <h1 className='text-4xl pb-35 text-orange-900'>HOMEPAGE</h1>
      <Link to={'/Contact'}><h1 className='text-4xl pb-35 text-orange-500'>Contact</h1></Link>
    </div>
  )
}

export default App