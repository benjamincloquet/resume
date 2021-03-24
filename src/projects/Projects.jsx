import React from 'react';
import { animated } from 'react-spring';
import Section from '../Section';
import projects from './projects-data';
import Project from './Project';

const Projects = () => (
  <Section className="bg-green skew" containerClassName="flex flex-col space-y-16">
    <h1 className="text-black text-7xl">My projects</h1>
    <animated.div className="flex flex-row flex-wrap">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </animated.div>
  </Section>
);

export default Projects;
