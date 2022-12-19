import PropTypes from 'prop-types';

import './style.scss';

function Button({ label, color, full }) {
  switch (color) {
    case 'base':
      return (
        <button type="button" className={full ? 'button clickable button_base-color--full' : 'button clickable button_base-color'}>
          <span className="bold">{label}</span>
        </button>
      );
    case 'white':
      return (
        <button type="button" className={full ? 'button clickable button_white-color--full' : 'button clickable button_white-color'}>
          <span className="bold">{label}</span>
        </button>
      );
    default:
      return (
        <button type="button" className="button">
          <span className="bold">{label}</span>
        </button>
      );
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  full: PropTypes.bool,
};

Button.defaultProps = {
  full: false,
};

export default Button;
