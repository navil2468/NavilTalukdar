import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#181C14',
        borderTop: '1px solid rgba(236, 223, 204, 0.1)',
        padding: '3rem 8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <p className="font-semibold text-base tracking-wide" style={{ color: '#ECDFCC' }}>
        Navil Talukdar
      </p>
      <p className="text-xs text-center" style={{ color: 'rgba(236, 223, 204, 0.45)' }}>
        Computer Science Student &bull; Software Engineer &bull; Builder
      </p>

      <div className="flex gap-6 mt-1">
        <a href="mailto:naviltalukdar3@gmail.com" target="_blank" rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: 'rgba(236, 223, 204, 0.45)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#ECDFCC'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(236, 223, 204, 0.45)'}
        >
          <MdOutlineEmail size={20} />
        </a>
        <a href="https://github.com/navil2468" target="_blank" rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: 'rgba(236, 223, 204, 0.45)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#ECDFCC'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(236, 223, 204, 0.45)'}
        >
          <FaGithub size={18} />
        </a>
        <a href="https://www.linkedin.com/in/navil-talukdar/" target="_blank" rel="noopener noreferrer"
          className="transition-colors duration-200"
          style={{ color: 'rgba(236, 223, 204, 0.45)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#ECDFCC'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(236, 223, 204, 0.45)'}
        >
          <FaLinkedin size={18} />
        </a>
      </div>

      <p className="text-xs mt-1" style={{ color: 'rgba(236, 223, 204, 0.3)' }}>
        © {new Date().getFullYear()} Navil Talukdar. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;