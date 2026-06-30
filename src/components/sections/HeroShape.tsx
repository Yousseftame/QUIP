import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const HERO_LOGO_SRC = "/logo-quip-removebg-preview.png";

const SPRING = { stiffness: 130, damping: 20, mass: 0.6 };

export default function HeroShape() {
  const mountRef = useRef<HTMLDivElement>(null);
  const pointerX = useSpring(0.5, SPRING);
  const pointerY = useSpring(0.5, SPRING);
  const engagement = useSpring(0, SPRING);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const handleMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const nx = (e.clientX - cx) / (rect.width * 0.55);
      const ny = (e.clientY - cy) / (rect.height * 0.55);

      pointerX.set(0.5 + Math.max(-0.5, Math.min(0.5, nx * 0.5)));
      pointerY.set(0.5 + Math.max(-0.5, Math.min(0.5, ny * 0.5)));

      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const maxDist = Math.hypot(rect.width, rect.height) * 0.72;
      engagement.set(Math.max(0, 1 - dist / maxDist));
    };

    const handleLeave = () => {
      pointerX.set(0.5);
      pointerY.set(0.5);
      engagement.set(0);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    mount.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      mount.removeEventListener("pointerleave", handleLeave);
    };
  }, [pointerX, pointerY, engagement]);

  const rotateX = useTransform(pointerY, [0, 1], [11, -11]);
  const rotateY = useTransform(pointerX, [0, 1], [-15, 15]);
  const shiftX = useTransform(pointerX, [0, 1], [-22, 22]);
  const shiftY = useTransform(pointerY, [0, 1], [-16, 16]);
  const scale = useTransform(engagement, [0, 1], [1, 1.06]);

  return (
    <div ref={mountRef} className="hero-shape-mount">
      <motion.div
        className="hero-shape-interactive"
        style={{
          rotateX,
          rotateY,
          x: shiftX,
          y: shiftY,
          scale,
        }}
      >
        <img
          src={HERO_LOGO_SRC}
          alt=""
          className="hero-shape-logo"
          decoding="async"
          draggable={false}
        />
      </motion.div>

      <div className="hero-shape-guides pointer-events-none" aria-hidden>
        <span className="hero-h-line hero-h-line--top" />
        <span className="hero-h-line hero-h-line--bottom" />
        <span className="hero-h-line hero-h-line--left" />
        <span className="hero-h-line hero-h-line--right" />
      </div>
    </div>
  );
}
