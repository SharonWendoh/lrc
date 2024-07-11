import { useState, useEffect, useRef, useCallback } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (callback: (entry: ResizeObserverEntry) => void) => {
  const [node, setNode] = useState<HTMLElement | null>(null);
  const observer = useRef<ResizeObserver | null>(null);

  const disconnect = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
  }, []);

  const observe = useCallback(() => {
    if (node && observer.current) {
      observer.current.observe(node);
    }
  }, [node]);

  useEffect(() => {
    observer.current = new ResizeObserver((entries) => {
      entries.forEach(callback);
    });
    observe();
    return () => disconnect();
  }, [callback, disconnect, observe]);

  return [setNode];
};

export default useResizeObserver;
