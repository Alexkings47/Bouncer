import { useRef, useEffect, useState } from "react";


/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideAlerter(inintialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(inintialIsVisible);
  const ref = useRef(null);
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      // console.log(false);
      setIsComponentVisible(false);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside, true);
    // console.log(true);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside, true);
      // console.log(true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

/**
 * Component that alerts if you click outside of it
 */
