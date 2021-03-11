import { useEffect } from 'react';
import useElementBoundingRect from '../useElementBoundingRect';

export default (onMouseMove) => {
  const [boundingRect, ref] = useElementBoundingRect();

  const handleMouseMoveEvent = (event) => {
    if (!boundingRect) {
      return;
    }
    const {
      left, top, width, height,
    } = boundingRect;
    onMouseMove({
      x: event.x - (left - window.scrollX) - (width / 2),
      y: event.y - (top - window.scrollY) - (height / 2),
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMoveEvent);
    return () => {
      window.removeEventListener('mousemove', handleMouseMoveEvent);
    };
  }, [boundingRect]);

  return ref;
};
