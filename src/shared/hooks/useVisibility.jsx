import { useEffect, useState } from "react";

const useVisibility = ({
  elRef,
  onVisible = undefined,
  onInvisible = undefined,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (onVisible) onVisible();
        } else {
          setIsVisible(false);
          if (onInvisible) onInvisible();
        }
      },
      {
        threshold: 0.1,
      },
    );
    const el = elRef?.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [onVisible, onInvisible, elRef]);

  return [isVisible];
};

export default useVisibility;
