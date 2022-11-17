import PropTypes from 'prop-types';

import './style.scss';

function Section({ children, height, id }) {
  return (
    <section className="section" style={{ height: height }} id={id}>
      <div className="content_container" style={{ height: height }}>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  height: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  height: 'auto',
  id: null,
};

export default Section;
