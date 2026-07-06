import { useCallback, useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import defaultHeroBg from "@/assets/quip-branding-01.png";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import IctCategorySection from "@/components/projects/ict/IctCategorySection";
import IctCategoryTabs from "@/components/projects/ict/IctCategoryTabs";
import { ContactModal } from "@/components/ui/ContactModal";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import WorkGalleryTicker from "@/components/projects/WorkGalleryTicker";
import {
  ICT_CATEGORIES,
  ICT_PROJECTS,
  getIctProjectsByCategory,
} from "@/data/ict-projects";
import type { IctCategoryId } from "@/types/ict-project";

const LIST_PATH = "/projects/ict";

function parseCategoryFromHash(): IctCategoryId {
  const hash = window.location.hash.replace("#", "");
  return ICT_CATEGORIES.some((category) => category.id === hash)
    ? (hash as IctCategoryId)
    : ICT_CATEGORIES[0].id;
}

export default function IctProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<IctCategoryId>(parseCategoryFromHash);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        ICT_CATEGORIES.map((category) => [
          category.id,
          getIctProjectsByCategory(category.id).length,
        ]),
      ) as Record<IctCategoryId, number>,
    [],
  );

  const activeCategory = ICT_CATEGORIES.find((category) => category.id === activeId)!;
  const activeProjects = getIctProjectsByCategory(activeId);

  const selectCategory = useCallback((id: IctCategoryId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      document.getElementById("ict-works")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveId(parseCategoryFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

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
            src={defaultHeroBg}
            alt=""
            className="work-gallery-page__hero-bg-image"
            decoding="async"
          />
          <div className="work-gallery-page__hero-bg-overlay" />
        </div>

        <div className="work-gallery-page__hero-glow" aria-hidden />

        <div className="work-gallery-page__hero-inner work-gallery-page__hero-inner--animate">
          <div className="work-gallery-page__intro-head">
            <span className="work-gallery-page__label">Projects</span>
            <span className="work-gallery-page__marker" aria-hidden />
          </div>

          <h1 className="work-gallery-page__title font-heading">
            <DiaTextReveal
              text="ICT"
              textColor="#f5f3ee"
              colors={["#f5f3ee"]}
              className="work-gallery-page__title-line"
              duration={0.9}
              delay={0.05}
              startOnView={false}
              once
            />
            <DiaTextReveal
              text="Infrastructure"
              textColor="#FF5949"
              colors={["#FF5949"]}
              className="work-gallery-page__title-line"
              duration={0.9}
              delay={0.15}
              startOnView={false}
              once
            />
          </h1>

          <p className="work-gallery-page__subtitle">
            Three decades of mission-critical networks, data centers, and security systems
            for enterprise and government clients across Egypt and the region.
          </p>

          <div className="work-gallery-page__count-row">
            <span className="work-gallery-page__count">{ICT_PROJECTS.length}</span>
            <span className="work-gallery-page__count-text">Selected works</span>
          </div>
        </div>

        <WorkGalleryTicker />
      </section>

      <div className="ict-page__tabs-wrap">
        <IctCategoryTabs
          categories={ICT_CATEGORIES}
          activeId={activeId}
          counts={counts}
          onSelect={selectCategory}
        />
      </div>

      <div id="ict-works">
        <IctCategorySection
          key={activeId}
          category={activeCategory}
          projects={activeProjects}
          detailBasePath={LIST_PATH}
        />
      </div>

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
