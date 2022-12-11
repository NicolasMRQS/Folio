import { useEffect, useRef } from 'react';

import './style.scss';

function Cursor() {
  const cursor = useRef(null);
  const cursorFollower = useRef(null);

  const handleMouseMove = (event) => {
    cursor.current.style.left = `${event.clientX - 10}px`;
    cursor.current.style.top = `${event.clientY - 10}px`;
  };

  useEffect(() => {
    console.log(window);
    document.addEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={cursor} className="cursor-dot" />
      <div ref={cursorFollower} className="cursor-dot-follower" />
    </>
  );
}

export default Cursor;
