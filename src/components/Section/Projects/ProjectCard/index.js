import PropTypes from 'prop-types';
import { ParallaxBanner } from 'react-scroll-parallax';

import projectsData from '../../../../assets/img/projects/project';
import './style.scss';

function ProjectCard({ label, img, url }) {
  return (
    <figure className="project-card">
      <a href={url} target="_blank" rel="noreferrer">
        <ParallaxBanner className="project-card__img" layers={[{ image: projectsData[img], speed: -15 }]} style={{ width: '450px', height: '450px' }} />
        <figcaption className="project-card__label">{label}</figcaption>
      </a>
    </figure>
  );
}

ProjectCard.propTypes = {
  label: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  url: PropTypes.string,
};

ProjectCard.defaultProps = {
  url: null,
};

export default ProjectCard;
