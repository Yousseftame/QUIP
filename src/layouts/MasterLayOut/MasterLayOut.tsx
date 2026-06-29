import { Outlet, useLocation } from "react-router-dom";
import ScrollToTopButton from "@/components/ui/scroll-to-top";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, lenis]);

  return null;
}

const MasterLayout = () => {
  return (
      <>
          <ScrollToTop />
          <Outlet />
          <ScrollToTopButton />
      </>
  );
};

export default MasterLayout;
