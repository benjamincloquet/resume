import React from 'react';
import useSmoothScroll from './useSmoothScroll';
import Header from './header/Header';
import About from './about/About';
import Timeline from './timeline/Timeline';
import Projects from './projects/Projects';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <Header />
      <About />
      <Timeline />
      <Projects />
    </div>
  );
}

export default App;
