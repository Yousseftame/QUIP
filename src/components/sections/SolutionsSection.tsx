import { useCallback, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

const HEADING_LINES = [
  "Intelligent technology",
  "for an evolving",
  "environment",
];

const SOLUTION_ITEMS = [
  {
    id: "quip-systems",
    label: "QUIP SYSTEMS",
    title: "The backbone of every smart facility",
    body: "Structured cabling, data centers, network design, and telecom systems — engineered and deployed to international standards. From initial survey to final handover, we build infrastructure that performs under real conditions.",
    to: "/projects/ict",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "quip-protect",
    label: "QUIP PROTECT",
    title: "Intelligent building systems that work around the clock",
    body: "Access control, CCTV, fire alarm, public address, and building management systems. Decades of field experience delivering low-voltage solutions across commercial, industrial, and government facilities.",
    to: "/projects/ict",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "quip-digital",
    label: "QUIP DIGITAL",
    title: "Custom software built for operational reality",
    body: "From enterprise applications to system integration and IT infrastructure — we design and deploy digital solutions that connect your teams, streamline your operations, and scale with your growth.",
    to: "/projects/software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "quip-build",
    label: "QUIP BUILD",
    title: "General contracting delivered with engineering precision",
    body: "Fit-out, finishing, and full general contracting services — executed by a team that understands both the technical and structural demands of modern facilities across Egypt and the wider Middle East.",
    to: "/projects/finishing",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
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
  to,
  image,
  zIndex,
}: {
  index: number;
  label: string;
  title: string;
  body: string;
  to: string;
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

            <Link to={to} className="solutions-stack__footer">
              <span className="solutions-stack__footer-label">Learn more</span>
              <span className="solutions-stack__footer-icon">
                <LearnMoreArrow />
              </span>
            </Link>
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
            to={item.to}
            image={item.image}
            zIndex={index + 1}
          />
        ))}
      </div>
    </section>
  );
}
