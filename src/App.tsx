import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { useEffect } from "react";
import AOS from "aos";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <SmoothScrollProvider>
      <RouterProvider router={routes} />
    </SmoothScrollProvider>
  );
}

export default App;
