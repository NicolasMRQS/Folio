import PropTypes from 'prop-types';

import './style.scss';

function Section({ children, id }) {
  return (
    <section className="section" id={id}>
      <div className="content_container">
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  id: null,
};

export default Section;
