import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({children}) => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
      console.log(pathname);
    }, [pathname]);

    return children;
}

export default ScrollToTop;