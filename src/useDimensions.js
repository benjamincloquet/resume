import { useEffect, useRef, useState } from 'react';

export default () => {
  const ref = useRef(null);
  const [{ width, height }, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: ref.current?.offsetWidth || 0,
      height: ref.current?.offsetHeight || 0,
    });
  }, [ref]);

  return [ref, [width, height]];
};
