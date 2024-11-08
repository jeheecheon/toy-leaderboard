import { useEffect, useRef } from "react";

function useInfiniteScroll(callback: () => void, delay = 3000) {
  const loadingRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            callback();
          }, delay);
          return () => clearTimeout(timer);
        }
      },
      { root: null, rootMargin: "0px", threshold: 1.0 }
    );

    observer.observe(loadingRef.current);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      observer.unobserve(loadingRef.current);
    };
  }, [callback, delay]);

  return loadingRef;
}

export default useInfiniteScroll;
