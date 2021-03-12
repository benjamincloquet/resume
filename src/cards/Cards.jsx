/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Card from './Card';
import { useWidth } from '../useElementBoundingRect';

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
    <div className="flex flex-col items-center space-y-8 border-green border-4 py-12 transform hover:-translate-x-2 hover:-translate-y-2 transition ease-in-out duration-500">
      <div className="relative flex flex-row justify-center w-full" {...cardDragBind()}>
        <button className="w-1/12 flex-none flex justify-center items-center no-outline" type="button" aria-label="Left" onClick={() => handleArrowClick('left')}>
          <svg className="w-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="relative flex overflow-hidden cursor-grab" ref={cardFrameRef}>
          {getChildrenArray().map((child) => (
            <animated.div key={child.props.id} className="w-full flex-none px-8" style={{ transform: computeCardTransform() }}>
              <Card>{child}</Card>
            </animated.div>
          ))}
        </div>
        <button className="w-1/12 flex-none flex justify-center items-center no-outline" type="button" aria-label="Right" onClick={() => handleArrowClick('right')}>
          <svg className="w-1/2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex flex-row space-x-2">
        {getChildrenArray().map((child, index) => (
          <animated.div key={`${child.props.id}-counter`} className="w-4 h-4 rounded-full border-2 border-solid border-black cursor-pointer" style={computeCounterStyle(index)} onClick={() => handleCounterClick(index)} />
        ))}
      </div>
    </div>
  );
};

Cards.propTypes = {
  spring: PropTypes.arrayOf(PropTypes.shape).isRequired,
  children: PropTypes.node.isRequired,
};

export default Cards;
