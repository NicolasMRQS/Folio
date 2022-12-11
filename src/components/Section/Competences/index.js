import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { PropTypes } from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import Section from '..';
import CardContainer from './CardContainer';
import Card from './CardContainer/Card';

import text from '../../../containers/languages';
import './style.scss';

function Competences({ language }) {
  const [activeCategorie, setActiveCategorie] = useState(1);
  const [changingCategorie, setChangingCategorie] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 766 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  const handleClick = (event) => {
    const categorieClicked = parseInt(event.target.getAttribute('data-categorie'), 10);
    if (isTablet && activeCategorie !== categorieClicked) {
      setChangingCategorie(true);
      setTimeout(() => {
        setActiveCategorie(categorieClicked);
        setTimeout(() => {
          setChangingCategorie(false);
        }, 1);
      }, 450);
    }
    else {
      setActiveCategorie(categorieClicked);
    }
  };

  return (
    // eslint-disable-next-line no-nested-ternary
    <Section id="competences" height={isMobile ? '700px' : isTablet ? '880px' : ''}>
      <Parallax translateY={['-920px', '-500px']}>
        <div className="competences_ellipse" style={{ transform: `rotate(${118.47 + (30 * (activeCategorie - 1))}deg)` }} />
      </Parallax>
      <div className="competences__contents-container">
        <div className="competences__text-container">
          <h2 className="section_title">
            {text[language].competencesTitle}
          </h2>
          <ul className="competences__list-container">
            <li className={activeCategorie === 1 ? 'competences__list--active' : 'competences__list'} onClick={handleClick} data-categorie="1">
              {activeCategorie === 1 ? <span className="second-color bold">- </span> : ''}
              {text[language].frontend}
            </li>
            {activeCategorie === 1
              && (
              <div className={changingCategorie ? 'competences__card-container--smallscreen closed' : 'competences__card-container--smallscreen'}>
                <Card label="Javascript" logo="javascript" />
                <Card label="React" logo="react" />
                <Card label="Redux" logo="redux" />
                <Card label="Axios" logo="axios" />
                <Card label="SASS" logo="sass" />
                <Card label="SocketIO" logo="socketio" />
                <Card label="Babel" logo="babel" />
                <Card label="Webpack" logo="webpack" />
              </div>
              )}
            <li className={activeCategorie === 2 ? 'competences__list--active' : 'competences__list'} onClick={handleClick} data-categorie="2">
              {activeCategorie === 2 ? <span className="second-color bold">- </span> : ''}
              {text[language].integration}
            </li>
            {activeCategorie === 2
              && (
              <div className={changingCategorie ? 'competences__card-container--smallscreen closed' : 'competences__card-container--smallscreen'}>
                <Card label="HTML5" logo="html5" />
                <Card label="CSS3" logo="css3" />
                <Card label="Javascript" logo="javascript" />
                <Card label="Bulma" logo="bulma" />
                <Card label="Tailwind" logo="tailwind" />
              </div>
              )}
            <li className={activeCategorie === 3 ? 'competences__list--active' : 'competences__list'} onClick={handleClick} data-categorie="3">
              {activeCategorie === 3 ? <span className="second-color bold">- </span> : ''}
              {text[language].backend}
            </li>
            {activeCategorie === 3
              && (
              <div className={changingCategorie ? 'competences__card-container--smallscreen closed' : 'competences__card-container--smallscreen'}>
                <Card label="NodeJS" logo="nodejs" />
                <Card label="Express" />
                <Card label="SQL" logo="sql" />
                <Card label="PostgreSQL" logo="postgresql" />
                <Card label={text[language].mvc} logo="ejs" />
                <Card label={text[language].api} />
                <Card label="Sequelize" logo="sequelize" />
                <Card label="Strapi" logo="strapi" />
              </div>
              )}
            <li className={activeCategorie === 4 ? 'competences__list--active' : 'competences__list'} onClick={handleClick} data-categorie="4">
              {activeCategorie === 4 ? <span className="second-color bold">- </span> : ''}
              {text[language].projectManager}
            </li>
            {activeCategorie === 4
              && (
              <div className={changingCategorie ? 'competences__card-container--smallscreen closed' : 'competences__card-container--smallscreen'}>
                <Card label={text[language].cdc} />
                <Card label={text[language].agile} />
                <Card label="Wireframes" />
                <Card label="User stories" />
                <Card label="MCD" />
                <Card label="Git / Github" logo="github" />
              </div>
              )}
          </ul>
        </div>
        <CardContainer activeCategorie={activeCategorie} language={language} />
      </div>
    </Section>
  );
}

Competences.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Competences;
