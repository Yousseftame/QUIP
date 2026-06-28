import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

type HeroShapeProps = {
  logoRef: React.RefObject<HTMLElement | null>;
};

const CENTER = {
  A: "841.5,198 913.5,126 913.5,54 409.5,54 193.5,270 193.5,342 337.5,342 481.5,198 841.5,198",
  B: "985.5,198 841.5,198 697.5,342 337.5,342 121.5,558 121.5,630 265.5,630 409.5,486 769.5,486 985.5,270 985.5,198",
  C: "265.5,630 193.5,702 193.5,774 697.5,774 913.5,558 913.5,486 769.5,486 625.5,630 265.5,630",
};

const COMPRESSED = {
  A: "963,198 1080,126 1080,54 576,54 216,270 216,342 360,342 603,198 963,198",
  B: "1107,198 963,198 720,342 360,342 0,558 0,630 144,630 387,486 747,486 1107,270 1107,198",
  C: "144,630 27,702 27,774 531,774 891,558 891,486 747,486 504,630 144,630",
};

function parsePoints(points: string): [number, number][] {
  return points
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((pair) => {
      const [x, y] = pair.split(",").map(Number);
      return [x, y] as [number, number];
    });
}

function formatPoints(points: [number, number][]) {
  return points.map(([x, y]) => `${x},${y}`).join(" ");
}

function lerpPoints(a: [number, number][], b: [number, number][], t: number) {
  const safeT = Number.isFinite(t) ? t : 0;
  const len = Math.min(a.length, b.length);
  return Array.from({ length: len }, (_, i) => {
    const [ax, ay] = a[i];
    const [bx, by] = b[i];
    return [ax + (bx - ax) * safeT, ay + (by - ay) * safeT] as [number, number];
  });
}

const centerA = parsePoints(CENTER.A);
const centerB = parsePoints(CENTER.B);
const centerC = parsePoints(CENTER.C);
const compressedA = parsePoints(COMPRESSED.A);
const compressedB = parsePoints(COMPRESSED.B);
const compressedC = parsePoints(COMPRESSED.C);

export default function HeroShape({ logoRef }: HeroShapeProps) {
  const proximity = useSpring(0.5, { stiffness: 90, damping: 22, mass: 0.7 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const logo = logoRef.current;
      if (!logo) return;

      const rect = logo.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
      const maxDist = Math.min(window.innerWidth, window.innerHeight) * 0.72;
      const normalized = Math.min(1, dist / maxDist);
      proximity.set(normalized);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [logoRef, proximity]);

  const pointsA = useTransform(proximity, (p) =>
    formatPoints(lerpPoints(compressedA, centerA, p ?? 0)),
  );
  const pointsB = useTransform(proximity, (p) =>
    formatPoints(lerpPoints(compressedB, centerB, p ?? 0)),
  );
  const pointsC = useTransform(proximity, (p) =>
    formatPoints(lerpPoints(compressedC, centerC, p ?? 0)),
  );

  const frameScale = useTransform(proximity, [0, 1], [0.94, 1]);
  const frameX = useTransform(proximity, [0, 1], [8, 0]);

  return (
    <div className="hero-shape-mount relative flex h-full w-full items-stretch justify-center">
      <motion.div
        className="relative h-full w-full"
        style={{ scale: frameScale, x: frameX }}
      >
        <motion.svg
          viewBox="0 0 1107 828"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <motion.polygon fill="#0C0B11" points={pointsA} />
          <motion.polygon fill="#0C0B11" points={pointsB} />
          <motion.polygon fill="#0C0B11" points={pointsC} />
        </motion.svg>

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ scale: frameScale }}
        >
          <span className="hero-h-line hero-h-line--top" />
          <span className="hero-h-line hero-h-line--bottom" />
          <span className="hero-h-line hero-h-line--left" />
          <span className="hero-h-line hero-h-line--right" />
        </motion.div>
      </motion.div>
    </div>
  );
}
