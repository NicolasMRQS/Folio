import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import Section from '..';
import CardContainer from './CardContainer';

import './style.scss';

function Competences() {
  const [activeCategorie, setActiveCategorie] = useState(1);

  return (
    <Section height="631px">
      <div className="competences__contents-container">
        <div className="competences__text-container">
          <h2 className="section_title">Compétences</h2>
          <ul className="competences__list-container" style={{ marginTop: '48px' }}>
            <li className={activeCategorie === 1 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(1)}>
              {activeCategorie === 1 ? '- ' : ''}Developpement Frontend
            </li>
            <li className={activeCategorie === 2 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(2)}>
              {activeCategorie === 2 ? '- ' : ''}Intégration Web
            </li>
            <li className={activeCategorie === 3 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(3)}>
              {activeCategorie === 3 ? '- ' : ''}Developpement Backend
            </li>
            <li className={activeCategorie === 4 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(4)}>
              {activeCategorie === 4 ? '- ' : ''}Gestion de projet numérique
            </li>
          </ul>
        </div>
        <CardContainer activeCategorie={activeCategorie} />
      </div>
      <Parallax translateY={['-1000px', '-500px']}>
        <div className="competences_ellipse" style={{ transform: `rotate(${118.47 + (30 * (activeCategorie - 1))}deg)` }} />
      </Parallax>
    </Section>
  );
}

export default Competences;
