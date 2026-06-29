import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const OPEN_MS = 2200;
const HOLD_MS = 900;
const CLOSE_MS = 1100;

type SplashPhase = "opening" | "hold" | "closing" | "done";

type SplashScreenProps = {
  onComplete: () => void;
};

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [phase, setPhase] = useState<SplashPhase>("opening");
  const [curtainsParted, setCurtainsParted] = useState(false);
  const completedRef = useRef(false);
  const isClosing = phase === "closing";
  const contentVisible = curtainsParted && !isClosing;

  useEffect(() => {
    document.body.classList.add("splash-active");

    const openHold = prefersReducedMotion ? 400 : OPEN_MS;
    const hold = prefersReducedMotion ? 200 : HOLD_MS;
    const partDelay = prefersReducedMotion ? 80 : 900;

    const partTimer = window.setTimeout(() => setCurtainsParted(true), partDelay);
    const holdTimer = window.setTimeout(() => setPhase("hold"), openHold);
    const closeTimer = window.setTimeout(() => setPhase("closing"), openHold + hold);
    const doneTimer = window.setTimeout(() => {
      if (completedRef.current) {
        return;
      }
      completedRef.current = true;
      setPhase("done");
      setVisible(false);
      document.body.classList.remove("splash-active");
      onComplete();
    }, openHold + hold + (prefersReducedMotion ? 300 : CLOSE_MS));

    return () => {
      window.clearTimeout(partTimer);
      window.clearTimeout(holdTimer);
      window.clearTimeout(closeTimer);
      window.clearTimeout(doneTimer);
      document.body.classList.remove("splash-active");
    };
  }, [onComplete, prefersReducedMotion]);

  if (!visible) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="splash-screen"
          initial={{ opacity: 1 }}
          animate={{ opacity: isClosing ? 0 : 1 }}
          transition={{ duration: 0.55, delay: isClosing ? 0.5 : 0, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden={isClosing}
        >
          <motion.span
            className="splash-screen__frame splash-screen__frame--top"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: contentVisible ? 1 : 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.77, 0, 0.175, 1] }}
            aria-hidden
          />
          <motion.span
            className="splash-screen__frame splash-screen__frame--bottom"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: contentVisible ? 1 : 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.77, 0, 0.175, 1] }}
            aria-hidden
          />
          <motion.span
            className="splash-screen__frame splash-screen__frame--left"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: contentVisible ? 1 : 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.77, 0, 0.175, 1] }}
            aria-hidden
          />
          <motion.span
            className="splash-screen__frame splash-screen__frame--right"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: contentVisible ? 1 : 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.77, 0, 0.175, 1] }}
            aria-hidden
          />

          <motion.div
            className="splash-screen__stage"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{
              opacity: contentVisible ? 1 : 0,
              scale: isClosing ? 1.04 : contentVisible ? 1 : 0.98,
            }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: isClosing ? 0 : 0.45 }}
          >
            <div className="splash-screen__brand" aria-label="QUIP">
              <div className="splash-screen__logo-wrap">
                <motion.img
                  src="/quip-branding-07.png"
                  alt="QUIP"
                  className="splash-screen__logo"
                  width={1368}
                  height={447}
                  initial={{ y: "115%" }}
                  animate={{ y: contentVisible ? "0%" : "115%" }}
                  transition={{
                    duration: 0.85,
                    delay: contentVisible ? 0.72 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="splash-screen__curtain splash-screen__curtain--left"
            initial={{ x: 0 }}
            animate={{ x: isClosing ? 0 : curtainsParted ? "-101%" : 0 }}
            transition={{
              duration: isClosing ? 0.95 : 1.05,
              ease: [0.77, 0, 0.175, 1],
              delay: isClosing ? 0 : 0.08,
            }}
            aria-hidden
          />
          <motion.div
            className="splash-screen__curtain splash-screen__curtain--right"
            initial={{ x: 0 }}
            animate={{ x: isClosing ? 0 : curtainsParted ? "101%" : 0 }}
            transition={{
              duration: isClosing ? 0.95 : 1.05,
              ease: [0.77, 0, 0.175, 1],
              delay: isClosing ? 0 : 0.08,
            }}
            aria-hidden
          />

          <motion.div
            className="splash-screen__flash"
            initial={{ opacity: 0 }}
            animate={{ opacity: isClosing ? [0, 0.4, 0] : 0 }}
            transition={{ duration: 0.65, times: [0, 0.35, 1] }}
            aria-hidden
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
