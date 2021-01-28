import React from 'react';
import { animated } from 'react-spring';
import usePerspective from '../usePerspective';
import './Header.scss';

const Header = () => {
  const [containerRef, nameStyle] = usePerspective(null, {
    distance: 200, xRotationCoef: 1 / 25, yRotationCoef: 1 / 25, distanceCoef: 1 / 500,
  });
  const [, style] = usePerspective(containerRef, {
    distance: 200, xRotationCoef: 1 / 25, yRotationCoef: 1 / 25, distanceCoef: 1 / 500,
  });
  const [, style2] = usePerspective(containerRef, {
    distance: 100, xRotationCoef: 1 / 25, yRotationCoef: 1 / 25, distanceCoef: 1 / 500,
  });
  const [, style3] = usePerspective(containerRef, {
    distance: 5, xRotationCoef: 1 / 25, yRotationCoef: 1 / 25, distanceCoef: 1 / 500,
  });

  return (
    <header ref={containerRef}>
      <div className="name__container">
        <animated.h6 className="name" style={nameStyle}>benjamin cloquet</animated.h6>
      </div>
      <div className="greeting__container">
        <animated.h1 className="greeting greeting--3" style={style3}>Hello</animated.h1>
      </div>
      <div className="greeting__container">
        <animated.h1 className="greeting greeting--2" style={style2}>Hello</animated.h1>
      </div>
      <div className="greeting__container">
        <animated.h1 className="greeting greeting--1" style={style}>Hello</animated.h1>
      </div>
    </header>
  );
};

export default Header;
