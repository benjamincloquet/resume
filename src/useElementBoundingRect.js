/* eslint-disable no-unused-vars */
import { useLayoutEffect, useRef, useState } from 'react';

const useElementBoundingRect = (existingRef) => {
  const ref = existingRef || useRef(null);
  const [boundingRect, setBoundingRect] = useState(null);

  useLayoutEffect(() => {
    setBoundingRect(ref.current?.getBoundingClientRect());

    const handleResize = () => {
      setBoundingRect(ref.current?.getBoundingClientRect());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
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
