import { useState } from 'react';

import Button from '../../Button';
import Section from '..';

import './style.scss';
import profil from '../../../assets/img/profil-transparent.png';
import glassesImg from '../../../assets/img/glasses3.png';

function Description() {
  const [glasses, setGlasses] = useState(false);

  const handleClickCV = () => {
    console.log('a')
    const alink = document.createElement('a');
    alink.href = '/src/assets/pdf/CV.pdf';
    alink.download = 'SamplePDF.pdf';
    alink.click();
  };

  return (
    <Section height="809px">
      <div className="text-container">
        <span className="base_color bold">Hello !</span>
        <h1 className="section_title" style={{ marginTop: '24px' }}>Nicolas Marques</h1>
        <p style={{ marginTop: '48px' }}>
          Ancien intermittent du spectacle, j'ai suivi une formation intensive pour devenir
          developpeur web spécialisé en React. Motivé, curieux et passioné par le code, ma
          facilité d'apprentissage me permet de m'adapter facilement aux nouveaux environnements.
        </p>
        <p className="base_color bold" style={{ marginTop: '24px' }}>
          Je suis actuellement à la recherche de mon premier poste.
        </p>
      </div>
      <div className="button_container" style={{ marginTop: '80px' }}>
        <Button text="Say Hi" baseColor="true" />
        <a href="/pdf/CV.pdf" download="CV.pdf">
          <Button text="Mon CV" />
        </a>
      </div>
      <img onClick={() => setGlasses(!glasses)} src={profil} alt="Nicolas Marques" className="nicolas-img" />
      {glasses ? <img onClick={() => setGlasses(!glasses)} src={glassesImg} alt="glasses" className="glasses-img" /> : ''}
      <div className="description_ellipse" />
    </Section>
  );
}

export default Description;
