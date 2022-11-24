import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Description from '../Section/Description';

import './style.scss';

function HelloAnimation({ helloAnimation, setHelloAnimation, language }) {
  useEffect(() => {
    setTimeout(() => {
      setHelloAnimation(false)
    }, 3500)
  }, []);

  return (
    <>
      {helloAnimation && <Description language={language} helloAnimation={helloAnimation} setHelloAnimation={setHelloAnimation} /> }
      {!helloAnimation && <Outlet /> }
    </>
  );
}

HelloAnimation.propTypes = {

};

export default HelloAnimation;
