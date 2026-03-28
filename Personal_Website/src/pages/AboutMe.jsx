import React from 'react';
import PrimaryCard from '../components/PrimaryCard';

function AboutMe() {
  return (
    <section id="about" data-aos="fade-up" style={{ padding: '6rem 8rem' }}>
      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
        About Me
      </p>
      <h1 className="text-5xl font-bold tracking-tight leading-none mb-8" style={{ color: '#ECDFCC' }}>
        Computer Science @ Columbia
      </h1>
      <div className="mb-8">
        <PrimaryCard title="Education" t1="B.S. Computer Science" t2="Columbia University" t3="May 2028" />
      </div>
      <p className="text-base leading-relaxed mb-5" style={{ color: 'rgba(236, 223, 204, 0.75)', maxWidth: '640px' }}>
        I'm a sophomore at Columbia University SEAS studying Computer Science. I enjoy building full-stack products and am constantly looking for the next big thing to build and ship.
      </p>
      <div style={{ borderTop: '1px solid rgba(236, 223, 204, 0.12)', margin: '1.5rem 0' }} />
      <p className="text-base leading-relaxed" style={{ color: 'rgba(236, 223, 204, 0.75)', maxWidth: '640px' }}>
        I'm interested in anything to do with Computer Science: AI, blockchains, systems, networks.
      </p>
    </section>
  );
}

export default AboutMe;