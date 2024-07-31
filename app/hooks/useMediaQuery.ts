"use client";

import { useState, useEffect } from "react";

export function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<boolean>();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener("change", listener); 
    return () => mediaQueryList.removeEventListener("change", listener); 
  }, [mediaQueryString]);

  return matches;
}
