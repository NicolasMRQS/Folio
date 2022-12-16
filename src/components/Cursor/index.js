import AnimatedCursor from 'react-animated-cursor';

function Cursor() {
  return (
    <AnimatedCursor
      color="259, 69, 0"
      innerSize={16}
      outerSize={16}
      innerScale={0}
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
  );
}

export default Cursor;
