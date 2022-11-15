import PropTypes from 'prop-types';

import zenGardener from '../../../../assets/img/projects/zengardener.png';
import './style.scss';

function ProjectCard({ label, url }) {
  return (
    <figure className="project-card">
      <img src={zenGardener} alt={label} className="project-card__img" />
      <figcaption className="project-card__label">{label}</figcaption>
    </figure>
  );
}

ProjectCard.propTypes = {

};

export default ProjectCard;
