import { ParallaxProvider } from 'react-scroll-parallax';
import Competences from '../Section/Competences';
import Contact from '../Section/Contact';
import Description from '../Section/Description';
import Projects from '../Section/Projects';
import './style.scss';

function App() {
  return (
    <ParallaxProvider>
      <main className="app">
        <Description />
        <Competences />
        <Projects />
        <Contact />
      </main>
    </ParallaxProvider>
  );
}

export default App;
