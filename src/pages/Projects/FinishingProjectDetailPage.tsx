import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import FinishingProjectGallery from "@/components/projects/finishing/FinishingProjectGallery";
import { ContactModal } from "@/components/ui/ContactModal";
import type { FinishingCategory, FinishingProject } from "@/types/finishing-project";

type FinishingProjectDetailPageProps = {
  project: FinishingProject;
  category: FinishingCategory;
  backPath: string;
  detailBasePath: string;
  prevProject?: FinishingProject;
  nextProject?: FinishingProject;
};

export default function FinishingProjectDetailPage({
  project,
  category,
  backPath,
  detailBasePath,
  prevProject,
  nextProject,
}: FinishingProjectDetailPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="finishing-detail">
      <header className="finishing-detail__header">
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
          className="finishing-detail__menu-btn"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      <div className="finishing-detail__topbar">
        <Link to={backPath} className="finishing-detail__back">
          <ArrowLeft size={16} strokeWidth={2} />
          All Finishing & Construction
        </Link>
      </div>

      <section className="finishing-detail__gallery-wrap">
        <FinishingProjectGallery
          key={project.id}
          images={project.images}
          projectName={project.name}
        />
      </section>

      <section className="finishing-detail__intro">
        <div className="finishing-detail__intro-inner">
          <span className="finishing-detail__index">{category.index}</span>
          <div className="finishing-detail__intro-copy">
            <Link to={`${backPath}#${category.id}`} className="finishing-detail__category-link">
              {category.label}
            </Link>
            <h1 className="finishing-detail__title font-heading">{project.name}</h1>
            <ul className="finishing-detail__features">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="finishing-detail__content">
        <p className="finishing-detail__description">{project.description}</p>
      </section>

      {(prevProject || nextProject) && (
        <nav className="finishing-detail__nav" aria-label="Project navigation">
          {prevProject ? (
            <Link
              to={`${detailBasePath}/${prevProject.id}`}
              className="finishing-detail__nav-link finishing-detail__nav-link--prev"
            >
              <div className="finishing-detail__nav-media">
                <img src={prevProject.images[0]} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="finishing-detail__nav-copy">
                <span className="finishing-detail__nav-label">
                  <ChevronLeft size={14} strokeWidth={2.5} aria-hidden />
                  Previous
                </span>
                <span className="finishing-detail__nav-title">{prevProject.name}</span>
              </div>
            </Link>
          ) : (
            <span className="finishing-detail__nav-spacer" />
          )}

          {nextProject ? (
            <Link
              to={`${detailBasePath}/${nextProject.id}`}
              className="finishing-detail__nav-link finishing-detail__nav-link--next"
            >
              <div className="finishing-detail__nav-copy">
                <span className="finishing-detail__nav-label">
                  Next
                  <ChevronRight size={14} strokeWidth={2.5} aria-hidden />
                </span>
                <span className="finishing-detail__nav-title">{nextProject.name}</span>
              </div>
              <div className="finishing-detail__nav-media">
                <img src={nextProject.images[0]} alt="" loading="lazy" decoding="async" />
              </div>
            </Link>
          ) : (
            <span className="finishing-detail__nav-spacer" />
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
