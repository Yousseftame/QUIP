import { useCallback, useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import defaultHeroBg from "@/assets/quip-branding-01.png";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import { ContactModal } from "@/components/ui/ContactModal";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import FinishingCategorySection from "@/components/projects/finishing/FinishingCategorySection";
import FinishingTypeSelector from "@/components/projects/finishing/FinishingTypeSelector";
import {
  FINISHING_CATEGORIES,
  getFinishingProjectsByCategory,
} from "@/data/finishing-projects";
import type { FinishingCategoryId } from "@/types/finishing-project";

const LIST_PATH = "/projects/finishing";

function parseCategoryFromHash(): FinishingCategoryId {
  const hash = window.location.hash.replace("#", "");
  return FINISHING_CATEGORIES.some((c) => c.id === hash)
    ? (hash as FinishingCategoryId)
    : FINISHING_CATEGORIES[0].id;
}

export default function FinishingProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<FinishingCategoryId>(parseCategoryFromHash);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        FINISHING_CATEGORIES.map((cat) => [
          cat.id,
          getFinishingProjectsByCategory(cat.id).length,
        ]),
      ) as Record<FinishingCategoryId, number>,
    [],
  );

  const activeCategory = FINISHING_CATEGORIES.find((c) => c.id === activeId)!;
  const activeProjects = getFinishingProjectsByCategory(activeId);

  const selectCategory = useCallback((id: FinishingCategoryId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      document.getElementById("finishing-works")?.scrollIntoView({
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
    <div className="finishing-page">
      <header className="finishing-page__header">
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
          className="finishing-page__menu-btn"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      <section className="finishing-page__hero">
        <div className="finishing-page__hero-bg" aria-hidden>
          <img
            src={defaultHeroBg}
            alt=""
            className="finishing-page__hero-bg-image"
            decoding="async"
          />
          <div className="finishing-page__hero-bg-overlay" />
        </div>

        <div className="finishing-page__hero-glow" aria-hidden />

        <div className="finishing-page__hero-inner finishing-page__hero-inner--animate">
          <div className="finishing-page__hero-top">
            <span className="finishing-page__eyebrow">Projects</span>
            <span className="finishing-page__marker" aria-hidden />
          </div>

          <h1 className="finishing-page__title font-heading">
            <DiaTextReveal
              text="Finishing"
              textColor="#f5f3ee"
              colors={["#f5f3ee"]}
              className="finishing-page__title-line"
              duration={0.9}
              delay={0.05}
              startOnView={false}
              once
            />
            <DiaTextReveal
              text="& Construction"
              textColor="#FF5949"
              colors={["#FF5949"]}
              className="finishing-page__title-line"
              duration={0.9}
              delay={0.15}
              startOnView={false}
              once
            />
          </h1>

          <p className="finishing-page__subtitle">
          Structural execution, fit-out and finishing for residential, 
commercial and national projects, building the region’s spaces 
to hotel-grade standards.
          </p>
        </div>
      </section>

      <div className="finishing-page__types-wrap">
        <FinishingTypeSelector
          categories={FINISHING_CATEGORIES}
          activeId={activeId}
          counts={counts}
          onSelect={selectCategory}
        />
      </div>

      <div id="finishing-works">
        <FinishingCategorySection
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
