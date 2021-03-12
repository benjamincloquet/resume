import React from 'react';
import PropTypes from 'prop-types';

const Project = ({
  project: {
    title, description, link, large,
  },
}) => (
  <div className={`flex-grow mx-2 my-2 ${large ? 'w-full' : 'w-1/3'}`}>
    <div className="bg-green border-4 w-full border-black hover:shadow transition transform hover:-translate-x-2 hover:-translate-y-2 ease-in-out duration-500">
      <a href={link} className="">
        <div className="w-full h-full background-swipe-white px-4 py-4">
          <h1 className="text-3xl inline-block">{title}</h1>
          <p className="text-2xl">
            {description}
          </p>
          <div className="flex flex-row space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
            <p className="text-xl">Click me to check the repo on GitHub !</p>
          </div>
        </div>
      </a>
    </div>
  </div>
);

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    large: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Project;
