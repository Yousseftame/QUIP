import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import HeroMenu from "@/components/sections/HeroMenu";
import FooterSection from "@/components/sections/FooterSection";
import { ContactModal } from "@/components/ui/ContactModal";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import { usePreloadImages } from "@/hooks/usePreloadImages";
import type { SoftwareDepartment, SoftwareProject, SoftwareSolution } from "@/types/software-project";

type SoftwareProjectDetailPageProps = {
  project: SoftwareProject;
  department: SoftwareDepartment;
  backPath: string;
  detailBasePath: string;
  prevProject?: SoftwareProject;
  nextProject?: SoftwareProject;
};

function SolutionsList({ items }: { items: SoftwareSolution[] }) {
  return (
    <ul className="software-detail__solutions">
      {items.map((item) => (
        <li key={item.title} className="software-detail__solution">
          <h3 className="software-detail__solution-title font-heading">{item.title}</h3>
          <p className="software-detail__solution-text">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

function NavArrow() {
  return (
    <svg viewBox="0 0 12 12" className="software-detail__nav-arrow" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

export default function SoftwareProjectDetailPage({
  project,
  department,
  backPath,
  detailBasePath,
  prevProject,
  nextProject,
}: SoftwareProjectDetailPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const listPath = `${backPath}#${department.id}`;

  usePreloadImages(
    [prevProject?.image, nextProject?.image].filter((src): src is string => Boolean(src)),
  );

  return (
    <div className="software-detail">
      <header className="software-detail__header">
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
          className="software-detail__menu-btn"
        >
          <span className="uppercase tracking-widest text-xs font-semibold">Menu</span>
          <Menu size={20} />
        </button>
      </header>

      <div className="software-detail__topbar">
        <Link to={listPath} className="software-detail__back">
          <ArrowLeft size={16} strokeWidth={2} />
          All Software Projects
        </Link>
      </div>

      <section className="software-detail__hero software-detail__hero--animate">
        <div
          className={`software-detail__hero-media software-detail__hero-media--${project.departmentId}`}
        >
          <ProgressiveImage
            src={project.image}
            alt=""
            className="software-detail__hero-image"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </section>

      <section className="software-detail__content software-detail__content--animate">
        <div className="software-detail__intro">
          <div className="software-detail__meta">
            <span className="software-detail__department">{department.label}</span>
            {project.subtitle && (
              <span className="software-detail__subtitle">{project.subtitle}</span>
            )}
          </div>
          <h1 className="software-detail__title font-heading">{project.title}</h1>

          <div className="software-detail__block software-detail__block--challenge">
            <h2 className="software-detail__heading">The Challenge</h2>
            <p className="software-detail__lead">{project.description}</p>
          </div>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="software-detail__demo"
            >
              Live Production
              <ArrowUpRight size={16} strokeWidth={2.25} aria-hidden />
            </a>
          )}
        </div>

        <div className="software-detail__block">
          <h2 className="software-detail__heading">The Think Solution</h2>
          <SolutionsList items={project.solutions} />
        </div>
      </section>

      {(prevProject || nextProject) && (
        <nav className="software-detail__nav" aria-label="Project navigation">
          {prevProject ? (
            <Link
              to={`${detailBasePath}/${prevProject.id}`}
              className="software-detail__nav-link software-detail__nav-link--prev"
            >
              <span className="software-detail__nav-label">Previous</span>
              <span className="software-detail__nav-title">{prevProject.title}</span>
            </Link>
          ) : (
            <span className="software-detail__nav-spacer" />
          )}

          {nextProject ? (
            <Link
              to={`${detailBasePath}/${nextProject.id}`}
              className="software-detail__nav-link software-detail__nav-link--next"
            >
              <span className="software-detail__nav-label">
                Next
                <NavArrow />
              </span>
              <span className="software-detail__nav-title">{nextProject.title}</span>
            </Link>
          ) : (
            <span className="software-detail__nav-spacer" />
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
