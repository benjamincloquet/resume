import React from 'react';
import { useSpring } from 'react-spring';
import Section from '../Section';
import Cards from '../cards/Cards';
import ScrollingText from '../scrolling-text/ScrollingText';
import TimelineEvent from './TimelineEvent';

const renderTimelineEvents = () => [
  <TimelineEvent id="event1" key="event1-content" title="Master&apos;s degree in engineering" location="Telecom SudParis, France">
    <p className="text-2xl text-justify bg-white">
      I learned software engineering, management and
      {' '}
      <a href="https://kevcouscous.itch.io/koro-unijam2017" className="font-medium background-swipe-black py-1"><span className="text-white difference">the ins and outs of making a video game in 48 hours.</span></a>
    </p>
  </TimelineEvent>,
  <TimelineEvent id="event2" key="event2-content" title="Data visualization programming internship" location="Universiti Teknologi PETRONAS, Malaysia">
    <p className="text-2xl text-justify bg-white">
      I collaborated with machine learning researchers and developed a
      {' '}
      <a href="https://github.com/kyoshiro10500/GA-Viz" className="font-medium background-swipe-black py-1"><span className="text-white difference">data visualization app for genetic algorithms.</span></a>
    </p>
  </TimelineEvent>,
  <TimelineEvent id="event3" key="event3-content" title="Ubisoft" location="Montpellier, France">
    <p className="text-2xl text-justify bg-white">
      I implemented gameplay mechanics in C++ on
      {' '}
      {' '}
      <a href="https://www.youtube.com/watch?v=BLWt9MQLVgU" className="font-medium background-swipe-black py-1"><span className="text-white difference">Tom Clancy&apos;s Ghost Recon Breakpoint</span></a>
      {' '}
      during the beta, debugging and post-launch cycles.
      {' '}
      <br />
      I also worked on AI features for
      {' '}
      <a href="https://www.youtube.com/watch?v=CC3GA2ddWFU">Riders Republic.</a>
    </p>
  </TimelineEvent>,
  <TimelineEvent id="event4" key="event4-content" title="Full-stack web projects" location="Montpellier, France">
    <p className="text-2xl text-justify bg-white">
      I made the best of lockdown and learned Javascript from the bottom up,
      eventually picking my stack :
      React, Node, Express and MongoDB.
      <br />
      Take a look at my projects below!
    </p>
  </TimelineEvent>,
];

const Timeline = () => {
  const [{ selectedIndex }, setSpring] = useSpring(() => ({
    selectedIndex: 0,
  }));

  return (
    <Section className="bg-white skew" containerClassName="flex flex-col space-y-8">
      <div className="flex flex-col flex-wrap lg:flex-row lg:justify-between">
        <div className="flex-shrink-0 flex flex-col">
          <h1 className="text-black text-7xl inline-block">My experience as</h1>
          <ScrollingText
            className="inline-block"
            textClassName="text-7xl leading-7xl"
            currentLineIndex={selectedIndex}
          >
            a student
            <br />
            an intern
            <br />
            a programmer
            <br />
            a web developer
          </ScrollingText>
        </div>
        <ScrollingText
          className="inline-block"
          textClassName="text-10xl text-stroke-black text-transparent"
          currentLineIndex={selectedIndex}
        >
          2018
          <br />
          2018
          <br />
          2019
          <br />
          2020
        </ScrollingText>
      </div>
      <Cards
        spring={[{ selectedIndex }, setSpring]}
      >
        {renderTimelineEvents()}
      </Cards>
    </Section>
  );
};

export default Timeline;
