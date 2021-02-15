import React from 'react';
import { animated } from 'react-spring';
import usePerspective from '../usePerspective';
import './About.scss';

const About = () => {
  const [imagePerspectiveStyle, perspectiveRef] = usePerspective({ factor: 2 });
  const [titlePerspectiveStyle] = usePerspective({ factor: 1.5 }, perspectiveRef);
  const [textPerspectiveStyle] = usePerspective({ factor: 2.5 }, perspectiveRef);

  return (
    <div className="about" ref={perspectiveRef}>
      <animated.div className="about__img__container" style={imagePerspectiveStyle}>
        <img className="about__img" src={`${process.env.PUBLIC_URL}/normandie.png`} alt="benjamin cloquet" />
      </animated.div>
      <animated.p className="about__text" style={textPerspectiveStyle}>
        <animated.h1 className="about__title" style={titlePerspectiveStyle}>This is me!</animated.h1>
        I&apos;ve been walking the earth for 24 years and fiddling with code for almost half of that.
        <br />
        I&apos;m also a huge fan of board games, basketball, techno music and that first sip of beer after a long week.
      </animated.p>
    </div>
  );
};

export default About;
