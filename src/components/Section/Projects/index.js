import { PropTypes } from 'prop-types';

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
        <ProjectCard
          label="Zen Gardener"
          img="zengardener"
          url="https://zen-gardener.netlify.app/"
          description={text[language].zengardenerDesc}
          techno={text[language].zengardenerTechno}
        />
        <ProjectCard
          label="Le Hic de Basil"
          img="hicdebasil"
          url="https://lehicdebasil.com/"
          description={text[language].hicdebasilDesc}
          techno={text[language].hicdebasilTechno}
        />
        <ProjectCard
          label="Jeux d'échec"
          img="chess"
          url="https://chess.nmrqs.fr"
          description={text[language].chessDesc}
          techno="HTML, CSS, Vanilla JS"
        />
        <ProjectCard
          label="Pokémon Quizz"
          img="pokemon"
          description={text[language].pokemonDesc}
          techno="React, Axios"
        />
      </div>
    </Section>
  );
}

Projects.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Projects;
