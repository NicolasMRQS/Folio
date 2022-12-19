import { Parallax } from 'react-scroll-parallax';
import { PropTypes } from 'prop-types';

import Section from '..';
import Button from '../../Button';

import text from '../../../containers/languages';
import './style.scss';

function Contact({ language }) {
  return (
    <Section id="contact">
      <div className="contact__text-container">
        <p className="contact__subtitle">{text[language].next}</p>
        <h2 className="contact__big-title">{text[language].contact}</h2>
      </div>
      <div className="contact__button-container">
        <div className="contact__sayhi-button">
          <a href="mailto:nicolas08.10marques@gmail.com">
            <Button label="Email" color="white" full />
          </a>
        </div>
        <a href="https://github.com/NicolasMRQS/" target="_blank" rel="noreferrer">
          <Button label="Github" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-marques-dev/" target="_blank" rel="noreferrer">
          <Button label="LinkedIn" color="white" />
        </a>
      </div>
      <Parallax translateY={['-200px', '-650px']}>
        <div className="contact__ellipse" />
      </Parallax>
    </Section>
  );
}

Contact.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Contact;
