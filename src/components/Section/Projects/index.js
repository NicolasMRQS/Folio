import Section from '..';
import ProjectCard from './ProjectCard';

import text from '../../../containers/languages';
import './style.scss';

function Projects({ language }) {
  return (
    <Section id="projects">
      <div className="projects__text-container">
        <h2 className="section_title">
          {text[language].projectsTitle}
        </h2>
        <p style={{ marginTop: '16px' }}>
          {text[language].projectsText}
        </p>
      </div>
      <div className="projects__projects-container">
        <ProjectCard label="Zen Gardener" img="zengardener" url="https://zen-gardener.netlify.app/" />
        <ProjectCard label="Le Hic de Basil" img="hicdebasil" url="https://lehicdebasil.com/" />
        <ProjectCard label="Pokémon Quizz (Work in progress...)" img="pokemon" />
      </div>
    </Section>
  );
}

export default Projects;
