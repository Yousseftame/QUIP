import { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import defaultHeroBg from "@/assets/quip-branding-01.png";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import { ContactModal } from "@/components/ui/ContactModal";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import ProjectGalleryCard from "@/components/projects/ProjectGalleryCard";
import WorkGalleryTicker from "@/components/projects/WorkGalleryTicker";
import type { Project } from "@/types/project";

type ProjectGalleryPageProps = {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  projects: Project[];
  heroImage?: string;
  detailBasePath: string;
};

export default function ProjectGalleryPage({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  projects,
  heroImage = defaultHeroBg,
  detailBasePath,
}: ProjectGalleryPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="work-gallery-page">
      <header className="work-gallery-page__header">
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
          className="work-gallery-page__menu-btn"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      <section className="work-gallery-page__hero">
        <div className="work-gallery-page__hero-bg" aria-hidden>
          <img
            src={heroImage}
            alt=""
            className="work-gallery-page__hero-bg-image"
            decoding="async"
          />
          <div className="work-gallery-page__hero-bg-overlay" />
        </div>

        <div className="work-gallery-page__hero-glow" aria-hidden />

        <div className="work-gallery-page__hero-inner work-gallery-page__hero-inner--animate">
          <div className="work-gallery-page__intro-head">
            <span className="work-gallery-page__label">{eyebrow}</span>
            <span className="work-gallery-page__marker" aria-hidden />
          </div>

          <h1 className="work-gallery-page__title font-heading">
            <DiaTextReveal
              text={titleLine1}
              textColor="#f5f3ee"
              colors={["#f5f3ee"]}
              className="work-gallery-page__title-line"
              duration={0.9}
              delay={0.05}
              startOnView={false}
              once
            />
            <DiaTextReveal
              text={titleLine2}
              textColor="#FF5949"
              colors={["#FF5949"]}
              className="work-gallery-page__title-line"
              duration={0.9}
              delay={0.15}
              startOnView={false}
              once
            />
          </h1>

          <p className="work-gallery-page__subtitle">{subtitle}</p>

          <div className="work-gallery-page__count-row">
            <span className="work-gallery-page__count">{projects.length}</span>
            <span className="work-gallery-page__count-text">Selected works</span>
          </div>
        </div>

        <WorkGalleryTicker />
      </section>

      <section className="work-gallery-page__grid-wrap">
        <div className="work-gallery-page__grid">
          {projects.map((project) => (
            <ProjectGalleryCard
              key={project.id}
              project={project}
              detailPath={`${detailBasePath}/${project.id}`}
            />
          ))}
        </div>
      </section>

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
