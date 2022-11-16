import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';

import zenGardener from '../../../../assets/img/projects/zengardener.png';
import './style.scss';

function ProjectCard({ label, url }) {
  return (
    <figure className="project-card">
      <ParallaxBanner className="project-card__img" layers={[{ image: zenGardener, speed: -15 }]} />
        {/* <img src={zenGardener} alt={label} className="project-card__img" /> */}
      <figcaption className="project-card__label">{label}</figcaption>
    </figure>
  );
}

ProjectCard.propTypes = {

};

export default ProjectCard;
