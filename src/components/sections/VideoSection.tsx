import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SequentialText } from "@/components/ui/sequential-text";
import heroVideo from "@/assets/cde12660b1d9c1e245bb80b5ab01c77e4793569a.mp4";

const CAPTION_LINES = [
  "The industrialized and digital system that brings certainty to",
  "construction and ensures measurable results",
];

type CaptionMetrics = {
  startY: number;
  endY: number;
};

function getPaddingPx() {
  const root = document.documentElement;
  const raw = getComputedStyle(root).getPropertyValue("--video-section-padding").trim();
  const fontSize = parseFloat(getComputedStyle(root).fontSize) || 16;

  if (raw.endsWith("rem")) {
    return parseFloat(raw) * fontSize;
  }

  if (raw.endsWith("px")) {
    return parseFloat(raw);
  }

  return fontSize * 1.25;
}

export default function VideoSection() {
  const scrollRef = useRef<HTMLElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);
  const [metrics, setMetrics] = useState<CaptionMetrics>({ startY: 0, endY: 0 });

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  useLayoutEffect(() => {
    const updateMetrics = () => {
      const section = sectionRef.current;
      const caption = captionRef.current;
      if (!section || !caption) {
        return;
      }

      const sectionHeight = section.clientHeight;
      const captionStyles = getComputedStyle(caption);
      const lineHeight = parseFloat(captionStyles.lineHeight);
      const captionHeight = Number.isFinite(lineHeight)
        ? lineHeight * CAPTION_LINES.length
        : caption.offsetHeight;
      const padding = getPaddingPx();

      const startY = -captionHeight / 2;
      const endY = sectionHeight / 2 - padding - captionHeight;

      setMetrics({ startY, endY });
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(() => {
      if (sectionRef.current) {
        updateMetrics();
      }
    });

    if (sectionRef.current) {
      resizeObserver.observe(sectionRef.current);
    }

    window.addEventListener("resize", updateMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMetrics);
    };
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [metrics.startY, metrics.endY],
  );

  return (
    <section ref={scrollRef} className="video-section-scroll">
      <div ref={sectionRef} className="video-section">
        <video
          className="video-section__media"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src={heroVideo}
        />

        <div className="video-section__shade" aria-hidden />

        <motion.div
          ref={captionRef}
          className="video-section__caption"
          style={{ y }}
        >
          <SequentialText
            lines={CAPTION_LINES}
            startOnView
            delay={300}
            wordDuration={280}
            wordGap={70}
            className="video-section__text"
          />
        </motion.div>
      </div>
    </section>
  );
}
