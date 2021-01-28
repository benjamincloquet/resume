import React from 'react';
import usePerspective from '../usePerspective';
import './Header.scss';

const Header = () => {
  const [containerRef, nameRef] = usePerspective();
  const [, greetingRef] = usePerspective(containerRef);

  return (
    <header ref={containerRef}>
      <h6 className="name" ref={nameRef}>benjamin cloquet</h6>
      <div className="greeting-container">
        <h1 className="greeting" ref={greetingRef} style={{ color: 'red' }}>Hello!</h1>
      </div>
    </header>
  );
};

export default Header;
