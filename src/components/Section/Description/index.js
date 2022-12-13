import { useRef, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

import Button from '../../Button';
import Section from '..';

import './style.scss';
import text from '../../../containers/languages';
import profil from '../../../assets/img/Nico.png';
import glassesImg from '../../../assets/img/glasses3.png';

function Description({ language, helloAnimation }) {
  const [glasses, setGlasses] = useState(false);
  const [glassesAnimation, setGlassesAnimation] = useState(false);

  const glassesImgElm = useRef(null);

  const handleClick = () => {
    if (!glassesAnimation && !glasses) {
      setGlassesAnimation(true);
      setGlasses(true);
      glassesImgElm.current.classList.remove('hidden');
      setTimeout(() => setGlassesAnimation(false), 1005);
    }
    if (!glassesAnimation && glasses) {
      setGlassesAnimation(true);
      glassesImgElm.current.classList.add('fadeout');
      setTimeout(() => {
        glassesImgElm.current.classList.add('hidden');
        glassesImgElm.current.classList.remove('fadeout');
        setGlassesAnimation(false);
      }, 705);
      setGlasses(false);
    }
  };

  return (
    <Section id="description" height={helloAnimation && '101vh'}>
      <div className="description">
        <div className="description__text-container">
          <span id="hello" className={helloAnimation ? 'base_color startanimation' : 'base_color'}>Hello ! </span>
          <span className="description__iam base_color" hidden={helloAnimation}>
            {text[language].iam}
          </span>
          <span className="description__iam base_color bold" hidden={helloAnimation}>
            Nicolas Marques
          </span>
          <h1 className="description__title section_title" style={{ marginTop: '24px' }} hidden={helloAnimation}>{text[language].developer}</h1>
          <p className="description__text" hidden={helloAnimation}>
            {text[language].description}
          </p>
          <p className="description__job base_color bold" style={{ marginTop: '24px' }} hidden={helloAnimation}>
            {text[language].job}
          </p>
          <div className="description__button_container">
            <a href="mailto:nicolas08.10marques@gmail.com" hidden={helloAnimation}>
              <Button label={text[language].hiButton} color="base" full />
            </a>
            <a href="/pdf/CV.pdf" download="CV.pdf" hidden={helloAnimation}>
              <Button label={text[language].cvButton} color="base" />
            </a>
          </div>
        </div>
        <div className="description__img-container" hidden={helloAnimation}>
          <img onClick={handleClick} src={profil} alt="Nicolas Marques" className="nicolas-img" />
          <img ref={glassesImgElm} onClick={handleClick} src={glassesImg} alt="glasses" className="glasses-img hidden" />
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
