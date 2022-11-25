import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { useMediaQuery } from 'react-responsive';
import { PropTypes } from 'prop-types';

import Section from '..';
import CardContainer from './CardContainer';

import text from '../../../containers/languages';
import './style.scss';
import Card from './CardContainer/Card';

function Competences({ language }) {
  const [activeCategorie, setActiveCategorie] = useState(1);

  function Desktop({ children }) {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    return isDesktop ? children : null;
  }

  function SmallScreen({ children }) {
    const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
    return isSmallScreen ? children : null;
  }

  return (
    <Section id="competences" height={SmallScreen ? '700px' : null}>
      <div className="competences__contents-container">
        <div className="competences__text-container">
          <h2 className="section_title">
            {text[language].competencesTitle}
          </h2>
          <ul className="competences__list-container">
            <li className={activeCategorie === 1 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(1)}>
              {activeCategorie === 1 ? <span className="second-color bold">- </span> : ''}
              {text[language].frontend}
            </li>
            <SmallScreen>
              {activeCategorie === 1
              && (
              <div className="competences__card-container--smallscreen">
                <Card label="Javascript" logo="javascript" />
                <Card label="React" logo="react" />
                <Card label="Redux" logo="redux" />
                <Card label="Axios" logo="axios" />
                <Card label="SASS" logo="sass" />
                <Card label="SocketIO" logo="socketio" />
                <Card label="JSX" logo="jsx" />
                <Card label="Babel" logo="babel" />
                <Card label="Webpack" logo="webpack" />
              </div>
              )}
            </SmallScreen>
            <li className={activeCategorie === 2 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(2)}>
              {activeCategorie === 2 ? <span className="second-color bold">- </span> : ''}
              {text[language].integration}
            </li>
            <SmallScreen>
              {activeCategorie === 2
              && (
              <div className="competences__card-container--smallscreen">
                <Card label="HTML5" logo="html5" />
                <Card label="CSS3" logo="css3" />
                <Card label="Javascript" logo="javascript" />
                <Card label="Bulma" logo="bulma" />
              </div>
              )}
            </SmallScreen>
            <li className={activeCategorie === 3 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(3)}>
              {activeCategorie === 3 ? <span className="second-color bold">- </span> : ''}
              {text[language].backend}
            </li>
            <SmallScreen>
              {activeCategorie === 3
              && (
              <div className="competences__card-container--smallscreen">
                <Card label="NodeJS" logo="nodejs" />
                <Card label="Express" />
                <Card label="SQL" logo="sql" />
                <Card label="PostgreSQL" logo="postgresql" />
                <Card label="EJS" logo="ejs" />
                <Card label="Sequelize" logo="sequelize" />
                <Card label="Strapi" logo="strapi" />
              </div>
              )}
            </SmallScreen>
            <li className={activeCategorie === 4 ? 'competences__list--active' : 'competences__list'} onClick={() => setActiveCategorie(4)}>
              {activeCategorie === 4 ? <span className="second-color bold">- </span> : ''}
              {text[language].projectManager}
            </li>
            <SmallScreen>
              {activeCategorie === 4
              && (
              <div className="competences__card-container--smallscreen">
                <Card label={text[language].cdc} />
                <Card label={text[language].agile} />
                <Card label="Wireframes" />
                <Card label="User stories" />
                <Card label="MCD" />
                <Card label="Git / Github" />
              </div>
              )}
            </SmallScreen>
          </ul>
        </div>
        <Desktop>
          <CardContainer activeCategorie={activeCategorie} language={language} />
        </Desktop>
      </div>
      <Parallax translateY={['-1000px', '-500px']}>
        <div className="competences_ellipse" style={{ transform: `rotate(${118.47 + (30 * (activeCategorie - 1))}deg)` }} />
      </Parallax>
    </Section>
  );
}

Competences.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Competences;
