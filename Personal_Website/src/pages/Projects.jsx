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
      <div className="flex flex-wrap gap-6 items-center">
        <ProjectCard
          title="Offset"
          src="/Offset.png"
          description="Offset is an automated hedging bot that links to your portfolio, identifies key risks to your investments, and trades targeted prediction markets to protect your positions without selling shares."
          href="https://github.com/navil2468/Offset"
        />
        <ProjectCard
          title="GolamsVision"
          src="/GolamsVision.png"
          description="GolamsVision is a professional photography portfolio website featuring high-quality galleries for portraits, landscapes, and automotive media alongside an integrated appointment booking system."
          href="https://www.golamsvision.com"
        />
        <ProjectCard
          title="Columbia Cribs"
          src="/ColumbiaCribs.png"
          description="CU Cribs is a student-focused housing platform designed to streamline the search for off-campus rentals by providing a centralized database of listings tailored to the university community."
          href="https://github.com/navil2468/Offset"
        />
        {/* Add more ProjectCards here: <ProjectCard title="..." description="..." href="https://..." /> */}
      </div>
    </section>
  );
}

export default Projects;