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

function App() {
  const [language, setLanguage] = useState('fre');

  return (
    <ParallaxProvider>
      <Router>
        <LanguageChooser language={language} setLanguage={setLanguage} />
        <Nav />
        <main className="app">
          <Description language={language} />
          <Competences language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </main>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
