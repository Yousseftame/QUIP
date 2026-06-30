import { useState } from "react";
import { ArrowLeft, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import { ContactModal } from "@/components/ui/ContactModal";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import type { Project } from "@/types/project";

type ProjectDetailPageProps = {
  project: Project;
  categoryLabel: string;
  backLabel: string;
  backPath: string;
  detailBasePath: string;
  prevProject?: Project;
  nextProject?: Project;
};

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="project-detail__list">
      {items.map((item) => (
        <li key={item} className="project-detail__list-item">
          <span className="project-detail__list-marker" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function NavArrow() {
  return (
    <svg viewBox="0 0 12 12" className="project-detail__nav-arrow" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

export default function ProjectDetailPage({
  project,
  categoryLabel,
  backLabel,
  backPath,
  detailBasePath,
  prevProject,
  nextProject,
}: ProjectDetailPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const meta = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
    { label: "Client", value: project.client },
  ];

  usePreloadImages(
    [prevProject?.image, nextProject?.image].filter((src): src is string => Boolean(src)),
  );

  return (
    <div className="project-detail">
      <header className="project-detail__header">
        <Link to="/" aria-label="QUIP home">
          <img
            src="/quip-branding-07.png"
            alt="QUIP"
            className="h-7 md:h-10 w-auto brightness-0 invert"
          />
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="project-detail__menu-btn"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      <div className="project-detail__topbar">
        <Link to={backPath} className="project-detail__back">
          <ArrowLeft size={16} strokeWidth={2} />
          {backLabel}
        </Link>
      </div>

      <section className="project-detail__hero">
        <div className="project-detail__hero-media">
          <ProgressiveImage
            src={project.image}
            alt=""
            className="project-detail__hero-image"
            fetchPriority="high"
            loading="eager"
          />
          <div className="project-detail__hero-overlay" aria-hidden />
          <div className="project-detail__hero-frame" aria-hidden />

          <div className="project-detail__hero-content project-detail__hero-content--animate">
            <div className="project-detail__hero-meta">
              <span className="project-detail__code">{project.code}</span>
              <span className="project-detail__category">{project.category}</span>
            </div>
            <h1 className="project-detail__title font-heading">{project.name}</h1>
            <p className="project-detail__category-label">{categoryLabel}</p>
          </div>
        </div>
      </section>

      <section className="project-detail__content project-detail__content--animate">
        <p className="project-detail__lead">{project.description}</p>

        <div className="project-detail__layout">
          <div className="project-detail__main">
            <div className="project-detail__block">
              <h2 className="project-detail__heading">Overview</h2>
              <p className="project-detail__text">{project.overview}</p>
            </div>

            <div className="project-detail__block">
              <h2 className="project-detail__heading">Scope of work</h2>
              <DetailList items={project.scope} />
            </div>
          </div>

          <aside className="project-detail__sidebar">
            <div className="project-detail__info-card">
              <h2 className="project-detail__info-title">Project details</h2>
              <dl className="project-detail__info-list">
                {meta.map(({ label, value }) => (
                  <div key={label} className="project-detail__info-row">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

          </aside>
        </div>
      </section>

      {(prevProject || nextProject) && (
        <nav className="project-detail__nav" aria-label="Project navigation">
          {prevProject ? (
            <Link
              to={`${detailBasePath}/${prevProject.id}`}
              className="project-detail__nav-link project-detail__nav-link--prev"
            >
              <span className="project-detail__nav-label">Previous</span>
              <span className="project-detail__nav-title">{prevProject.name}</span>
            </Link>
          ) : (
            <span className="project-detail__nav-spacer" />
          )}

          {nextProject ? (
            <Link
              to={`${detailBasePath}/${nextProject.id}`}
              className="project-detail__nav-link project-detail__nav-link--next"
            >
              <span className="project-detail__nav-label">
                Next
                <NavArrow />
              </span>
              <span className="project-detail__nav-title">{nextProject.name}</span>
            </Link>
          ) : (
            <span className="project-detail__nav-spacer" />
          )}
        </nav>
      )}

      <FooterSection />

      <HeroMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onContactOpen={() => {
          setMenuOpen(false);
          setContactModalOpen(true);
        }}
      />
      <ContactModal isOpen={contactModalOpen} onClose={() => setContactModalOpen(false)} />
    </div>
  );
}
