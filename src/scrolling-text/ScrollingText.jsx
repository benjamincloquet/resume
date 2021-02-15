import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useHeight } from '../useElementBoundingRect';
import './ScrollingText.scss';

const ScrollingText = ({ lines, currentLineIndex }) => {
  const [boxHeight, ref] = useHeight();

  const computeLineTransform = (lineIndex) => currentLineIndex.interpolate((currentLineIndexValue) => `translateY(${(lineIndex - currentLineIndexValue) * boxHeight}px)`);

  return (
    <div className="scrolling-text" ref={ref}>
      {lines.map((line, index) => <animated.h1 key={line.id} className="scrolling-text__line" style={{ transform: computeLineTransform(index) }}>{line.value}</animated.h1>)}
    </div>
  );
};

ScrollingText.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.object).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentLineIndex: PropTypes.object.isRequired,
};

export default ScrollingText;
