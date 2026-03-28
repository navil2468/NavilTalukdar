import React from 'react';

const navLinks = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
];

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className='flex justify-between items-center sticky top-0 z-50 px-20 py-5 backdrop-blur-lg'
      style={{
        backgroundColor: 'rgba(24, 28, 20, 0.75)',
        borderBottom: '1px solid rgba(236, 223, 204, 0.1)',
      }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className='font-bold text-xl transition-colors duration-200 bg-transparent border-none cursor-pointer p-0'
        style={{ color: '#ECDFCC', fontFamily: 'inherit' }}
        onMouseEnter={e => e.currentTarget.style.color = '#697565'}
        onMouseLeave={e => e.currentTarget.style.color = '#ECDFCC'}
      >
        Navil Talukdar
      </button>

      <nav className='flex gap-7'>
        {navLinks.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className='text-sm tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer p-0'
            style={{ color: 'rgba(236, 223, 204, 0.55)', fontFamily: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.color = '#ECDFCC'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(236, 223, 204, 0.55)'}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Navbar;