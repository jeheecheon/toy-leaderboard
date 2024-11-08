import { useEffect, useRef } from "react";

function useInfiniteScroll(callback: () => void, delay = 3000) {
  const loadingRef = useRef<HTMLDivElement>(null);

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

    if (loadingRef.current) observer.observe(loadingRef.current);

    return () => {
      if (loadingRef.current) observer.unobserve(loadingRef.current);
    };
  }, [callback, delay]);

  return loadingRef;
}

export default useInfiniteScroll;
