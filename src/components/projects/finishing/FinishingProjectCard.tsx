import { memo } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import type { FinishingProject } from "@/types/finishing-project";

type FinishingProjectCardProps = {
  project: FinishingProject;
  detailPath: string;
  index: number;
};

function RowArrow() {
  return (
    <svg viewBox="0 0 12 12" className="finishing-row__arrow" aria-hidden>
      <path d="M7.4,0.7l4,5.3l-4,5.3H5.5l1.9-2.5c0.8-1,1.3-1.8,1.7-2.2H0.5V5.3H9C8.6,4.7,8,4,7.4,3.1L5.5,0.7H7.4z" />
    </svg>
  );
}

function FinishingProjectCard({ project, detailPath, index }: FinishingProjectCardProps) {
  return (
    <article className="finishing-row">
      <Link to={detailPath} className="finishing-row__link" aria-label={`View ${project.name}`}>
        <span className="finishing-row__num">{String(index).padStart(2, "0")}</span>

        <div className="finishing-row__media">
          <ProgressiveImage
            src={project.images[0]}
            alt=""
            className="finishing-row__image"
            loading="lazy"
          />
        </div>

        <div className="finishing-row__body">
          <h3 className="finishing-row__title font-heading">{project.name}</h3>
          <p className="finishing-row__meta">{project.features.join(" / ")}</p>
        </div>

        <span className="finishing-row__action">
          Open
          <RowArrow />
        </span>
      </Link>
    </article>
  );
}

export default memo(FinishingProjectCard);
