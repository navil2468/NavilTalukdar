import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  return (
    <section id="projects" data-aos="fade-up" style={{ padding: '6rem 8rem' }}>
      <p className="text-xs uppercase tracking-widest mb-2" style={{ color: 'rgba(236, 223, 204, 0.5)' }}>
        Projects
      </p>
      <h1 className="text-5xl font-bold tracking-tight leading-none mb-8" style={{ color: '#ECDFCC' }}>
        Notable Work
      </h1>
      <div className="flex flex-wrap gap-6">
        <ProjectCard
          title="Under Construction"
          src="/Personal_Website/public/Personal_Logo.png"
          description="🔨🔨🔨"
          href="#"
        />
        {/* Add more ProjectCards here: <ProjectCard title="..." description="..." href="https://..." /> */}
      </div>
    </section>
  );
}

export default Projects;