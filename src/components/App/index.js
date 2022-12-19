import { useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../Nav';
import Competences from '../Section/Competences';
import Contact from '../Section/Contact';
import Description from '../Section/Description';
import Projects from '../Section/Projects';

import './style.scss';
import LanguageChooser from '../LanguageChooser';
import HelloAnimation from '../HelloAnimation';
import Cursor from '../CursorChooser/Cursor';
import CursorChooser from '../CursorChooser';

function App() {
  const [language, setLanguage] = useState('fre');
  const [defaultCursor, setDefaultCursor] = useState(false);
  const [helloAnimation, setHelloAnimation] = useState(true);

  return (
    <ParallaxProvider>
      <Router>
        <main className={defaultCursor ? 'app-defaultcursor' : 'app'}>
          {defaultCursor ? '' : <Cursor />}
          <HelloAnimation
            helloAnimation={helloAnimation}
            setHelloAnimation={setHelloAnimation}
            language={language}
          >
            <LanguageChooser language={language} setLanguage={setLanguage} />
            <CursorChooser defaultCursor={defaultCursor} setDefaultCursor={setDefaultCursor} />
            <Nav />
            <section>
              <Description language={language} />
              <Competences language={language} />
              <Projects language={language} />
              <Contact language={language} />
            </section>
          </HelloAnimation>
        </main>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
