import { useCallback, useEffect, useMemo, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import defaultHeroBg from "@/assets/quip-branding-01.png";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import SoftwareDepartmentPanel from "@/components/projects/software/SoftwareDepartmentPanel";
import SoftwareDepartmentTabs from "@/components/projects/software/SoftwareDepartmentTabs";
import { ContactModal } from "@/components/ui/ContactModal";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import {
  SOFTWARE_DEPARTMENTS,
  getSoftwareProjectsByDepartment,
} from "@/data/software-projects";
import type { SoftwareDepartmentId } from "@/types/software-project";

function parseDepartmentFromHash(): SoftwareDepartmentId {
  const hash = window.location.hash.replace("#", "");
  return SOFTWARE_DEPARTMENTS.some((d) => d.id === hash)
    ? (hash as SoftwareDepartmentId)
    : SOFTWARE_DEPARTMENTS[0].id;
}

export default function SoftwareProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [activeId, setActiveId] = useState<SoftwareDepartmentId>(parseDepartmentFromHash);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        SOFTWARE_DEPARTMENTS.map((dept) => [
          dept.id,
          getSoftwareProjectsByDepartment(dept.id).length,
        ]),
      ) as Record<SoftwareDepartmentId, number>,
    [],
  );

  const activeDepartment = SOFTWARE_DEPARTMENTS.find((d) => d.id === activeId)!;
  const activeProjects = getSoftwareProjectsByDepartment(activeId);

  const selectDepartment = useCallback((id: SoftwareDepartmentId) => {
    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    requestAnimationFrame(() => {
      document.getElementById("software-works")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  useEffect(() => {
    const onHashChange = () => setActiveId(parseDepartmentFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <div className="software-page">
      <header className="software-page__header">
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
          className="software-page__menu-btn"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      <section className="software-page__hero">
        <div className="software-page__hero-bg" aria-hidden>
          <img
            src={defaultHeroBg}
            alt=""
            className="software-page__hero-bg-image"
            decoding="async"
          />
          <div className="software-page__hero-bg-overlay" />
        </div>

        <div className="software-page__hero-grid" aria-hidden />
        <div className="software-page__hero-glow" aria-hidden />

        <div className="software-page__hero-inner software-page__hero-inner--animate">
          <div className="software-page__hero-top">
            <span className="software-page__eyebrow">Projects</span>
            <span className="software-page__marker" aria-hidden />
          </div>

          <h1 className="software-page__title font-heading">
            <DiaTextReveal
              text="Software"
              textColor="#f5f3ee"
              colors={["#f5f3ee"]}
              className="software-page__title-line"
              duration={0.9}
              delay={0.05}
              startOnView={false}
              once
            />
            <DiaTextReveal
              text="& Digital"
              textColor="#FF5949"
              colors={["#FF5949"]}
              className="software-page__title-line"
              duration={0.9}
              delay={0.15}
              startOnView={false}
              once
            />
          </h1>

          <p className="software-page__subtitle">
            Applications and websites we build — browse by department, open a live demo when
            available.
          </p>
        </div>
      </section>

      <div className="software-page__tabs-wrap">
        <SoftwareDepartmentTabs
          departments={SOFTWARE_DEPARTMENTS}
          activeId={activeId}
          counts={counts}
          onSelect={selectDepartment}
        />
      </div>

      <div id="software-works">
        <SoftwareDepartmentPanel
          key={activeId}
          department={activeDepartment}
          projects={activeProjects}
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
