import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';

import projectsData from '../../../../assets/img/projects/project';
import './style.scss';

function ProjectCard({
  label, img, url, description, techno,
}) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="project-card">
      <ParallaxBanner className="project-card__img" layers={[{ image: projectsData[img], speed: -15 }]} />
      <div className="project-card__circle-container">
        <div className="project-card__circle" />
      </div>
      <div className="project-card__info-container">
        <div className="project-card__info base_color">
          {description}
        </div>
        <div className="project-card__label section_title">
          {label}
        </div>
        <div className="project-card__technos">
          {techno}
        </div>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string,
  description: PropTypes.string,
  techno: PropTypes.string,
};

ProjectCard.defaultProps = {
  url: null,
  description: null,
  techno: null,
};

export default ProjectCard;
