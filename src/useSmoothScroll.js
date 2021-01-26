import { useEffect } from 'react';
import { useSpring } from 'react-spring';

export default (speed = 3) => {
  // eslint-disable-next-line no-unused-vars
  const [y, set] = useSpring(() => ({
    y: 0,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
  }));

  useEffect(() => {
    window.addEventListener('wheel', (event) => {
      event.preventDefault();
      set({ y: window.scrollY + event.deltaY * speed });
    }, { passive: false });
  }, []);
};
