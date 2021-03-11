/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { animated, useSprings } from 'react-spring';
import useRelativeMousePosition from './useRelativeMousePosition';

const InteractiveText = ({ className, children }) => {
  const lineCount = React.Children.count(children);
  const [springs, set] = useSprings(lineCount, () => ({ transform: `translateX(${0}px) translateY(${0}px)` }));

  const computeTransform = (index) => (x, y) => {
    const xTranslation = (x * index) / 50;
    const yTranslation = (y * index) / 50;
    return `translateX(${xTranslation}px) translateY(${yTranslation}px)`;
  };

  const onMouseMove = ({ x, y }) => {
    set((index) => ({ transform: computeTransform(index)(x, y) }));
  };

  const mousePositionRef = useRelativeMousePosition(onMouseMove);

  const renderText = () => React.Children.toArray(children).map((child, index) => (
    <div
      key={`${child.key}-${index}`}
      className="self-stretch flex-grow absolute top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4"
    >
      <animated.div style={springs[index]}>
        {child}
      </animated.div>
    </div>
  ));

  return (
    <div className={`${className} flex justify-center items-center relative`} ref={mousePositionRef}>
      {renderText()}
    </div>
  );
};

InteractiveText.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InteractiveText.defaultProps = {
  className: '',
};

export default InteractiveText;
