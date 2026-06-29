import { cancelFrame, frame } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

function LenisFramerBridge() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) {
      return;
    }

    const instance = lenis;

    function onFrame({ timestamp }: { timestamp: number }) {
      instance.raf(timestamp);
    }

    frame.update(onFrame, true);

    return () => {
      cancelFrame(onFrame);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.12,
        smoothWheel: true,
        autoRaf: false,
        wheelMultiplier: 0.9,
      }}
    >
      <LenisFramerBridge />
      {children}
    </ReactLenis>
  );
}
