import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useHeight } from '../../useElementBoundingRect';
import './ScrollingTitle.scss';

const ScrollingTitle = ({ lines, offset }) => {
  const [ref, boxHeight] = useHeight();

  const computeLineTransform = (index) => offset.interpolate((normalizedOffset) => `translateY(${(index + normalizedOffset) * boxHeight}px)`);

  return (
    <div className="scrolling-title__box" ref={ref}>
      {lines.map((line, index) => <animated.h1 key={`scrolling-title-${line}`} className="scrolling-title" style={{ transform: computeLineTransform(index) }}>{line}</animated.h1>)}
    </div>
  );
};

ScrollingTitle.propTypes = {
  lines: PropTypes.arrayOf(PropTypes.string).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  offset: PropTypes.object.isRequired,
};

export default ScrollingTitle;
