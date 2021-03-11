import React from 'react';

const Footer = () => (
  <section className="w-full pt-40 pb-20 flex flex-col justify-start items-center bg-white space-y-8 skew">
    <div className="container w-7/12 flex flex-col space-y-8">
      <h1 className="text-black text-7xl self-start">Contact me !</h1>
      <h2 className="text-black text-4xl">
        on
        {' '}
        <a
          href="https://www.linkedin.com/in/benjamin-cloquet/"
          className="background-swipe-black py-4 font-alte-bold"
        >
          <span className="px-1 text-5xl text-white difference lowercase">LinkedIn</span>
        </a>
      </h2>
      <h2 className="text-black text-4xl">
        or via mail at
        {' '}
        <span
          className="background-swipe-black py-4"
        >
          <span className="px-1 text-5xl text-white difference lowercase">benjamin.cloquet@gmail.com</span>
        </span>
      </h2>
    </div>
  </section>
);

export default Footer;
