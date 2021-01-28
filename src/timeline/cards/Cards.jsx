import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDrag } from 'react-use-gesture';
import { useWidth } from '../../useElementBoundingRect';
import Card from './Card';
import './Cards.scss';

const Cards = ({ steps, spring: [{ cardOffset }, setCardStyle] }) => {
  const [ref, cardFrameWidth] = useWidth();
  const [cardIndex, setCardIndex] = useState(0);
  const dragThreshold = 50;

  const clampCardIndex = (index) => Math.min(Math.max(index, 0), steps.length - 1);

  const setCardOffset = (offset) => {
    setCardStyle({
      cardOffset: offset,
      normalizedOffset: offset / cardFrameWidth,
    });
  };

  const setCardOffsetWithIndex = (index) => {
    setCardIndex(index);
    setCardOffset(-index * cardFrameWidth);
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
        setCardOffset(x);
      }
    },
    {
      initial: () => [cardOffset.getValue(), 0],
    },
  );

  const computeCardTransform = (index) => cardOffset.interpolate((offset) => `translateX(${offset + index * cardFrameWidth}px)`);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className="cards" ref={ref} {...cardDragBind()}>
      {steps.map(({ key, title }, index) => (
        <Card key={key} title={title} style={{ transform: computeCardTransform(index) }} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape).isRequired,
  spring: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Cards;
