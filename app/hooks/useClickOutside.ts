import { useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void) => {
  const clickOutsideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (clickOutsideRef.current && !clickOutsideRef.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return clickOutsideRef;
};
