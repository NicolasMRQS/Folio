import PropTypes from 'prop-types';

import './style.scss';

function Button({ text }) {
  return (
    <button type="button" className="button">
      <span className="bold">{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
