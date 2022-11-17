import PropTypes from 'prop-types';

import './style.scss';

function Nav({ children, height }) {
  return (
    <nav className="nav-container">
        <div id="nav-1" className="nav-link active" />
        <div id="nav-2" className="nav-link" />
        <div id="nav-3" className="nav-link" />
        <div id="nav-4" className="nav-link" />
    </nav>
  );
}

export default Nav;