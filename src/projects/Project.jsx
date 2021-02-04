import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import usePerspective from '../usePerspective';
import './Project.scss';

const Project = ({ project: { id, title, description } }) => {
  const [perspectiveStyle, perspectiveRef] = usePerspective({ factor: 3 });

  return (
    <animated.div className="project__box" style={perspectiveStyle}>
      <div key={id} className="project" ref={perspectiveRef}>
        <h1 className="project__title">{title}</h1>
        <p className="project__description">
          {description}
        </p>
        <div className="project__github">
          <svg xmlns="http://www.w3.org/2000/svg" className="project__github__icon" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
          <p className="project__github__text">Click me to check the repo on GitHub !</p>
        </div>
      </div>
    </animated.div>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
