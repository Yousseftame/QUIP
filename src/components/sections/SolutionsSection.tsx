import { useCallback, useRef, useState, type CSSProperties } from "react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import solutionImage1 from "@/assets/1.avif";
import solutionImage2 from "@/assets/2.avif";
import solutionImage3 from "@/assets/3.avif";
import solutionImage4 from "@/assets/4.avif";

const HEADING_LINES = [
  "Industrialized technology",
  "for an evolving",
  "environment",
];

const SOLUTION_ITEMS = [
  {
    id: "panel",
    label: "QUIP Panel",
    title: "Industrial innovation for building envelope systems",
    body: "Lightweight multilayer sandwich panels designed to integrate precisely with the industrialized components of the QUIP System®. Offsite manufacturing, process control and services geared towards meeting technical and regulatory requirements.",
    href: "#quip-panel",
    image: solutionImage1,
  },
  {
    id: "robot",
    label: "QUIP Robot",
    title: "Digital precision applied to industrial execution",
    body: "Precision cutting and machining that translate design into exact components ready for assembly. It automates machining, cutting and drilling to reduce errors, minimize waste and maintain scalable control through CAD/CAM technology.",
    href: "#quip-robot",
    image: solutionImage2,
  },
  {
    id: "frame",
    label: "QUIP Frame",
    title: "Lightweight industrialized structure designed to fit",
    body: "Lightweight galvanized steel structure engineered and dimensioned. Machined and labeled profiles for 2D assembly, with CAD/CAM preparation to ensure precision and consistency with the project.",
    href: "#quip-frame",
    image: solutionImage3,
  },
  {
    id: "system",
    label: "QUIP System",
    title: "The 2D industrialized system that reduces risk and provides certainty",
    body: "Comprehensive system that coordinates envelopes, structure and processes within an industrialized and digital framework. It connects design, manufacturing and assembly as a single governable and scalable process.",
    href: "#quip-system",
    image: solutionImage4,
  },
] as const;

type CursorCoords = {
  x: number;
  y: number;
};

function LearnMoreArrow() {
  return (
    <svg viewBox="0 0 12 12" className="h-3 w-3 shrink-0 fill-current" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function SolutionsCoordinateTracker() {
  const trackerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<CursorCoords | null>(null);

  const updateCoords = useCallback((clientX: number, clientY: number) => {
    const rect = trackerRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }

    setCoords({
      x: Math.round(clientX - rect.left),
      y: Math.round(clientY - rect.top),
    });
  }, []);

  return (
    <div
      ref={trackerRef}
      className="solutions-section__tracker"
      onMouseMove={(event) => updateCoords(event.clientX, event.clientY)}
      onMouseLeave={() => setCoords(null)}
    >
      {coords && (
        <>
          <span
            className="solutions-section__tracker-line-x"
            style={{ left: coords.x }}
          />
          <span
            className="solutions-section__tracker-line-y"
            style={{ top: coords.y }}
          />
          <span
            className="solutions-section__tracker-dot"
            style={{ left: coords.x, top: coords.y }}
          />
          <span
            className="solutions-section__tracker-label-x"
            style={{ left: coords.x, top: coords.y }}
          >
            X: {coords.x}
          </span>
          <span
            className="solutions-section__tracker-label-y"
            style={{ left: coords.x, top: coords.y }}
          >
            Y: {coords.y}
          </span>
        </>
      )}
    </div>
  );
}

function SolutionStackItem({
  index,
  label,
  title,
  body,
  href,
  image,
  zIndex,
}: {
  index: number;
  label: string;
  title: string;
  body: string;
  href: string;
  image: string;
  zIndex: number;
}) {
  const number = String(index).padStart(2, "0");

  return (
    <article
      className="solutions-stack__item"
      style={
        {
          zIndex,
          "--stack-offset": index - 1,
        } as CSSProperties
      }
    >
      <div className="solutions-stack__grid">
        <div className="solutions-stack__index">
          <span className="solutions-stack__index-number">{number}</span>
          <span className="solutions-stack__index-slash">/</span>
        </div>

        <div className="solutions-stack__media">
          <div className="solutions-stack__image-frame">
            <img
              src={image}
              alt=""
              className="solutions-stack__image"
              loading="lazy"
            />
          </div>
        </div>

        <div className="solutions-stack__content">
          <div className="solutions-stack__copy">
            <span className="solutions-stack__label">{label}</span>
            <h3 className="solutions-stack__title">{title}</h3>
            <p className="solutions-stack__body">{body}</p>

            <a href={href} className="solutions-stack__footer">
              <span className="solutions-stack__footer-label">Learn more</span>
              <span className="solutions-stack__footer-icon">
                <LearnMoreArrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function SolutionsSection() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-section__intro">
        <div className="solutions-section__intro-left">
          <div className="solutions-section__intro-head">
            <span className="solutions-section__label">Solutions</span>
            <span className="solutions-section__marker" aria-hidden />
          </div>

          <h2 className="solutions-section__heading">
            {HEADING_LINES.map((line, index) => (
              <DiaTextReveal
                key={line}
                text={line}
                textColor="#0c0b11"
                colors={["#0c0b11"]}
                className="solutions-section__heading-line"
                duration={1.15}
                delay={0.12 + index * 0.16}
                startOnView
                once
              />
            ))}
          </h2>
        </div>

        <SolutionsCoordinateTracker />
      </div>

      <div className="solutions-stack">
        {SOLUTION_ITEMS.map((item, index) => (
          <SolutionStackItem
            key={item.id}
            index={index + 1}
            label={item.label}
            title={item.title}
            body={item.body}
            href={item.href}
            image={item.image}
            zIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
