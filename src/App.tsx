import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { useCallback, useEffect, useState } from "react";
import AOS from "aos";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import SplashScreen from "@/components/splash/SplashScreen";
import { SplashProvider } from "@/components/splash/splash-context";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  useEffect(() => {
    if (!splashDone) {
      return;
    }

    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, [splashDone]);

  return (
    <SmoothScrollProvider>
      <SplashProvider splashDone={splashDone}>
        <RouterProvider router={routes} />
      </SplashProvider>
      <SplashScreen onComplete={handleSplashComplete} />
    </SmoothScrollProvider>
  );
}

export default App;
