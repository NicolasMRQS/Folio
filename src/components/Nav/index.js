import { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './style.scss';

function Nav() {
  const [activeSection, setActiveSection] = useState(1);

  const listenScrollEvent = () => {
    const scroll = window.scrollY;
    if (scroll < 465) {
      setActiveSection(1);
    }
    else if (scroll < 1150) {
      setActiveSection(2);
    }
    else if (scroll < 2300) {
      setActiveSection(3);
    }
    else if (scroll > 2300) {
      setActiveSection(4);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <nav className="nav-container">
      <HashLink title="Description" smooth elementId="description">
        <div className={activeSection === 1 ? 'nav-link isactive' : 'nav-link'} />
      </HashLink>
      <HashLink title="Compétences" smooth elementId="competences">
        <div className={activeSection === 2 ? 'nav-link isactive' : 'nav-link'} />
      </HashLink>
      <HashLink title="Projets" smooth elementId="projects">
        <div className={activeSection === 3 ? 'nav-link isactive' : 'nav-link'} />
      </HashLink>
      <HashLink title="Contact" smooth elementId="contact">
        <div className={activeSection === 4 ? 'nav-link isactive' : 'nav-link'} />
      </HashLink>
    </nav>
  );
}

export default Nav;
