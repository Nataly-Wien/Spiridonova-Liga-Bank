import {useRef} from 'react';

const safeDocument = typeof document !== `undefined` ? document : {};

export const useScrollBlock = () => {
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const {body} = safeDocument;
  const originalOverflow = window.getComputedStyle(document.body).overflow;
  const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) return;

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    body.style.overflow = `hidden`;
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) return;

    body.style.overflow = originalOverflow;
    body.style.paddingRight = `${bodyPaddingRight}px`;
    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
