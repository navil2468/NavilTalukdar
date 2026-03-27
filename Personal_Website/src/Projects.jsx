import React from 'react'
import Navbar from './pages/Navbar'

function Projects() {
  const url1 = 'https://www.golamsvision.com';
  const url2 = 'https://www.shopnoaid.org';
  
  return (
    <>
      <Navbar />
      <div className='justify-center text-center min-h-screen mb-10 px-4'>
        <div className='bg-gradient-to-br from-pink-100 to-pink-50 text-neutral-900 rounded-3xl mx-auto inline-block lg:px-15 sm:px-10 px-5 py-8 my-15 shadow-2xl border-4 border-pink-200'>
          <h2 className='lg:text-7xl sm:text-6xl text-5xl font-bold'>Freelance Work</h2>
        </div>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto mt-20'>
          <div className='flex flex-col group'>
            <a 
              className='text-pink-200 hover:text-blue-200 text-3xl mb-6 font-semibold transition-colors duration-300' 
              href={url1} 
              target='_blank'
              rel='noopener noreferrer'
            >
              GolamsVision
            </a>
            <div className='border-4 border-blue-200 rounded-lg shadow-2xl overflow-hidden group-hover:border-pink-200 transition-all duration-500'>
              <iframe 
                src={url1}
                title='GolamsVision'
                className='w-full h-96 lg:h-[600px]'
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className='flex flex-col group'>
            <a 
              className='text-blue-200 hover:text-pink-200 text-3xl mb-6 font-semibold transition-colors duration-300' 
              href={url2} 
              target='_blank'
              rel='noopener noreferrer'
            >
              ShopnoAid
            </a>
            <div className='border-4 border-pink-200 rounded-lg shadow-2xl overflow-hidden group-hover:border-blue-200 transition-all duration-500'>
              <iframe 
                src={url2}
                title='ShopnoAid'
                className='w-full h-96 lg:h-[600px]'
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className='flex justify-center text-center min-h-screen pb-35 px-4 '>
        <div className='w-full'>
          <div className='bg-gradient-to-br from-blue-100 to-blue-50 text-neutral-900 rounded-3xl mx-auto inline-block lg:px-15 sm:px-10 px-5 py-8 mb-20 shadow-2xl border-4 border-blue-200'>
            <h2 className='lg:text-7xl sm:text-6xl text-5xl font-bold'>Personal Projects</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto'>
            // Your personal projects will go here
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Projects