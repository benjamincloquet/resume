/* eslint-disable no-unused-vars */
import { useLayoutEffect, useRef, useState } from 'react';

const useElementBoundingRect = (existingRef) => {
  const ref = existingRef || useRef(null);
  const [boundingRect, setBoundingRect] = useState(null);

  useLayoutEffect(() => {
    const updateBoundingRect = () => (setBoundingRect({
      left: ref.current?.getBoundingClientRect().left + window.scrollX,
      top: ref.current?.getBoundingClientRect().top + window.scrollY,
      width: ref.current?.getBoundingClientRect().width,
      height: ref.current?.getBoundingClientRect().height,
    }));

    updateBoundingRect();

    window.addEventListener('resize', updateBoundingRect);

    return () => {
      window.removeEventListener('resize', updateBoundingRect);
    };
  }, [ref]);

  return [boundingRect, ref];
};

const useWidth = (existingRef) => {
  const [boundingRect, ref] = useElementBoundingRect(existingRef);
  return [boundingRect?.width, ref];
};

const useHeight = (existingRef) => {
  const [boundingRect, ref] = useElementBoundingRect(existingRef);
  return [boundingRect?.height, ref];
};

export default useElementBoundingRect;
export { useWidth, useHeight };
