import React from 'react';
import { animated } from 'react-spring';
import projects from './projects-data';
import Project from './Project';
import usePerspective from '../usePerspective';

const Projects = () => {
  const [perspectiveStyle, perspectiveRef] = usePerspective({ factor: 3 });
  return (
    <section className="w-full py-40 flex flex-col justify-start items-center bg-green space-y-8 skew" ref={perspectiveRef}>
      <div className="container w-7/12 flex flex-col space-y-16">
        <h1 className="text-black text-7xl">My projects</h1>
        <animated.div className="flex flex-row flex-wrap" style={perspectiveStyle}>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </animated.div>
      </div>
    </section>
  );
};

export default Projects;
