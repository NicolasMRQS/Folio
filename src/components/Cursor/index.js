import { useEffect, useRef } from 'react';
import AnimatedCursor from 'react-animated-cursor';

import './style.scss';

function Cursor() {
  // const cursor = useRef(null);
  // const cursorFollower = useRef(null);

  // const handleMouseMove = (event) => {
  //   cursor.current.style.left = `${event.clientX - 10}px`;
  //   cursor.current.style.top = `${event.clientY - 10}px`;
  // };

  // useEffect(() => {
  //   document.addEventListener('mousemove', handleMouseMove);
  // }, []);

  return (
    <>
      <AnimatedCursor
        color="259, 69, 0"
        innerSize={16}
        outerSize={16}
        innerScale={0.7}
        outerScale={4}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.clickable',
        ]}
      />
      {/* <div ref={cursor} className="cursor-dot" /> */}
      {/* <div ref={cursorFollower} className="cursor-dot-follower" /> */}
    </>
  );
}

export default Cursor;
