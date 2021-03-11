import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useHeight } from '../useElementBoundingRect';

const ScrollingText = ({
  lines, className, lineClassName, currentLineIndex,
}) => {
  const [boxHeight, ref] = useHeight();

  const computeLineTransform = (lineIndex) => currentLineIndex.interpolate((currentLineIndexValue) => `translateY(${(lineIndex - currentLineIndexValue) * boxHeight}px)`);

  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      {lines.map((line, index) => <animated.h1 key={line.id} className={`absolute ${lineClassName}`} style={{ transform: computeLineTransform(index) }}>{line.value}</animated.h1>)}
    </div>
  );
};

ScrollingText.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string.isRequired,
  lineClassName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentLineIndex: PropTypes.object.isRequired,
};

export default ScrollingText;
