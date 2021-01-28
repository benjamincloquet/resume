import { useEffect } from 'react';
import { useSpring } from 'react-spring';

export default (speed = 2) => {
  const [, set] = useSpring(() => ({
    y: window.scrollY,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
  }));

  const onWheelScroll = (event) => {
    event.preventDefault();
    set({ y: window.scrollY + event.deltaY * speed });
  };

  useEffect(() => {
    set({ y: window.scrollY });

    window.addEventListener('wheel', onWheelScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheelScroll, { passive: false });
    };
  }, []);
};
