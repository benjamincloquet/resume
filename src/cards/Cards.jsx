/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Card from './Card';
import { useWidth } from '../useElementBoundingRect';
import usePerspective from '../usePerspective';
import './Cards.scss';

const Cards = ({ spring, children }) => {
  const [{ selectedIndex }, setSpring] = spring;
  const getChildrenArray = () => React.Children.toArray(children);
  const [cardFrameWidth, cardFrameRef] = useWidth();
  const [lastSelectedCardIndex, setLastSelectedCardIndex] = useState(0);
  const dragThreshold = 50;

  const clampCardIndex = (cardIndex) => Math.min(Math.max(cardIndex, 0), getChildrenArray().length - 1);

  const getIndexFromOffset = (offset) => -offset / cardFrameWidth;

  const getOffsetFromIndex = (index) => -index * cardFrameWidth;

  const setSelectedIndex = (newSelectedIndex) => {
    setSpring({
      selectedIndex: newSelectedIndex,
    });
  };

  const forceSelectedIndex = (newSelectedIndex) => {
    setLastSelectedCardIndex(newSelectedIndex);
    setSelectedIndex(newSelectedIndex);
  };

  const onDragRelease = (x) => {
    if (x + lastSelectedCardIndex * cardFrameWidth > dragThreshold) {
      forceSelectedIndex(clampCardIndex(lastSelectedCardIndex - 1));
    } else if (x + lastSelectedCardIndex * cardFrameWidth < -dragThreshold) {
      forceSelectedIndex(clampCardIndex(lastSelectedCardIndex + 1));
    } else {
      forceSelectedIndex(lastSelectedCardIndex);
    }
  };

  const cardDragBind = useDrag(
    ({ movement: [x], down, tap }) => {
      if (!down) {
        if (!tap) {
          onDragRelease(x);
        }
      } else {
        setSelectedIndex(getIndexFromOffset(x));
      }
    },
    {
      initial: () => [getOffsetFromIndex(selectedIndex.getValue()), 0],
    },
    { useTouch: true },
  );

  const computeCardTransform = () => selectedIndex.interpolate((selectedIndexValue) => `translateX(${getOffsetFromIndex(selectedIndexValue)}px)`);

  const [cardPerspectiveStyle] = usePerspective({ factor: 2 }, cardFrameRef);

  const computeCounterOpacity = (cardIndex, selectedIndexValue) => {
    const value = Math.min(Math.max(1 - (Math.abs(cardIndex - selectedIndexValue)), 0), 1);
    return value;
  };

  const computeCounterStyle = (cardIndex) => ({
    backgroundColor: selectedIndex.interpolate((selectedIndexValue) => `rgba(0, 0, 0, ${computeCounterOpacity(cardIndex, selectedIndexValue)})`),
  });

  const handleCounterClick = (cardIndex) => {
    forceSelectedIndex(cardIndex);
  };

  const handleArrowClick = (side) => {
    const indexOffset = (side === 'left') ? -1 : 1;
    forceSelectedIndex(clampCardIndex(lastSelectedCardIndex + indexOffset));
  };

  return (
    <animated.div className="cards" style={cardPerspectiveStyle} {...cardDragBind()}>
      <button className="cards__arrow cards__arrow--left" type="button" aria-label="Left" onClick={() => handleArrowClick('left')} />
      <div className="cards__frame" ref={cardFrameRef}>
        {getChildrenArray().map((child) => (
          <animated.div key={child.props.id} className="card__container" style={{ transform: computeCardTransform() }}>
            <Card>{child}</Card>
          </animated.div>
        ))}
      </div>
      <button className="cards__arrow cards__arrow--right" type="button" aria-label="Right" onClick={() => handleArrowClick('right')} />
      <div className="cards__counter__container">
        {getChildrenArray().map((child, index) => (
          <animated.div key={`${child.props.id}-counter`} className="cards__counter" style={computeCounterStyle(index)} onClick={() => handleCounterClick(index)} />
        ))}
      </div>
    </animated.div>
  );
};

Cards.propTypes = {
  spring: PropTypes.arrayOf(PropTypes.shape).isRequired,
  children: PropTypes.node.isRequired,
};

export default Cards;
