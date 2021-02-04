import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Card from './Card';
import { useWidth } from '../useElementBoundingRect';
import usePerspective from '../usePerspective';
import './Cards.scss';

const Cards = ({ spring, children }) => {
  const [{ cardPixelOffset }, setSpring] = spring;
  const getChildrenArray = () => React.Children.toArray(children);
  const [cardFrameWidth, cardFrameRef] = useWidth();
  const [cardIndex, setCardIndex] = useState(0);
  const dragThreshold = 50;

  const clampCardIndex = (index) => Math.min(Math.max(index, 0), getChildrenArray().length - 1);

  const setCardPixelOffset = (newCardPixelOffset) => {
    setSpring({
      cardPixelOffset: newCardPixelOffset,
      eventIndex: newCardPixelOffset / cardFrameWidth,
    });
  };

  const setCardOffsetWithIndex = (index) => {
    setCardIndex(index);
    setCardPixelOffset(-index * cardFrameWidth);
  };

  const onDragRelease = (x) => {
    if (x + cardIndex * cardFrameWidth > dragThreshold) {
      setCardOffsetWithIndex(clampCardIndex(cardIndex - 1));
    } else if (x + cardIndex * cardFrameWidth < -dragThreshold) {
      setCardOffsetWithIndex(clampCardIndex(cardIndex + 1));
    } else {
      setCardOffsetWithIndex(cardIndex);
    }
  };

  const cardDragBind = useDrag(
    ({ movement: [x], down, tap }) => {
      if (!down) {
        if (tap) {
          setCardOffsetWithIndex(clampCardIndex(cardIndex + 1));
        } else {
          onDragRelease(x);
        }
      } else {
        setCardPixelOffset(x);
      }
    },
    {
      initial: () => [cardPixelOffset.getValue(), 0],
    },
  );

  const computeCardTransform = (index) => cardPixelOffset.interpolate((offset) => `translateX(${offset + index * cardFrameWidth}px)`);

  const [cardPerspectiveStyle] = usePerspective({
    distance: 50, rotationFactor: 1 / 150,
  }, cardFrameRef);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <animated.div className="cards" ref={cardFrameRef} style={cardPerspectiveStyle} {...cardDragBind()}>
      {getChildrenArray().map((child, index) => (
        <animated.div key={child.props.id} className="card__container" style={{ transform: computeCardTransform(index) }}>
          <Card>{child}</Card>
        </animated.div>
      ))}
    </animated.div>
  );
};

Cards.propTypes = {
  spring: PropTypes.arrayOf(PropTypes.shape).isRequired,
  children: PropTypes.node.isRequired,
};

export default Cards;
