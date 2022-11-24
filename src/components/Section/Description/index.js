import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Section from '..';

import './style.scss';
import text from '../../../containers/languages';
import profil from '../../../assets/img/profil.png';
import glassesImg from '../../../assets/img/glasses3.png';

function Description({ language, helloAnimation }) {
  const [glasses, setGlasses] = useState(false);

  return (
    <Section id="description" height={helloAnimation && '101vh'}>
      <div className="description">
        <div className="description__text-container">
          <span id="hello" className={helloAnimation ? 'base_color bold startanimation' : 'base_color bold'}>Hello ! </span>
          <span className="description__iam base_color bold" hidden={helloAnimation}>
            {text[language].iam}
          </span>
          <h1 className="description__title section_title" style={{ marginTop: '24px' }} hidden={helloAnimation}>Nicolas Marques</h1>
          <p className="description__text" hidden={helloAnimation}>
            {text[language].description}
          </p>
          <p className="description__job base_color bold" style={{ marginTop: '24px' }} hidden={helloAnimation}>
            {text[language].job}
          </p>
          <div className="description__button_container">
            <a href="mailto:nicolas08.10marques@gmail.com" hidden={helloAnimation}>
              <Button label="Say Hi" color="base" full />
            </a>
            <a href="/pdf/CV.pdf" download="CV.pdf" hidden={helloAnimation}>
              <Button label={text[language].cvButton} color="base" />
            </a>
          </div>
        </div>
        <div className="description__img-container" hidden={helloAnimation}>
          <img onClick={() => setGlasses(!glasses)} src={profil} alt="Nicolas Marques" className="nicolas-img" />
          {glasses ? <img onClick={() => setGlasses(!glasses)} src={glassesImg} alt="glasses" className="glasses-img" /> : ''}
        </div>
        <Parallax translateY={['-400px', '300px']}>
          <div className="description_ellipse" hidden={helloAnimation} />
        </Parallax>
      </div>
    </Section>
  );
}

Description.propTypes = {
  language: PropTypes.string.isRequired,
  helloAnimation: PropTypes.bool,
};

Description.defaultProps = {
  helloAnimation: false,
};

export default Description;
