import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/Herosection'
import Aboutme from './Components/Aboutme'
import Hobbies from './Components/Hobbies'
import Ending from './Components/Ending'
import aos from 'aos'
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    aos.init({duration: 1200, once: true})
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Aboutme />
      <Hobbies />
      <Ending />
    </div>
  )
}

export default App