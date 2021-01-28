/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import useElementBoundingRect from './useElementBoundingRect';

export default (existingRef) => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const [containerRef, boundingRect] = useElementBoundingRect(existingRef);
  const ref = useRef(null);

  const onMouseMove = (event) => {
    if (!boundingRect) {
      return;
    }
    const {
      left, width,
    } = boundingRect;
    const xOffset = event.x - left - (width / 2);
    const rotationCoef = 1 / 25;
    // ref.current.style.transform = [...ref.current.style.transform, { rotateY: `${-xOffset * rotationCoef}` }];
    console.log(ref.current.style);
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [boundingRect]);

  return [containerRef, ref];
};
