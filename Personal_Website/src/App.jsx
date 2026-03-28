import React, { useEffect } from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/Herosection'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import aos from 'aos'
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <div style={{ backgroundColor: '#3C3D37', minHeight: '100vh' }}>
      <title>Navil Talukdar</title>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;