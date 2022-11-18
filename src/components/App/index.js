import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from '../Nav';
import Competences from '../Section/Competences';
import Contact from '../Section/Contact';
import Description from '../Section/Description';
import Projects from '../Section/Projects';

import './style.scss';

function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Nav />
        <main className="app">
          <Description />
          <Competences />
          <Projects />
          <Contact />
        </main>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
