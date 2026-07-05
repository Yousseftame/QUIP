import { useCallback, useRef, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";

const HEADING_LINES = ["Five capability tracks,", "one partner"];

type SolutionFeature = {
  name: string;
  description: string;
};

type SolutionItem = {
  id: string;
  label: string;
  title: string;
  body: string;
  features: SolutionFeature[];
  to: string;
  image: string;
};

const SOLUTION_ITEMS: SolutionItem[] = [
  {
    id: "infrastructure",
    label: "Infrastructure",
    title: "The physical backbone of every connected facility",
    body: "Core infrastructure engineered for reliability — from structured pathways and data environments to installed equipment ready for commissioning.",
    features: [
      {
        name: "Network infrastructure",
        description: "Structured LAN/WAN design and deployment built for uptime across enterprise and institutional sites.",
      },
      {
        name: "Data centers",
        description: "Tier-aligned fit-out covering containment, power, cooling, and rack infrastructure for mission-critical rooms.",
      },
      {
        name: "Cabling systems",
        description: "Copper and fiber backbone installation with testing, labeling, and documentation to global standards.",
      },
      {
        name: "Low voltage networks",
        description: "Integrated LV distribution supporting building systems, equipment, and facility-wide connectivity.",
      },
      {
        name: "Equipment installation",
        description: "Professional mounting, configuration, and handover of active and passive infrastructure hardware.",
      },
    ],
    to: "/projects/ict",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "information-tech",
    label: "Information Tech",
    title: "Digital platforms and intelligent systems that scale",
    body: "Purpose-built software, AI, and integration services that connect operations, teams, and data across the enterprise.",
    features: [
      {
        name: "Software platforms",
        description: "Custom web and enterprise applications designed for performance, security, and long-term maintainability.",
      },
      {
        name: "AI solutions",
        description: "Applied intelligence for automation, decision support, and domain-specific workflows across industries.",
      },
      {
        name: "Systems integrations",
        description: "API-led connectivity between ERP, CRM, legacy systems, and third-party platforms without silos.",
      },
      {
        name: "Mobile development",
        description: "Cross-platform mobile products for field teams, customers, and stakeholders on iOS and Android.",
      },
    ],
    to: "/projects/software",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "light-current",
    label: "Light Current",
    title: "Smart building systems that protect and control",
    body: "Low-voltage security, life-safety, and access solutions — specified, installed, and commissioned for continuous operation.",
    features: [
      {
        name: "Access control",
        description: "Card, biometric, and visitor management systems integrated with facility security policies.",
      },
      {
        name: "CCTV systems",
        description: "IP surveillance design with storage, analytics, and monitoring for commercial and critical sites.",
      },
      {
        name: "Fire alarms",
        description: "Detection, notification, and panel infrastructure aligned with code requirements and insurer standards.",
      },
      {
        name: "Intrusion detection",
        description: "Perimeter and interior alarm systems with monitoring workflows for rapid incident response.",
      },
    ],
    to: "/projects/ict",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "networks",
    label: "Networks",
    title: "Voice and data networks built for performance",
    body: "End-to-end telecom and networking — from copper and fiber plant to switching, routing, and operational readiness.",
    features: [
      {
        name: "Telephone systems",
        description: "PBX, VoIP, and unified communications platforms for offices, campuses, and multi-site operations.",
      },
      {
        name: "Copper networks",
        description: "Structured copper plant for voice and data with certified termination and performance validation.",
      },
      {
        name: "Fiber optics",
        description: "Single-mode and multi-mode backbone links, splicing, and OTDR testing for long-distance reliability.",
      },
      {
        name: "Switching systems",
        description: "Layer-2/3 switching architecture for segmented, secure, and high-throughput network environments.",
      },
      {
        name: "Routing systems",
        description: "WAN routing, redundancy, and policy-based traffic management for distributed enterprise networks.",
      },
    ],
    to: "/projects/ict",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "general-contracting",
    label: "General Contracting",
    title: "Construction and finishing delivered with engineering discipline",
    body: "From civil works and architectural coordination to premium fit-out — one accountable team from concept to handover.",
    features: [
      {
        name: "Civil works",
        description: "Groundworks, structural coordination, and site preparation aligned with project specifications and timelines.",
      },
      {
        name: "Architectural design",
        description: "Design development, detailing, and consultant coordination for functional, build-ready spaces.",
      },
      {
        name: "Facilities management",
        description: "Operational readiness, maintenance planning, and lifecycle support for occupied and commercial assets.",
      },
      {
        name: "Finishing",
        description: "High-spec interior fit-out, MEP coordination, and quality-controlled delivery for premium environments.",
      },
    ],
    to: "/projects/finishing",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
  },
];

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
  features,
  to,
  image,
  zIndex,
}: SolutionItem & { index: number; zIndex: number }) {
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

            <ul className="solutions-stack__features">
              {features.map((feature) => (
                <li key={feature.name} className="solutions-stack__feature">
                  <span className="solutions-stack__feature-name">{feature.name}</span>
                  <span className="solutions-stack__feature-desc">{feature.description}</span>
                </li>
              ))}
            </ul>

            {index === SOLUTION_ITEMS.length && (
              <Link to={to} className="solutions-stack__footer">
                <span className="solutions-stack__footer-label">Learn more</span>
                <span className="solutions-stack__footer-icon">
                  <LearnMoreArrow />
                </span>
              </Link>
            )}
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
            <span className="solutions-section__label">OUR SCOPE OF WORK</span>
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
            zIndex={index + 1}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}
