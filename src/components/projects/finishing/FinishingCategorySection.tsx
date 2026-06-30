import { memo } from "react";
import type { FinishingCategory, FinishingProject } from "@/types/finishing-project";
import FinishingProjectCard from "./FinishingProjectCard";

type FinishingCategorySectionProps = {
  category: FinishingCategory;
  projects: FinishingProject[];
  detailBasePath: string;
};

function FinishingCategorySection({
  category,
  projects,
  detailBasePath,
}: FinishingCategorySectionProps) {
  return (
    <section
      className="finishing-section"
      role="tabpanel"
      id="finishing-works-panel"
      aria-labelledby={`finishing-tab-${category.id}`}
    >
      <div className="finishing-section__inner">
        <header className="finishing-section__header">
          <p className="finishing-section__eyebrow">
            Type {category.index} — {category.label}
          </p>
          <h2 className="finishing-section__headline font-heading">{category.headline}</h2>
          <p className="finishing-section__text">{category.intro}</p>
        </header>

        <ol className="finishing-section__list">
          {projects.map((project, i) => (
            <li key={project.id}>
              <FinishingProjectCard
                project={project}
                detailPath={`${detailBasePath}/${project.id}`}
                index={i + 1}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default memo(FinishingCategorySection);
