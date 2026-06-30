import { memo } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import type { Project } from "@/types/project";

type ProjectGalleryCardProps = {
  project: Project;
  detailPath: string;
};

function ViewArrow() {
  return (
    <svg viewBox="0 0 12 12" className="work-gallery-card__cta-arrow" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function ProjectGalleryCard({ project, detailPath }: ProjectGalleryCardProps) {
  return (
    <article className="work-gallery-card">
      <Link
        to={detailPath}
        className="work-gallery-card__trigger"
        aria-label={`View ${project.name}`}
      >
        <div className="work-gallery-card__media">
          <ProgressiveImage
            src={project.image}
            alt=""
            className="work-gallery-card__image"
            loading="lazy"
            draggable={false}
          />
          <div className="work-gallery-card__overlay" aria-hidden />
          <div className="work-gallery-card__frame" aria-hidden />
          <span className="work-gallery-card__code">{project.code}</span>
        </div>

        <div className="work-gallery-card__body">
          <div className="work-gallery-card__meta">
            <span className="work-gallery-card__category">{project.category}</span>
          </div>

          <h3 className="work-gallery-card__title">{project.name}</h3>

          <p className="work-gallery-card__description">{project.description}</p>

          <div className="work-gallery-card__footer">
            <span className="work-gallery-card__cta">
              View project
              <ViewArrow />
            </span>
            <span className="work-gallery-card__plus" aria-hidden>
              <svg viewBox="0 0 12 12" className="work-gallery-card__plus-icon">
                <path d="M6,1v10M1,6h10" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default memo(ProjectGalleryCard);
