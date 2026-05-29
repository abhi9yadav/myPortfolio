// src/hooks/useIntersectionObserver.js
import { useEffect } from 'react';

const useIntersectionObserver = (refs, setActiveSection, setVisibilityStates) => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-70px 0px -70px 0px', // Adjust for fixed navbar height
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          if (setVisibilityStates[entry.target.id]) {
            setVisibilityStates[entry.target.id](true);
          }
        } else {
          if (setVisibilityStates[entry.target.id]) {
            setVisibilityStates[entry.target.id](false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    refs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, setActiveSection, setVisibilityStates]);
};

export default useIntersectionObserver;