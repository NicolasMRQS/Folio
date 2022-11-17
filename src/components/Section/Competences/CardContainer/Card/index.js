import PropTypes from 'prop-types';
import { logoData } from '../../../../../utils/logo';

import './style.scss';

function Card({ label, logo }) {
  return (
    <div className="card">
      {logo && <img className="card_img" src={logoData[logo]} alt={label} />}
      <span>{label}</span>
    </div>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Card;
