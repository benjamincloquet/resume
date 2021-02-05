import { useEffect } from 'react';
import { useSpring, interpolate } from 'react-spring';
import useElementBoundingRect from './useElementBoundingRect';

export default (params, existingRef) => {
  const [{ mouseX, mouseY }, set] = useSpring(() => ({ mouseX: 0, mouseY: 0 }));
  const [boundingRect, ref] = useElementBoundingRect(existingRef);

  const computeTranslation = (x, y) => ({
    xTranslation: (x * (params.factor || 1)) / 100,
    yTranslation: (y * (params.factor || 1)) / 100,
  });

  const computeTransform = (x, y) => {
    const { xTranslation, yTranslation } = computeTranslation(x, y);
    return `translateX(${xTranslation}px) translateY(${yTranslation}px)`;
  };

  const style = {
    transform: interpolate([mouseX, mouseY], (x, y) => computeTransform(x, y)),
  };

  const onMouseMove = (event) => {
    if (!boundingRect) {
      return;
    }
    const {
      left, top, width, height,
    } = boundingRect;
    set({
      mouseX: event.x - (left - window.scrollX) - (width / 2),
      mouseY: event.y - (top - window.scrollY) - (height / 2),
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
