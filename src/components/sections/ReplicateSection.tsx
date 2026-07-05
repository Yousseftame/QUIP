import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate
} from "framer-motion";
import { useEffect } from "react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import TextType from "@/components/TextType";
import { useContactModal } from "@/context/contact-modal-context";
import sectionImage from "@/assets/4.avif";

const LABEL_INSET = 36;
const FALLBACK_WIDTH = 960;
const FALLBACK_HEIGHT = 900;

const HEADING_LINES = ["What holds", "it together"];

const PILLARS = [
  {
    title: "Engineering Accountability",
    body:
      "We deliver on what we commit to. Every scope, every timeline, every client relationship.",
  },
  {
    title: "Client-Centric",
    body:
      "We collaborate closely across design and development, making your goals and aspirations our mission.",
  },
  {
    title: "Integrated Delivery",
    body:
      "Three disciplines, one partner. We solve problems others can't because we don't hand off between firms.",
  },
  {
    title: "AI-Powered Transformation",
    body:
      "We help businesses scale and automate their operations through intelligent, tailored digital solutions.",
  },
] as const;

function RequestArrow() {
  return (
    <svg viewBox="0 0 12 12" className="replicate-section__cta-icon" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function ReplicateSection() {
  const scrollRef = useRef<HTMLElement>(null);
  const { openContactModal } = useContactModal();
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentColRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [mediaSize, setMediaSize] = useState({
    width: FALLBACK_WIDTH,
    height: FALLBACK_HEIGHT,
  });
  const [contentShift, setContentShift] = useState(0);

  const progress = useMotionValue(0);
  const isInView = useInView(scrollRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (isInView) {
      animate(progress, 1, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, progress]);

  useLayoutEffect(() => {
    const updateMeasurements = () => {
      if (mediaRef.current) {
        setMediaSize({
          width: mediaRef.current.clientWidth || FALLBACK_WIDTH,
          height: mediaRef.current.clientHeight || FALLBACK_HEIGHT,
        });
      }

      if (contentColRef.current && contentRef.current) {
        const colStyles = getComputedStyle(contentColRef.current);
        const paddingTop = parseFloat(colStyles.paddingTop) || 0;
        const paddingBottom = parseFloat(colStyles.paddingBottom) || 0;
        const available =
          contentColRef.current.clientHeight -
          contentRef.current.offsetHeight -
          paddingTop -
          paddingBottom;

        setContentShift(Math.max(0, available));
      }
    };

    updateMeasurements();

    const resizeObserver = new ResizeObserver(updateMeasurements);

    if (mediaRef.current) resizeObserver.observe(mediaRef.current);
    if (contentColRef.current) resizeObserver.observe(contentColRef.current);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    if (scrollRef.current) resizeObserver.observe(scrollRef.current);

    window.addEventListener("resize", updateMeasurements);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMeasurements);
    };
  }, []);

  const clipPath = useTransform(progress, (value) => {
    const hidden = (1 - value) * 100;
    return `inset(0 ${hidden}% ${hidden}% 0)`;
  });

  const revealWidth = useTransform(progress, [0, 1], [0, mediaSize.width]);
  const revealHeight = useTransform(progress, [0, 1], [0, mediaSize.height]);

  const labelAnchorX = useTransform(revealWidth, (width) =>
    clamp(width, 0, mediaSize.width - LABEL_INSET),
  );

  const labelAnchorY = useTransform(revealHeight, (height) =>
    clamp(height, LABEL_INSET, mediaSize.height - LABEL_INSET),
  );

  const axisXLabel = useTransform(revealWidth, (value) => `X: ${Math.round(value)}`);
  const axisYLabel = useTransform(revealHeight, (value) => `Y: ${Math.round(value)}`);
  const contentY = useTransform(progress, [0, 1], [0, contentShift]);

  return (
    <section ref={scrollRef} className="replicate-section-scroll" id="replicate">
      <section className="replicate-section" aria-label="What holds it together">
        <div className="replicate-section__grid">
          <div ref={mediaRef} className="replicate-section__media">
            <motion.div className="replicate-section__media-inner" style={{ clipPath }}>
              <img
                src={sectionImage}
                alt="Industrial manufacturing equipment"
                className="replicate-section__media-image"
                width={FALLBACK_WIDTH}
                height={FALLBACK_HEIGHT}
              />
            </motion.div>

            <motion.div
              className="replicate-section__guide-x"
              style={{ left: revealWidth }}
              aria-hidden
            />
            <motion.div
              className="replicate-section__guide-y"
              style={{ top: revealHeight }}
              aria-hidden
            />

            <motion.div
              className="replicate-section__reveal-frame"
              style={{ width: revealWidth, height: revealHeight }}
              aria-hidden
            >
              <span className="replicate-section__reveal-corner" />
            </motion.div>

            <motion.span
              className="replicate-section__axis-x"
              style={{ left: labelAnchorX, top: labelAnchorY }}
            >
              {axisXLabel}
            </motion.span>
            <motion.span
              className="replicate-section__axis-y"
              style={{ left: labelAnchorX, top: labelAnchorY }}
            >
              {axisYLabel}
            </motion.span>
          </div>

          <div ref={contentColRef} className="replicate-section__content-col">
            <motion.div
              ref={contentRef}
              className="replicate-section__content"
              style={{ y: contentY }}
            >
              <h2 className="replicate-section__heading">
                {HEADING_LINES.map((line, index) => (
                  <DiaTextReveal
                    key={line}
                    text={line}
                    textColor="#0c0b11"
                    colors={["#0c0b11"]}
                    className="replicate-section__heading-line"
                    duration={1.1}
                    delay={0.1 + index * 0.14}
                    startOnView
                    once
                  />
                ))}
              </h2>

              <ul className="replicate-section__pillars">
                {PILLARS.map((pillar, index) => (
                  <motion.li
                    key={pillar.title}
                    className="replicate-section__pillar"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                  >
                    <h3 className="replicate-section__pillar-title">
                      <DiaTextReveal
                        text={pillar.title}
                        textColor="#0c0b11"
                        colors={["#0c0b11"]}
                        duration={0.8}
                        delay={0.25 + index * 0.1}
                        startOnView
                        once
                      />
                    </h3>
                    <p className="replicate-section__pillar-body">{pillar.body}</p>
                  </motion.li>
                ))}
              </ul>

              <button
                type="button"
                onClick={openContactModal}
                className="replicate-section__cta"
              >
                <span className="replicate-section__cta-label">Request information</span>
                <span className="replicate-section__cta-icon-wrap">
                  <RequestArrow />
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </section>
  );
}
