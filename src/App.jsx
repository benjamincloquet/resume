import React from 'react';
import useSmoothScroll from './useSmoothScroll';
import Header from './Header';
import './App.css';

function App() {
  useSmoothScroll();

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
