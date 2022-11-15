import PropTypes from 'prop-types';

import './style.scss';

function Card({ label, url }) {
  return (
    <div className="card">
      <img className="card_img" src={require(`src/assets/img/${label}.png`)} alt={label} />
      <span>{label}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Card;
