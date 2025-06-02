import { useEffect, useState } from "react";

const useTailwindBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); // lg = 1024px

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    // Initial check
    setIsMobile(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
};

export default useTailwindBreakpoint;
