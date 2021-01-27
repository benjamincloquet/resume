import React from 'react';
import useSmoothScroll from './useSmoothScroll';
import Header from './header/Header';
import Timeline from './timeline/Timeline';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <Header />
      <Timeline />
    </div>
  );
}

export default App;
