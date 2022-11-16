import PropTypes from 'prop-types';

import './style.scss';

function Button({ text, baseColor }) {
  return (
    <button type="button" className={baseColor ? 'button button--color' : 'button'}>
      <span className="bold">{text}</span>
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  baseColor: PropTypes.bool,
};

Button.defaultProps = {
  baseColor: false,
};

export default Button;
