import { useLayoutEffect, useState } from "preact/hooks";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useLayoutEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query));
    };
    const matchMedia = window.matchMedia(query);

    matchMedia.addEventListener("change", handleChange);
    return () => {
      matchMedia.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;

  function getMatches(query) {
    return window.matchMedia(query).matches;
  }
};

export { useMediaQuery };
