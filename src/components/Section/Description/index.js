import { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import Button from '../../Button';
import Section from '..';

import './style.scss';
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
            {language === 'fre' ? 'Je suis' : 'I am'}
          </span>
          <h1 className="section_title" style={{ marginTop: '24px' }}>Nicolas Marques</h1>
          <p className="description__text">
            Ancien intermittent du spectacle, j'ai suivi une formation intensive pour devenir
            developpeur web spécialisé en React. Motivé, curieux et passioné par le code, ma
            facilité d'apprentissage me permet de m'adapter facilement aux nouveaux environnements.
          </p>
          <p className="base_color bold" style={{ marginTop: '24px' }}>
            Je suis actuellement à la recherche de mon premier poste.
          </p>
          <div className="description__button_container">
            <a href="mailto:nicolas08.10marques@gmail.com">
              <Button label="Say Hi" color="base" full />
            </a>
            <a href="/pdf/CV.pdf" download="CV.pdf">
              <Button label="Mon CV" color="base" />
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
