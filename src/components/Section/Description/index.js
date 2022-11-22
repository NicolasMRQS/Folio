import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import Button from '../../Button';
import Section from '..';

import './style.scss';
import text from '../../../containers/languages';
import profil from '../../../assets/img/profil.png';
import glassesImg from '../../../assets/img/glasses3.png';

function Description({ language }) {
  const [glasses, setGlasses] = useState(false);

  return (
    <Section id="description">
      <div className="description">
        <div className="description__text-container">
          <span className="base_color bold">Hello ! </span>
          <span className="base_color bold">
            {text[language].iam}
          </span>
          <h1 className="section_title" style={{ marginTop: '24px' }}>Nicolas Marques</h1>
          <p className="description__text">
            {text[language].description}
          </p>
          <p className="base_color bold" style={{ marginTop: '24px' }}>
            {text[language].job}
          </p>
          <div className="description__button_container">
            <a href="mailto:nicolas08.10marques@gmail.com">
              <Button label="Say Hi" color="base" full />
            </a>
            <a href="/pdf/CV.pdf" download="CV.pdf">
              <Button label={text[language].cvButton} color="base" />
            </a>
          </div>
        </div>
        <div className="description__img-container">
          <img onClick={() => setGlasses(!glasses)} src={profil} alt="Nicolas Marques" className="nicolas-img" />
          {glasses ? <img onClick={() => setGlasses(!glasses)} src={glassesImg} alt="glasses" className="glasses-img" /> : ''}
        </div>
        <Parallax translateY={['-400px', '300px']}>
          <div className="description_ellipse" />
        </Parallax>
      </div>
    </Section>
  );
}

export default Description;
