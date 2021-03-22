import React from 'react';
import { animated } from 'react-spring';
import Section from '../Section';
import projects from './projects-data';
import Project from './Project';
import usePerspective from '../usePerspective';

const Projects = () => {
  const [perspectiveStyle, perspectiveRef] = usePerspective({ factor: 3 });
  return (
    <Section className="bg-green skew" containerClassName="flex flex-col space-y-16" ref={perspectiveRef}>
      <h1 className="text-black text-7xl">My projects</h1>
      <animated.div className="flex flex-row flex-wrap" style={perspectiveStyle}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </animated.div>
    </Section>
  );
};

export default Projects;
