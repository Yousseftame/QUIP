import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { useEffect } from "react";
import TextType from "@/components/TextType";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import sectionImage from "@/assets/quip-branding-11-800x792.png";

const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 792;
const LABEL_INSET = 36;

const HEADING_LINES = [
  "30 years of accountable",
  "engineering.",
];

const INTRO_LEAD =
  "Quip began in 1990 in light current, networks, and security systems. Today it stands as one of the Middle East's leading multidisciplinary firms — a specialist in general contracting, communications, and information technology.";

const INTRO_EXPAND =
  "Expanding into premium finishing and general contracting, and now delivering purpose-built software platforms and AI-powered transformation across government, energy, banking, technology, automotive, pharmaceutical, and real estate.";

const INTRO_STATS =
  "30+ years of excellence · 120+ projects delivered · 03 integrated disciplines · 7+ industry sectors · MENA regional footprint";

const CARDS = [
  {
    title: "Vision",
    body: "To be the region's leading multidisciplinary firm — where infrastructure, technology, and construction converge under one accountable partner for the Middle East's most demanding enterprises.",
    to: "/about",
  },
  {
    title: "Mission",
    body: "To deliver integrated ICT infrastructure, premium construction finishing, and intelligent software across every project — combining 30 years of engineering discipline with the capability to build, connect, and transform.",
    to: "/about",
  },
];

function LearnMoreArrow() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 fill-current" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function VisionCard({
  title,
  body,
  to,
  index,
}: {
  title: string;
  body: string;
  to: string;
  index: number;
}) {
  return (
    <article className="vision-card">
      <div className="vision-card__head">
        <h3 className="vision-card__title">
          <TextType
            text={title}
            as="span"
            loop={false}
            showCursor={false}
            startOnVisible
            typingSpeed={52}
            initialDelay={index * 280}
          />
        </h3>
        <span className="vision-card__marker" aria-hidden />
      </div>

      <p className="vision-card__body">{body}</p>

      <Link to={to} className="vision-card__footer">
        <span className="vision-card__footer-label">Learn more</span>
        <span className="vision-card__footer-icon">
          <LearnMoreArrow />
        </span>
      </Link>
    </article>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function VisionSection() {
  const scrollRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [mediaSize, setMediaSize] = useState({ width: IMAGE_WIDTH, height: IMAGE_HEIGHT });

  const scrollYProgress = useMotionValue(0);
  const isInView = useInView(scrollRef, { once: true, margin: "-20% 0px" });

  useEffect(() => {
    if (isInView) {
      animate(scrollYProgress, 1, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, scrollYProgress]);

  useLayoutEffect(() => {
    const updateSize = () => {
      if (!mediaRef.current) {
        return;
      }

      setMediaSize({
        width: mediaRef.current.clientWidth,
        height: mediaRef.current.clientHeight,
      });
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    if (mediaRef.current) {
      resizeObserver.observe(mediaRef.current);
    }

    window.addEventListener("resize", updateSize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const clipPath = useTransform(scrollYProgress, (progress) => {
    const hidden = (1 - progress) * 100;
    return `inset(0 ${hidden}% ${hidden}% 0)`;
  });

  const revealWidth = useTransform(
    scrollYProgress,
    [0, 1],
    [0, mediaSize.width],
  );

  const revealHeight = useTransform(
    scrollYProgress,
    [0, 1],
    [0, mediaSize.height],
  );

  const labelAnchorX = useTransform(revealWidth, (width) =>
    clamp(width, 0, mediaSize.width - LABEL_INSET),
  );

  const labelAnchorY = useTransform(revealHeight, (height) =>
    clamp(height, LABEL_INSET, mediaSize.height - LABEL_INSET),
  );

  const axisXLabel = useTransform(revealWidth, (value) => `X: ${Math.round(value)}`);
  const axisYLabel = useTransform(revealHeight, (value) => `Y: ${Math.round(value)}`);

  return (
    <section ref={scrollRef} className="vision-section-scroll">
      <section className="vision-section">
        <div className="vision-section__grid">
          <div ref={mediaRef} className="vision-section__media">
            <motion.div className="vision-section__media-inner" style={{ clipPath }}>
              <img
                src={sectionImage}
                alt="Construction workers assembling a steel structure"
                className="vision-section__media-image"
                width={IMAGE_WIDTH}
                height={IMAGE_HEIGHT}
              />
            </motion.div>

            <motion.div
              className="vision-section__guide-x"
              style={{ left: revealWidth }}
              aria-hidden
            />
            <motion.div
              className="vision-section__guide-y"
              style={{ top: revealHeight }}
              aria-hidden
            />

            <motion.div
              className="vision-section__reveal-frame"
              style={{ width: revealWidth, height: revealHeight }}
              aria-hidden
            >
              <span className="vision-section__reveal-corner" />
            </motion.div>

            <motion.span
              className="vision-section__axis-x"
              style={{ left: labelAnchorX, top: labelAnchorY }}
            >
              {axisXLabel}
            </motion.span>
            <motion.span
              className="vision-section__axis-y"
              style={{ left: labelAnchorX, top: labelAnchorY }}
            >
              {axisYLabel}
            </motion.span>
          </div>

          <div className="vision-section__content">
            <div className="vision-section__intro">
              <h2 className="vision-section__heading">
                {HEADING_LINES.map((line, index) => (
                  <DiaTextReveal
                    key={line}
                    text={line}
                    textColor="#0c0b11"
                    colors={["#0c0b11"]}
                    className="vision-section__heading-line"
                    duration={1.15}
                    delay={0.12 + index * 0.16}
                    startOnView
                    once
                  />
                ))}
              </h2>
              <p className="vision-section__subheading">{INTRO_LEAD}</p>
              <p className="vision-section__subheading">{INTRO_EXPAND}</p>
              <p className="vision-section__subheading vision-section__subheading--stats">
                {INTRO_STATS}
              </p>
            </div>

            <div className="vision-section__cards">
              {CARDS.map((card, index) => (
                <VisionCard key={card.title} {...card} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
