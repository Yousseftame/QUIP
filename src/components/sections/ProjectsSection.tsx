import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { FlipText } from "@/components/ui/flip-text";
import { ICT_PROJECTS } from "@/data/ict-projects";

const ICT_LIST_PATH = "/projects/ict";
const FEATURED_ICT_PROJECTS = ICT_PROJECTS.slice(0, 6);

function NavArrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 12 12" className="projects-section__arrow-icon" aria-hidden>
      {direction === "left" ? (
        <path d="M4.6,0.7l-4,5.3l4,5.3h1.9L3.6,8.8C2.8,7.8,2.3,7,1.9,6.6h8.6V5.3H1.9c0.4-0.6,1-1.3,1.7-2.2L6.5,0.7H4.6z" />
      ) : (
        <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
      )}
    </svg>
  );
}

function ProjectCard({
  code,
  title,
  image,
  to,
}: {
  code: string;
  title: string;
  image: string;
  to: string;
}) {
  return (
    <Link to={to} className="projects-card">
      <img
        src={image}
        alt=""
        className="projects-card__image"
        loading="lazy"
        decoding="async"
      />
      <span className="projects-card__code">{code}</span>
      <div className="projects-card__overlay" aria-hidden />
      <div className="projects-card__content">
        <h3 className="projects-card__title">
          <FlipText animateOnHover loop={false} duration={0.55} delay={0}>
            {title}
          </FlipText>
        </h3>
        <span className="projects-card__plus" aria-hidden>
          <svg viewBox="0 0 12 12" className="projects-card__plus-icon">
            <path d="M6,1v10M1,6h10" stroke="currentColor" strokeWidth="1.25" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanScrollPrev(track.scrollLeft > 4);
    setCanScrollNext(track.scrollLeft < max - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      track.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scrollByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".projects-card");
    const amount = card?.offsetWidth ?? track.clientWidth / 3;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__intro">
        <div className="projects-section__intro-head">
          <span className="projects-section__label">Projects</span>
          <span className="projects-section__marker" aria-hidden />
        </div>

        <h2 className="projects-section__heading">
          <DiaTextReveal
            text="Case studies"
            textColor="#0c0b11"
            colors={["#0c0b11"]}
            className="projects-section__heading-line"
            duration={1.1}
            delay={0.1}
            startOnView
            once
          />
        </h2>
      </div>

      <div className="projects-section__gallery">
        <div ref={trackRef} className="projects-section__track projects-section__track--snapping">
          {FEATURED_ICT_PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              code={project.code}
              title={project.name}
              image={project.image}
              to={`${ICT_LIST_PATH}/${project.id}`}
            />
          ))}
        </div>
      </div>

      <div className="projects-section__footer">
        <div className="projects-section__arrows">
          <button
            type="button"
            className="projects-section__arrow"
            aria-label="Previous projects"
            disabled={!canScrollPrev}
            onClick={() => scrollByCard(-1)}
          >
            <NavArrow direction="left" />
          </button>
          <button
            type="button"
            className="projects-section__arrow"
            aria-label="Next projects"
            disabled={!canScrollNext}
            onClick={() => scrollByCard(1)}
          >
            <NavArrow direction="right" />
          </button>
        </div>

        <Link to={ICT_LIST_PATH} className="projects-section__all">
          <span className="projects-section__all-label">All projects</span>
          <span className="projects-section__all-icon">
            <NavArrow direction="right" />
          </span>
        </Link>
      </div>
    </section>
  );
}
