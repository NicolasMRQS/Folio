import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Card from './Card';

import text from '../../../../containers/languages';
import './style.scss';

function CardContainer({ activeCategorie, language }) {
  const listRef = useRef(null);

  // Scroll to categorie on click
  useEffect(() => {
    listRef.current.scrollTo({
      top: 405 * (activeCategorie - 1),
      behavior: 'smooth',
    });
  }, [activeCategorie]);

  // Init scroll to good categorie
  useEffect(() => {
    listRef.current.scrollTo({
      top: 405 * (activeCategorie - 1),
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="card-container" ref={listRef}>
      <div className="card-container__cards-list">
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
      <div className="card-container__cards-list">
        <Card label="HTML5" logo="html5" />
        <Card label="CSS3" logo="css3" />
        <Card label="Javascript" logo="javascript" />
        <Card label="Bulma" logo="bulma" />
      </div>
      <div className="card-container__cards-list">
        <Card label="NodeJS" logo="nodejs" />
        <Card label="Express" />
        <Card label="SQL" logo="sql" />
        <Card label="PostgreSQL" logo="postgresql" />
        <Card label={text[language].mvc} logo="ejs" />
        <Card label={text[language].api} />
        <Card label="Sequelize" logo="sequelize" />
        <Card label="Strapi" logo="strapi" />
      </div>
      <div className="card-container__cards-list">
        <Card label={text[language].cdc} />
        <Card label={text[language].agile} />
        <Card label="Wireframes" />
        <Card label="User stories" />
        <Card label="MCD" />
        <Card label="Git / Github" logo="github" />
      </div>
    </div>
  );
}

CardContainer.propTypes = {
  activeCategorie: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
};

export default CardContainer;
