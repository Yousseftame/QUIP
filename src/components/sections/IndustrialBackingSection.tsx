import { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect } from "react";
import { useContactModal } from "@/context/contact-modal-context";

const LABEL_INSET = 36;
const FALLBACK_WIDTH = 960;
const FALLBACK_HEIGHT = 900;

const PILLARS = [
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

function LinkArrow() {
  return (
    <svg viewBox="0 0 12 12" className="backing-section__cta-icon" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function IndustrialBackingSection() {
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
    <section ref={scrollRef} className="backing-section-scroll" id="backing">
      <section className="backing-section" aria-label="What holds it together">
        <div className="backing-section__grid">
          <div ref={contentColRef} className="backing-section__content-col">
            <motion.div
              ref={contentRef}
              className="backing-section__content"
              style={{ y: contentY }}
            >
              <ul className="backing-section__pillars">
                {PILLARS.map((pillar) => (
                  <li key={pillar.title} className="backing-section__pillar">
                    <h3 className="backing-section__pillar-title">{pillar.title}</h3>
                    <p className="backing-section__pillar-body">{pillar.body}</p>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={openContactModal}
                className="backing-section__cta"
              >
                <span className="backing-section__cta-label">Contact</span>
                <span className="backing-section__cta-icon-wrap">
                  <LinkArrow />
                </span>
              </button>
            </motion.div>
          </div>

          <div ref={mediaRef} className="backing-section__media">
            <motion.div className="backing-section__media-inner" style={{ clipPath }}>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=960&q=80"
                alt="Team collaborating on integrated engineering and technology delivery"
                className="backing-section__media-image"
                width={FALLBACK_WIDTH}
                height={FALLBACK_HEIGHT}
              />
            </motion.div>

            <motion.div
              className="backing-section__guide-x"
              style={{ left: revealWidth }}
              aria-hidden
            />
            <motion.div
              className="backing-section__guide-y"
              style={{ top: revealHeight }}
              aria-hidden
            />

            <motion.div
              className="backing-section__reveal-frame"
              style={{ width: revealWidth, height: revealHeight }}
              aria-hidden
            >
              <span className="backing-section__reveal-corner" />
            </motion.div>

            <motion.span
              className="backing-section__axis-x"
              style={{ left: labelAnchorX, top: labelAnchorY }}
            >
              {axisXLabel}
            </motion.span>
            <motion.span
              className="backing-section__axis-y"
              style={{ left: labelAnchorX, top: labelAnchorY }}
            >
              {axisYLabel}
            </motion.span>
          </div>
        </div>
      </section>
    </section>
  );
}
