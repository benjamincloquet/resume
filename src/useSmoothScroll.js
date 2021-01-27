import { useEffect } from 'react';
import { useSpring } from 'react-spring';

export default (speed = 2) => {
  // eslint-disable-next-line no-unused-vars
  const [{ y }, set] = useSpring(() => ({
    y: window.scrollY,
    onFrame: (props) => {
      window.scroll(0, props.y);
    },
  }));

  useEffect(() => {
    set({ y: window.scrollY });

    window.addEventListener('wheel', (event) => {
      event.preventDefault();
      set({ y: window.scrollY + event.deltaY * speed });
    }, { passive: false });
  }, []);
};
