import {useRef} from 'react';

export const useSwipeScrollOffset = (scrollHandler) => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current.scrollLeft % document.documentElement.clientWidth === 0) {
      scrollHandler(scrollRef.current.scrollLeft / document.documentElement.clientWidth);
    }
  };

  return [scrollRef, handleScroll];
};
