import { useState } from 'react';

export default function PrimaryCard(props) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className='p-5 py-6 rounded-3xl space-y-1 transition-all duration-300 cursor-default'
      style={{
        backgroundColor: hovered ? '#7a8875' : '#697565',
        color: '#ECDFCC',
        border: '1px solid rgba(236, 223, 204, 0.25)',
        maxWidth: '33%',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 12px 32px rgba(24, 28, 20, 0.5)'
          : '0 4px 12px rgba(24, 28, 20, 0.3)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h1 className='text-2xl font-semibold' style={{ color: '#ECDFCC' }}>
        {props.title}
      </h1>
      <p style={{ color: 'rgba(236, 223, 204, 0.75)' }}>{props.t1}</p>
      <p style={{ color: 'rgba(236, 223, 204, 0.75)' }}>{props.t2}</p>
      <p style={{ color: 'rgba(236, 223, 204, 0.75)' }}>{props.t3}</p>
    </div>
  );
}