import { useEffect, useState } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './style.scss';

function Nav() {
  const [activeSection, setActiveSection] = useState(1);

  const listenScrollEvent = () => {
    const scroll = window.scrollY;
    if (scroll < 465) {setActiveSection(1)}
    else if (1150 > scroll) {setActiveSection(2)}
    else if (2300 > scroll) {setActiveSection(3)}
    else if (scroll > 2300) {setActiveSection(4)}
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, []);

  return (
    <nav className="nav-container">
      <NavHashLink smooth to="/#description">
        <div className={activeSection === 1 ? "nav-link active" : "nav-link"} />
      </NavHashLink>
      <NavHashLink smooth to="/#competences">
        <div className={activeSection === 2 ? "nav-link active" : "nav-link"} />
      </NavHashLink>
      <NavHashLink smooth to="/#projects">
        <div className={activeSection === 3 ? "nav-link active" : "nav-link"} />
      </NavHashLink>
      <NavHashLink smooth to="/#contact">
        <div className={activeSection === 4 ? "nav-link active" : "nav-link"} />
      </NavHashLink>
    </nav>
  );
}

export default Nav;
