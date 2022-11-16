import PropTypes from 'prop-types';

import './style.scss';

function Section({ children, height }) {
  return (
    <section className="section" style={{ height: height }}>
      <div className="content_container" style={{ height: height }}>
        {children}
      </div>
    </section>
  );
}

Section.propTypes = {
  height: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.DefaultProps = {
  height: "auto",
};

export default Section;
