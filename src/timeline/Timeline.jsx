import React from 'react';
import { useSpring, animated } from 'react-spring';
import Cards from '../cards/Cards';
import ScrollingText from '../scrolling-text/ScrollingText';
import LocationIcon from '../svg/LocationIcon';
import usePerspective from '../usePerspective';
import { titleLines, years } from './timeline-data';
import './Timeline.scss';

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
      <a href="https://kevcouscous.itch.io/koro-unijam2017" onClick={(e) => { e.stopPropagation(); }}>the ins and outs of making a video game in 48 hours.</a>
    </p>
  </div>,
  <div id="event2" key="event2-content">
    <h1 className="timeline__event__title">Data visualization programming internship</h1>
    <div className="timeline__event__location">
      <LocationIcon />
      <h2>Universiti Teknologi PETRONAS, Malaysia</h2>
    </div>
    <p className="timeline__event__description">
      I collaborated with machine learning researchers and developed a
      {' '}
      <a href="https://github.com/kyoshiro10500/GA-Viz">data visualization app for genetic algorithms.</a>
    </p>
  </div>,
  <div id="event3" key="event3-content">
    <h1 className="timeline__event__title">Ubisoft</h1>
    <div className="timeline__event__location">
      <LocationIcon />
      <h2>Montpellier, France</h2>
    </div>
    <p className="timeline__event__description">
      I implemented gameplay mechanics in C++ on
      {' '}
      {' '}
      <a href="https://www.youtube.com/watch?v=BLWt9MQLVgU">Tom Clancy&apos;s Ghost Recon Breakpoint</a>
      {' '}
      during the beta, debugging and post-launch cycles.
      {' '}
      <br />
      I also worked on AI features for
      {' '}
      <a href="https://www.youtube.com/watch?v=CC3GA2ddWFU">Riders Republic.</a>
    </p>
  </div>,
  <div id="event4" key="event4-content">
    <h1 className="timeline__event__title">Full-stack web projects</h1>
    <div className="timeline__event__location">
      <LocationIcon />
      <h2>Montpellier, France</h2>
    </div>
    <p className="timeline__event__description">
      I made the best of lockdown and learned Javascript from the bottom up,
      eventually picking my stack :
      React, Node, Express and MongoDB.
      <br />
      Take a look at my projects below!
    </p>
  </div>,
];

const Timeline = () => {
  const [titlePerspectiveStyle, perspectiveRef] = usePerspective({ factor: 3 });
  const [cardsPerspectiveStyle] = usePerspective({ factor: 6 }, perspectiveRef);
  const [yearPerspectiveStyle] = usePerspective({ factor: 2 }, perspectiveRef);

  const [{ cardPixelOffset, eventIndex }, setSpring] = useSpring(() => ({
    cardPixelOffset: 0,
    eventIndex: 0,
  }));

  return (
    <div className="timeline" ref={perspectiveRef}>
      <animated.div className="timeline__title__container" style={titlePerspectiveStyle}>
        <h1 className="timeline__title">My experience as</h1>
        <ScrollingText
          lines={titleLines}
          currentLineIndex={eventIndex}
        />
      </animated.div>
      <animated.div className="timeline__year" style={yearPerspectiveStyle}>
        <ScrollingText lines={years} currentLineIndex={eventIndex} />
      </animated.div>
      <animated.div className="timeline__events" style={cardsPerspectiveStyle}>
        <Cards
          spring={[{ cardPixelOffset }, setSpring]}
        >
          {renderTimelineEvents()}
        </Cards>
      </animated.div>
    </div>
  );
};

export default Timeline;
