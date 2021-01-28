/* eslint-disable no-unused-vars */
import { useLayoutEffect, useRef, useState } from 'react';

const useElementBoundingRect = (existingRef) => {
  const ref = existingRef || useRef(null);
  const [boundingRect, setBoundingRect] = useState(null);

  useLayoutEffect(() => {
    setBoundingRect(ref.current?.getBoundingClientRect());
  }, [ref]);

  return [ref, boundingRect];
};

const useWidth = (existingRef) => {
  const [ref, boundingRect] = useElementBoundingRect(existingRef);
  return [ref, boundingRect?.width];
};

const useHeight = (existingRef) => {
  const [ref, boundingRect] = useElementBoundingRect(existingRef);
  return [ref, boundingRect?.height];
};

export default useElementBoundingRect;
export { useWidth, useHeight };
