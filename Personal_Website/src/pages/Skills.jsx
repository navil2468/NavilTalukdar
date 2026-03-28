import React from 'react';

const categories = [
  { label: 'Systems',           items: ['UNIX/Linux', 'TCP/IP', 'Sockets API', 'HTTP', 'File I/O', 'Bash', 'Makefiles'] },
  { label: 'Languages',         items: ['TypeScript', 'JavaScript', 'Python', 'C', 'SQL (PostgreSQL)', 'Java', 'HTML/CSS', 'Dart'] },
  { label: 'Frameworks & Tools',items: ['React', 'Node.js', 'Express', 'Stripe', 'PostgreSQL', 'Vercel', 'Git'] },
  { label: 'Libraries',         items: ['Pandas', 'NumPy', 'Matplotlib'] },
];

function Skills() {
  return (
    <section id="skills" data-aos="fade-up" style={{ padding: '6rem 8rem' }}>
      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
        Skills
      </p>
      <h2 className="text-5xl font-bold mb-12" style={{ color: '#ECDFCC' }}>
        What can I use?
      </h2>
      <div className="flex flex-col gap-8">
        {categories.map((category) => (
          <div key={category.label}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
              {category.label}
            </p>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-base font-medium transition-colors duration-200 cursor-default"
                  style={{ color: '#ECDFCC' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(236, 223, 204, 0.45)'}
                  onMouseLeave={e => e.target.style.color = '#ECDFCC'}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;