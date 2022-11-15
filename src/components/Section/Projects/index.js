import Section from '..';
import ProjectCard from './ProjectCard';

import './style.scss';

function Projects() {
  return (
    <Section>
      <div className="projects__text-container">
        <h2 className="section_title">Projets</h2>
        <p style={{ marginTop: '16px' }}>Mes derniers projets</p>
      </div>
      <div className="projects__projects-container">
        <ProjectCard label="Zen Gardener" />
        <ProjectCard label="Le Hic de Basil" />
        <ProjectCard label="Pokémon Quizz" />
      </div>
    </Section>
  );
}

export default Projects;
