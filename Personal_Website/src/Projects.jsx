import React from 'react'
import Navbar from './Components/Navbar'

function Projects() {
  const url1 = 'https://www.golamsvision.com';
  const url2 = 'https://www.shopnoaid.org';
  return (
    <>
      <Navbar />
      <div className='justify-center text-center text-blue-200 min-h-screen mb-10 px-4'>
        <h2 className='bg-pink-100 text-black text-5xl p-4 rounded-2xl inline-block my-15'>Freelance Work</h2>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-6xl mx-auto'>
          <div className='flex flex-col'>
          <a className='hover:text-white text-2xl mb-4' href={url1} target='_blank'>GolamsVision</a>
            <iframe 
              src={url1}
              title='GolamsVision'
              className='w-full h-96 lg:h-[600px] rounded-lg shadow-lg'
              allowFullScreen
            ></iframe>
          </div>
          
          <div className='flex flex-col'>
          <a className='hover:text-white text-2xl mb-4' href={url2} target='_blank'>ShopnoAid</a>
            <iframe 
              src={url2}
              title='ShopnoAid'
              className='w-full h-96 lg:h-[600px] rounded-lg shadow-lg'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* <div className='flex justify-center text-center text-blue-200 h-screen pb-35'>
        <h2 className='text-5xl'>Personal Projects</h2>
        <div>
        </div>
        <div>
        </div>
      </div> */}
    </>
  )
}

export default Projects
