/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSpring, animated } from 'react-spring';
import Cards from './cards/Cards';
import ScrollingTitle from './scrolling-title/ScrollingTitle';
import usePerspective from '../usePerspective';
import './Timeline.scss';

const steps = [
  {
    key: 'step1',
    scrollingTitle: 'a student',
    title: 'Master\'s degree in engineering',
  },
  {
    key: 'step2',
    scrollingTitle: 'an intern',
    title: 'Data visualization programming internship',
  },
  {
    key: 'step3',
    scrollingTitle: 'a gameplay programmer',
    title: 'Ubisoft Montpellier',
  },
];

const Timeline = () => {
  const [containerRef, titleStyle] = usePerspective(null, {
    distance: 100, xRotationCoef: 1 / 150, yRotationCoef: 1 / 150, distanceCoef: 1 / 500,
  });

  const cardSpring = useSpring(() => ({
    cardOffset: 0,
    normalizedOffset: 0,
  }));

  const [{ normalizedOffset }] = cardSpring;

  return (
    <div className="timeline" ref={containerRef}>
      <animated.div className="timeline__title-container" style={titleStyle}>
        <h1 className="timeline__title">My Experience as</h1>
        <ScrollingTitle
          lines={steps.map(({ scrollingTitle }) => scrollingTitle)}
          offset={normalizedOffset}
        />
      </animated.div>
      <Cards steps={steps} spring={cardSpring} />
    </div>
  );
};

export default Timeline;
