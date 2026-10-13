'use client';

import { useLayoutEffect } from 'react';

const SCROLL_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
]);

export function useIntroScrollLock(isActive: boolean) {
  useLayoutEffect(() => {
    if (!isActive) return;

    const root = document.documentElement;
    const body = document.body;
    const previousRoot = {
      overflow: root.style.overflow,
      overscrollBehavior: root.style.overscrollBehavior,
      scrollBehavior: root.style.scrollBehavior,
    };
    const previousBody = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      touchAction: body.style.touchAction,
    };
    const previousScrollRestoration = window.history.scrollRestoration;

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const preventScroll = (event: Event) => event.preventDefault();
    const preventScrollKey = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) event.preventDefault();
    };

    window.history.scrollRestoration = 'manual';
    root.style.scrollBehavior = 'auto';
    resetScroll();

    Object.assign(root.style, { overflow: 'hidden', overscrollBehavior: 'none' });
    // Fixed positioning also locks touch scrolling in iOS Safari.
    Object.assign(body.style, {
      overflow: 'hidden',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      width: '100%',
      touchAction: 'none',
    });

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKey);
    window.addEventListener('scroll', resetScroll);
    window.addEventListener('pageshow', resetScroll);
    const frame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKey);
      window.removeEventListener('scroll', resetScroll);
      window.removeEventListener('pageshow', resetScroll);
      Object.assign(body.style, previousBody);
      Object.assign(root.style, previousRoot, { scrollBehavior: 'auto' });
      resetScroll();
      root.style.scrollBehavior = previousRoot.scrollBehavior;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [isActive]);
}
