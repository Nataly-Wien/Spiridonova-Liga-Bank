import {useRef} from 'react';

const originalOverflow = window.getComputedStyle(document.body).overflow;
const originalPaddingRight = window.getComputedStyle(document.body).paddingRight;
const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
// console.log(window.innerWidth, document.documentElement.clientWidth, scrollWidth);

export const useScrollBlock = () => {
  const scrollBlocked = useRef();

  const blockScroll = () => {
    if (scrollBlocked.current) {
      return
    };

    document.body.style.overflow = `hidden`;
    document.body.style.paddingRight = `${parseInt(originalPaddingRight) + scrollWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!scrollBlocked.current) {
      return
    };

    document.body.style.overflow = originalOverflow;
    document.body.style.paddingRight = originalPaddingRight;

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
