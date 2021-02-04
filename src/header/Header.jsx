import React from 'react';
import { animated } from 'react-spring';
import usePerspective from '../usePerspective';
import './Header.scss';

const Header = () => {
  const [namePerspectiveStyle, headerPerspectiveRef] = usePerspective({ factor: 1 });
  const [greetingPerspectiveStyle1] = usePerspective({ factor: 20 }, headerPerspectiveRef);
  const [greetingPerspectiveStyle2] = usePerspective({ factor: 10 }, headerPerspectiveRef);
  const [greetingPerspectiveStyle3] = usePerspective({ factor: 1 }, headerPerspectiveRef);

  return (
    <header>
      <div className="name__container">
        <animated.h6 className="name" style={namePerspectiveStyle}>benjamin cloquet</animated.h6>
      </div>
      <div className="greeting__container" ref={headerPerspectiveRef}>
        <animated.h1 className="greeting greeting--3" style={greetingPerspectiveStyle3}>Hello</animated.h1>
      </div>
      <div className="greeting__container">
        <animated.h1 className="greeting greeting--2" style={greetingPerspectiveStyle2}>Hello</animated.h1>
      </div>
      <div className="greeting__container">
        <animated.h1 className="greeting greeting--1" style={greetingPerspectiveStyle1}>Hello</animated.h1>
      </div>
    </header>
  );
};

export default Header;
