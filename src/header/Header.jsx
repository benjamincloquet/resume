import React from 'react';
import InteractiveText from '../interactive-text/InteractiveText';

const Header = () => (
  <header className="w-full h-screen py-10 flex flex-col justify-between items-center bg-white">
    <a
      href="https://www.linkedin.com/in/benjamin-cloquet/"
      className="background-swipe-black"
    >
      <h6 className="px-1 text-3xl text-white difference lowercase">Benjamin Cloquet</h6>
    </a>
    <InteractiveText className="flex-grow self-stretch">
      <h1 key="greeting" className="text-9xl text-green text-opacity-50 text-stroke-black-thin">Hello World</h1>
      <h1 key="greeting" className="text-9xl text-green text-opacity-70 text-stroke-black-thin">Hello World</h1>
      <h1 key="greeting" className="text-9xl text-green text-opacity-100 text-stroke-black-thin">Hello World</h1>
    </InteractiveText>
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mb-8 lowercase">Scroll to learn about me !</h1>
      <svg className="w-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </header>
);

export default Header;
