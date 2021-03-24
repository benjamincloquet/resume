import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';

const ScrollingText = ({
  className, textClassName, currentLineIndex, children,
}) => {
  const ref = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    setLineHeight(getComputedStyle(ref.current)['line-height'].split('px')[0]);
  }, [ref]);

  const computeLineTransform = () => currentLineIndex.interpolate((currentLineIndexValue) => `translateY(${-currentLineIndexValue * lineHeight}px)`);

  return (
    <div className={`overflow-hidden ${className}`} style={{ height: `${lineHeight}px` }}>
      <animated.h1 ref={ref} className={`relative ${textClassName}`} style={{ transform: computeLineTransform() }}>
        {children}
      </animated.h1>
    </div>
  );
};

ScrollingText.propTypes = {
  className: PropTypes.string.isRequired,
  textClassName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentLineIndex: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollingText;
