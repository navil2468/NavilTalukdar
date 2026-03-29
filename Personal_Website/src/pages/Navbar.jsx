import { useState } from 'react';

const navLinks = [
  { label: 'About',      id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects',   id: 'projects' },
  { label: 'Skills',     id: 'skills' },
  { label: 'Contact',    id: 'contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div
      className='sticky top-0 z-50 backdrop-blur-lg'
      style={{
        backgroundColor: 'rgba(24, 28, 20, 0.75)',
        borderBottom: '1px solid rgba(236, 223, 204, 0.1)',
      }}
    >
      <div className='flex justify-between items-center px-5 sm:px-10 lg:px-20 py-5'>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='font-bold text-xl transition-colors duration-200 bg-transparent border-none cursor-pointer p-0'
          style={{ color: '#ECDFCC', fontFamily: 'inherit' }}
          onMouseEnter={e => e.currentTarget.style.color = '#697565'}
          onMouseLeave={e => e.currentTarget.style.color = '#ECDFCC'}
        >
          Navil Talukdar
        </button>

        {/* Desktop nav */}
        <nav className='hidden md:flex gap-7'>
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

        {/* Hamburger button (mobile only) */}
        <button
          className='md:hidden flex flex-col justify-center gap-1.5 bg-transparent border-none cursor-pointer p-1'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className='block w-6 h-0.5 transition-all duration-300'
            style={{
              backgroundColor: '#ECDFCC',
              transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className='block w-6 h-0.5 transition-all duration-300'
            style={{
              backgroundColor: '#ECDFCC',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className='block w-6 h-0.5 transition-all duration-300'
            style={{
              backgroundColor: '#ECDFCC',
              transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <nav
          className='md:hidden flex flex-col px-5 pb-5 gap-4 pt-3'
          style={{ borderTop: '1px solid rgba(236, 223, 204, 0.1)' }}
        >
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className='text-sm tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer p-0 text-left'
              style={{ color: 'rgba(236, 223, 204, 0.55)', fontFamily: 'inherit' }}
              onMouseEnter={e => e.currentTarget.style.color = '#ECDFCC'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(236, 223, 204, 0.55)'}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}

export default Navbar;
