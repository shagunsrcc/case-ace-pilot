import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    elementsRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all scroll animation elements
    const animatedElements = document.querySelectorAll(
      '.scroll-fade-in, .scroll-scale-in, .scroll-slide-left, .scroll-slide-right'
    );

    animatedElements.forEach((element) => {
      elementsRef.current?.observe(element);
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.disconnect();
      }
    };
  }, []);

  return null;
};