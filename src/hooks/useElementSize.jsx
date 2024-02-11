import { useLayoutEffect, useMemo, useRef, useState } from "react";

const subscribe = Object.assign(
  (el, resizeCallback) => {
    subscribe.callbacks.set(el, resizeCallback);
    if (!subscribe.observerSingleton) {
      subscribe.observerSingleton = new ResizeObserver((entries) => {
        const callbacksEntries = [...subscribe.callbacks];
        callbacksEntries.forEach(([el, cb]) =>
          cb(entries.filter(({ target }) => target === el))
        );
      });
    }
    subscribe.observerSingleton.observe(el);
    return () => {
      subscribe.observerSingleton?.unobserve(el);
      subscribe.callbacks.delete(el);
    };
  },
  {
    callbacks: new Map(),
    observerSingleton: undefined,
  }
);

const useElementSize = (ref) => {
  const elRef = useRef(null);
  const [{ height, width }, setSize] = useState(() => ({
    width: undefined, // so they can set default values
    height: undefined, // in the consuming component
  }));

  useLayoutEffect(() => {
    const element = elRef.current || ref?.current;
    if (element) {
      const unsub = subscribe(element, (entries) => {
        entries.forEach(({ contentRect: { height, width } }) => {
          setSize({ height, width });
        });
      });
      return () => unsub();
    }
  }, [ref]);

  return useMemo(() => ({ height, width, ref: elRef }), [height, width]);
};

export default useElementSize;
