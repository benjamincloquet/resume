import React from 'react';
import { animated } from 'react-spring';
import projects from './projects-data';
import Project from './Project';
import usePerspective from '../usePerspective';
import './Projects.scss';

const Projects = () => {
  const [titlePerspective, titleRef] = usePerspective({ factor: 2 });

  return (
    <div className="projects" ref={titleRef}>
      <animated.h1 className="projects__title" style={titlePerspective}>My projects</animated.h1>
      <div className="projects__box">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
