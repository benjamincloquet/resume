import React from 'react';
import { useSpring, animated } from 'react-spring';
import Cards from './cards/Cards';
import ScrollingTitle from './scrolling-title/ScrollingTitle';
import LocationIcon from '../icons/LocationIcon';
import DiplomaIcon from '../icons/DiplomaIcon';
import usePerspective from '../usePerspective';
import './Timeline.scss';

const scrollingTitleLines = ['a student', 'an intern', 'a gameplay programmer', 'a web developer'];

const renderTimelineEvents = () => [
  <div id="event1" key="event1-content">
    <h1 className="timeline__event__title">Master&apos;s degree in engineering</h1>
    <div className="timeline__event__location">
      <LocationIcon />
      <h2>Telecom SudParis, France</h2>
    </div>
    <p className="timeline__event__description">
      I learned software engineering, management and
      {' '}
      <a href="blank">the ins and outs of making a video game in 48 hours.</a>
    </p>
  </div>,
  <div id="event2" key="event2-content">
    <h1 className="timeline__event__title">Data visualization programming internship</h1>
    <div className="timeline__event__location">
      <LocationIcon />
      <h2>Universiti Teknologi PETRONAS, Malaysia</h2>
    </div>
  </div>,
];

const Timeline = () => {
  const [titlePerspectiveStyle, perspectiveRef] = usePerspective({
    distance: 100, xRotationCoef: 1 / 150, yRotationCoef: 1 / 150, distanceCoef: 1 / 500,
  });

  const [{ cardPixelOffset, eventIndex }, setSpring] = useSpring(() => ({
    cardPixelOffset: 0,
    eventIndex: 0,
  }));

  return (
    <div className="timeline" ref={perspectiveRef}>
      <div className="timeline__events">
        <animated.div className="timeline__title__container" style={titlePerspectiveStyle}>
          <h1 className="timeline__title">My experience as</h1>
          <ScrollingTitle
            lines={scrollingTitleLines}
            currentLineIndex={eventIndex}
          />
        </animated.div>
        <Cards
          spring={[{ cardPixelOffset }, setSpring]}
        >
          {renderTimelineEvents()}
        </Cards>
      </div>
      <div className="timeline__icon">
        <DiplomaIcon />
      </div>
    </div>
  );
};

export default Timeline;
