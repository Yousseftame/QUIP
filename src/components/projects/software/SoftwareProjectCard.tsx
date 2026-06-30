import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import { getSoftwareProjectPlatformBadge } from "@/data/software-projects";
import type { SoftwareProject } from "@/types/software-project";

type SoftwareProjectCardProps = {
  project: SoftwareProject;
  index: number;
};

function SoftwareProjectCard({ project, index }: SoftwareProjectCardProps) {
  const detailPath = `/projects/software/${project.id}`;

  return (
    <article className="software-card">
      <Link to={detailPath} className="software-card__link">
        <div className={`software-card__cover software-card__cover--${project.departmentId}`}>
          <ProgressiveImage
            src={project.image}
            alt=""
            className="software-card__cover-image"
            loading="lazy"
          />
          <div className="software-card__cover-overlay" aria-hidden />
          <span className="software-card__platform">{getSoftwareProjectPlatformBadge(project)}</span>
        </div>

        <div className="software-card__body">
          <span className="software-card__index">{String(index).padStart(2, "0")}</span>
          <h3 className="software-card__title font-heading">
            {project.title}
            {project.subtitle && (
              <span className="software-card__subtitle"> — {project.subtitle}</span>
            )}
          </h3>
          <p className="software-card__description">{project.description}</p>
        </div>
      </Link>

      <div className="software-card__actions">
        <Link to={detailPath} className="software-card__cta">
          View project
          <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
        </Link>
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="software-card__demo"
          >
            Live Production
            <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}

export default memo(SoftwareProjectCard);
