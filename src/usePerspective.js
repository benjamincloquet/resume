/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { useSpring, interpolate } from 'react-spring';
import useElementBoundingRect from './useElementBoundingRect';

export default ({
  distance = 0, xRotationCoef = 0, yRotationCoef = 0, distanceCoef = 0,
}, existingRef) => {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
  const [boundingRect, ref] = useElementBoundingRect(existingRef);
  const style = {
    transform: interpolate([x, y], (interpolatedX, interpolatedY) => `rotateX(${-interpolatedY * yRotationCoef}deg) rotateY(${interpolatedX * xRotationCoef}deg) translateZ(${distance * Math.sqrt(interpolatedX ** 2 + interpolatedY ** 2) * distanceCoef}px)`),
  };

  const onMouseMove = (event) => {
    if (!boundingRect) {
      return;
    }
    const {
      left, top, width, height,
    } = boundingRect;
    set({
      x: event.x - left - (width / 2),
      y: event.y - top - (height / 2),
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [boundingRect]);

  return [style, ref];
};
