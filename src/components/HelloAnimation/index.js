import PropTypes from 'prop-types';
import { useEffect } from 'react';

import Description from '../Section/Description';

import './style.scss';

function HelloAnimation({
  children, helloAnimation, setHelloAnimation, language,
}) {
  useEffect(() => {
    setTimeout(() => {
      setHelloAnimation(false);
    }, 2200);
  }, []);

  return (
    <>
      {helloAnimation
        && (
          <Description
            language={language}
            helloAnimation={helloAnimation}
          />
        )}
      {!helloAnimation && <> {children} </>}
    </>
  );
}

HelloAnimation.propTypes = {
  children: PropTypes.node.isRequired,
  helloAnimation: PropTypes.bool.isRequired,
  setHelloAnimation: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default HelloAnimation;
