import { Parallax } from 'react-scroll-parallax';

import Section from '..';
import Button from '../../Button';
import './style.scss';

function Contact() {
  return (
    <Section height="594px" id="contact">
      <div className="contact__text-container">
        <p className="contact__subtitle">What's Next ?</p>
        <h2 className="contact__big-title">Get in Touch</h2>
      </div>
      <div className="contact__button-container">
        <div className="contact__sayhi-button">
          <a href="mailto:nicolas08.10marques@gmail.com">
            <Button label="Say Hi !" color="white" full />
          </a>
        </div>
        <a href="https://github.com/NicolasMRQS/" target="_blank" rel="noreferrer">
          <Button label="Github" color="white" />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-marques-dev/" target="_blank" rel="noreferrer">
          <Button label="LinkedIn" color="white" />
        </a>
      </div>
      <Parallax translateY={['-200px', '-570px']}>
        <div className="contact__ellipse" />
      </Parallax>
    </Section>
  );
}

export default Contact;
