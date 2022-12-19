/* eslint-disable no-return-assign */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import cursor from '../../assets/img/cursor.png';

import './style.scss';

function CursorChooser({ defaultCursor, setDefaultCursor }) {
  const [displayCursorChooser, setDisplayCursorChooser] = useState(true);

  const handleClick = () => {
    setDefaultCursor(!defaultCursor);
  };

  useEffect(() => {
    if (defaultCursor) {
      document.body.style = 'cursor: auto;';
      const clickableElm = document.querySelectorAll('.clickable');
      clickableElm.forEach((elm) => elm.style = 'cursor: pointer');
    }
  }, [defaultCursor]);

  useEffect(() => {
    if ('ontouchstart' in document.documentElement) {
      setDisplayCursorChooser(false);
    }
  }, []);

  if (!displayCursorChooser) {
    return null;
  }

  return (
    <div className="cursor-chooser clickable" onClick={handleClick}>
      <div className={defaultCursor ? 'cursor-chooser__curstom-cursor' : 'cursor-chooser__curstom-cursor--active'} src={cursor} alt="cursor" />
      <span>/</span>
      <img className={defaultCursor ? 'cursor-chooser__img--active' : 'cursor-chooser__img'} src={cursor} alt="cursor" />
    </div>
  );
}

CursorChooser.propTypes = {
  defaultCursor: PropTypes.bool.isRequired,
  setDefaultCursor: PropTypes.func.isRequired,
};

export default CursorChooser;
