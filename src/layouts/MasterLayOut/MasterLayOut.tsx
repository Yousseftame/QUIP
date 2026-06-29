import { Outlet } from "react-router-dom";
import ScrollToTopButton from "@/components/ui/scroll-to-top";


const MasterLayout = () => {
  return (
      <>
          <Outlet />
          <ScrollToTopButton />
      </>
  );
};

export default MasterLayout;
