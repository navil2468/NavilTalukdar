import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function HeroSection() {
  return (
    <section
      data-aos="fade-up"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="flex flex-col items-center text-center gap-6 max-w-3xl w-full">

        {/* Intro text */}
        <p className="text-sm uppercase tracking-widest text-gray-400 font-light">
          My name is
        </p>

        {/* Name */}
        <h1 className="text-7xl font-bold tracking-tight leading-none bg-gradient-to-r from-blue-200 to-pink-200 bg-clip-text text-transparent">
          Navil Talukdar
        </h1>

        {/* Role */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <p className="text-sm uppercase tracking-widest text-gray-400 font-light">
            and I'm a
          </p>
          <h2 className="text-2xl md:text-3xl tracking-wide bg-gradient-to-r from-blue-200 to-pink-200 bg-clip-text text-transparent">
            Software Engineer | CS @ Columbia | Builder
          </h2>
          <h3 className="text-lg md:text-xl tracking-wide text-gray-400">
            Based in New York
          </h3>
        </div>

        {/* Resume button */}
        <a
          href="https://drive.google.com/file/d/1pmkOkNW1e1dOgnGI6UOvH-2eps4aGBG7/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 border border-white/30 px-8 py-3 rounded-full bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-colors duration-200"
        >
          Resume
        </a>

        {/* Social links */}
        <div className="flex items-center gap-8 mt-2">
          <a
            href="mailto:naviltalukdar3@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          >
            <MdOutlineEmail className="h-7 w-7" />
          </a>
          <a
            href="https://github.com/navil2468"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/navil-talukdar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;