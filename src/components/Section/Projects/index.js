import Section from '..';
import ProjectCard from './ProjectCard';

import './style.scss';

function Projects() {
  return (
    <Section id="projects">
      <div className="projects__text-container">
        <h2 className="section_title">Projets</h2>
        <p style={{ marginTop: '16px' }}>Mes derniers projets</p>
      </div>
      <div className="projects__projects-container">
        <ProjectCard label="Zen Gardener" img="zengardener" url="https://zen-gardener.netlify.app/" />
        <ProjectCard label="Le Hic de Basil" img="hicdebasil" url="https://lehicdebasil.com/" />
        <ProjectCard label="Pokémon Quizz (En cours...)" img="pokemon" />
      </div>
    </Section>
  );
}

export default Projects;
