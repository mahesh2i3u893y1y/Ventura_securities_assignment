import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// helper function to show the screen always from the top 

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
