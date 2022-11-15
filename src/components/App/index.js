import Competences from '../Section/Competences';
import Description from '../Section/Description';
import Projects from '../Section/Projects';
import './style.scss';

function App() {
  return (
    <main className="app">
      <Description />
      <Competences />
      <Projects />
    </main>
  );
}

export default App;
