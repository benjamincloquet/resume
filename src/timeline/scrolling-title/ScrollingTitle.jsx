import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useHeight } from '../../useElementBoundingRect';
import './ScrollingTitle.scss';

const ScrollingTitle = ({ lines, currentLineIndex }) => {
  const [boxHeight, ref] = useHeight();

  const computeLineTransform = (lineIndex) => currentLineIndex.interpolate((currentLineIndexValue) => `translateY(${(lineIndex + currentLineIndexValue) * boxHeight}px)`);

  return (
    <div className="scrolling-title__box" ref={ref}>
      {lines.map((line, index) => <animated.h1 key={`scrolling-title-${line}`} className="scrolling-title" style={{ transform: computeLineTransform(index) }}>{line}</animated.h1>)}
    </div>
  );
};

ScrollingTitle.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentLineIndex: PropTypes.object.isRequired,
};

export default ScrollingTitle;
