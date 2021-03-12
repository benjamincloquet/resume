import React from 'react';

const About = () => (
  <section className="w-full py-40 flex flex-col justify-start items-center bg-green space-y-8 skew">
    <div className="container w-7/12 flex flex-col space-y-8">
      <h1 className="text-black text-7xl self-start">This is me !</h1>
      <div className="container w-full flex flex-row items-center space-x-12">
        <div className="flex flex-col items-center space-y-2 flex-none transform hover:-translate-x-2 hover:-translate-y-2 transition ease-in-out duration-500">
          <img className="w-72 border-4 border-green-dark" src={`${process.env.PUBLIC_URL}/normandie.png`} alt="benjamin cloquet" />
          <legend className="text-2xl">fig. 1 : me</legend>
        </div>
        <div className="flex flex-col space-y-8 border-4 border-green-dark border-solid text-justify bg-white py-8 px-8 self-stretch transform hover:-translate-x-2 hover:-translate-y-2 transition ease-in-out duration-500">
          <p className="text-black text-2xl leading-8">
            I&apos;m an engineer and
            {' '}
            <b>web developer</b>
            .
          </p>
          <p className="text-black text-2xl leading-8">
            I&apos;ve been walking the earth for 24 years and fiddling with code for almost half of that !
            <br />
            I&apos;m also a huge fan of board games, basketball, dungeons & dragons, techno music and that first sip of beer after a long week.
          </p>
          <p className="text-black text-2xl leading-8">
            My stack for web projects is
            {' '}
            <b>MongoDB</b>
            ,
            {' '}
            <b>Node.js</b>
            ,
            {' '}
            <b>Express</b>
          &nbsp;and
            {' '}
            <b>React</b>
            .
            <br />
            This portfolio was also made using
            {' '}
            <b>TailwindCSS</b>
          &nbsp;and
            {' '}
            <b>react-spring</b>
            .
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
