import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function HeroSection() {
  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="min-h-screen flex items-center justify-center px-5 sm:px-10 lg:px-20"
    >
      <div className="flex flex-col items-center text-center gap-5 max-w-3xl w-full">
        <p className="text-xs uppercase tracking-widest font-light" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
          My name is
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none" style={{ color: '#ECDFCC' }}>
          Navil Talukdar
        </h1>
        <div className="flex flex-col items-center gap-2 mt-1">
          <p className="text-xs uppercase tracking-widest font-light" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
            and I'm a
          </p>
          <h2 className="text-2xl md:text-3xl tracking-wide" style={{ color: '#ECDFCC' }}>
            Builder | Software Engineer | CS Major
          </h2>
          <h3 className="text-lg tracking-wide" style={{ color: 'rgba(236, 223, 204, 0.55)' }}>
            Based in New York
          </h3>
        </div>

        <a
          href="https://drive.google.com/file/d/1pmkOkNW1e1dOgnGI6UOvH-2eps4aGBG7/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200"
          style={{ backgroundColor: '#ECDFCC', color: '#181C14', border: '1px solid rgba(236, 223, 204, 0.3)' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#697565'; e.currentTarget.style.color = '#ECDFCC'; }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#ECDFCC'; e.currentTarget.style.color = '#181C14'; }}
        >
          Resume
        </a>

        <div className="flex items-center gap-7 mt-1">
          {[
            { href: "mailto:naviltalukdar3@gmail.com", Icon: MdOutlineEmail, size: "h-7 w-7" },
            { href: "https://github.com/navil2468", Icon: FaGithub, size: "h-6 w-6" },
            { href: "https://www.linkedin.com/in/navil-talukdar/", Icon: FaLinkedin, size: "h-6 w-6" },
          ].map(({ href, Icon, size }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              className={`${size} transition-colors duration-200`}
              style={{ color: 'rgba(236, 223, 204, 0.6)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ECDFCC'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(236, 223, 204, 0.6)'}
            >
              <Icon className={size} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;