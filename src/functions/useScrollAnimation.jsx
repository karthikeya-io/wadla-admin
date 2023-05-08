import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const onScroll = () => {
      const slideAnimElements = document.querySelectorAll('.slideanim');

      slideAnimElements.forEach((elem) => {
        const elemPosition = elem.getBoundingClientRect().top;
        const windowPosition = window.innerHeight - 600;

        if (elemPosition < windowPosition+600) {
          elem.classList.add('slide');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};

export default useScrollAnimation;
