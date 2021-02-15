import React from 'react';
import { animated } from 'react-spring';
import usePerspective from '../usePerspective';
import './Header.scss';

const Header = () => {
  const [namePerspectiveStyle, headerPerspectiveRef] = usePerspective({ factor: 1 });
  const [greetingPerspectiveStyle1] = usePerspective({ factor: 20 }, headerPerspectiveRef);
  const [greetingPerspectiveStyle2] = usePerspective({ factor: 10 }, headerPerspectiveRef);
  const [greetingPerspectiveStyle3] = usePerspective({ factor: 1 }, headerPerspectiveRef);
  const [scrollTipPerspectiveStyle] = usePerspective({ factor: 2 }, headerPerspectiveRef);

  return (
    <header ref={headerPerspectiveRef}>
      <div className="name__container">
        <a href="https://www.linkedin.com/in/benjamin-cloquet/"><animated.h6 className="name" style={namePerspectiveStyle}>benjamin cloquet</animated.h6></a>
      </div>
      <animated.h1 className="greeting greeting--3" style={greetingPerspectiveStyle3}>Hello</animated.h1>
      <animated.h1 className="greeting greeting--2" style={greetingPerspectiveStyle2}>Hello</animated.h1>
      <animated.h1 className="greeting greeting--1" style={greetingPerspectiveStyle1}>Hello</animated.h1>
      <animated.div className="scroll-tip" style={scrollTipPerspectiveStyle}>
        <h1>scroll to learn about me</h1>
        <div style={scrollTipPerspectiveStyle} className="down-arrow" />
      </animated.div>
    </header>
  );
};

export default Header;
