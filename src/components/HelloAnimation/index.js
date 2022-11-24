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
    }, 3500);
  }, []);

  return (
    <>
      {helloAnimation
        && (
          <Description
            language={language}
            helloAnimation={helloAnimation}
            setHelloAnimation={setHelloAnimation}
          />
        )}
      {!helloAnimation && <> {children} </>}
    </>
  );
}

HelloAnimation.propTypes = {

};

export default HelloAnimation;
