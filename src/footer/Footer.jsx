import React from 'react';
import Section from '../Section';

const Footer = () => (
  <Section className="pt-20 sm:pt-40 pb-20 bg-white skew" containerClassName="flex flex-col space-y-8">
    <h1 className="text-black text-6xl sm:text-7xl self-start">Contact me !</h1>
    <h2 className="text-black text-3xl sm:text-4xl">
      on
      {' '}
      <a
        href="https://www.linkedin.com/in/benjamin-cloquet/"
        className="background-swipe-black py-4 font-alte-bold"
      >
        <span className="px-1 text-3xl sm:text-5xl text-white difference lowercase">LinkedIn</span>
      </a>
    </h2>
    <h2 className="text-black text-3xl sm:text-4xl">
      or via mail at
      {' '}
      <span
        className="background-swipe-black py-4"
      >
        <span className="px-1 text-3xl sm:text-5xl text-white difference lowercase">benjamin.cloquet@gmail.com</span>
      </span>
    </h2>
  </Section>
);

export default Footer;
