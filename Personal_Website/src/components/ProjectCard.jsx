import { useState } from 'react';

export default function ProjectCard(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={props.href || '#'}
      target='_blank'
      rel='noopener noreferrer'
      className='block transition-all duration-300 rounded-3xl'
      style={{
        backgroundColor: hovered ? '#7a8875' : '#697565',
        color: '#ECDFCC',
        border: '1px solid rgba(236, 223, 204, 0.25)',
        width: '100%',
        padding: '1.25rem 1.25rem 1.5rem',
        textDecoration: 'none',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'translateY(0) scale(1)',
        boxShadow: hovered
          ? '0 16px 40px rgba(24, 28, 20, 0.55)'
          : '0 4px 12px rgba(24, 28, 20, 0.3)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className='text-2xl font-semibold mb-4' style={{ color: '#ECDFCC' }}>
        {props.title}
      </h1>
      {props.src && (
        <img
          src={props.src}
          alt={props.title}
          className='w-full rounded-xl mb-3 object-cover'
          style={{ maxHeight: '180px' }}
        />
      )}
      <p style={{ color: 'rgba(236, 223, 204, 0.75)', fontSize: '0.9rem' }}>
        {props.description}
      </p>
      <div
        className='mt-4 flex items-center gap-1 text-xs font-medium tracking-wide transition-opacity duration-200'
        style={{ color: hovered ? '#ECDFCC' : 'rgba(236, 223, 204, 0.5)' }}
      >
        View project →
      </div>
    </a>
  );
}