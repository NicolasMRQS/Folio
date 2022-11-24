import PropTypes from 'prop-types';

import './style.scss';

function Section({ children, id, height }) {
  return (
    <section className="section" id={id} style={{ height: height }}>
      <div className="content_container">
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

Section.defaultProps = {
  id: null,
  height: null,
};

export default Section;
