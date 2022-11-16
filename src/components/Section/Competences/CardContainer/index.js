import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import Card from './Card';

import './style.scss';

function CardContainer({ activeCategorie }) {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current.scrollTo({
      top: 405 * (activeCategorie - 1),
      behavior: 'smooth',
    });
  }, [activeCategorie]);

  return (
    <div className="card-container" ref={listRef}>
      <div className="card-container__cards-list">
        <Card label="Javascript" />
        <Card label="React" />
        <Card label="Redux" />
        <Card label="Axios" />
        <Card label="SASS" />
        <Card label="SocketIO" />
        <Card label="JSX" />
        <Card label="Babel" />
        <Card label="Webpack" />
      </div>
      <div className="card-container__cards-list">
        <Card label="HTML5" />
        <Card label="CSS3" />
        <Card label="Javascript" />
        <Card label="Bulma" />
      </div>
      <div className="card-container__cards-list">
        <Card label="NodeJS" />
        <Card label="SQL" />
        <Card label="PostgreSQL" />
        <Card label="EJS" />
        <Card label="Sequelize" />
        <Card label="Strapi" />
      </div>
      <div className="card-container__cards-list">
        <Card label="HTML5" />
        <Card label="CSS3" />
        <Card label="Bulma" />
      </div>
    </div>
  );
}

CardContainer.propTypes = {
  activeCategorie: PropTypes.number.isRequired,
};

export default CardContainer;
