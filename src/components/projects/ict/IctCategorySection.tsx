import { memo } from "react";
import ProjectGalleryCard from "@/components/projects/ProjectGalleryCard";
import type { IctCategory, IctProject } from "@/types/ict-project";

type IctCategorySectionProps = {
  category: IctCategory;
  projects: IctProject[];
  detailBasePath: string;
};

function IctCategorySection({ category, projects, detailBasePath }: IctCategorySectionProps) {
  return (
    <section
      className="ict-section"
      role="tabpanel"
      id="ict-works-panel"
      aria-labelledby={`ict-tab-${category.id}`}
    >
      <div className="ict-section__inner">
        <header className="ict-section__header">
          <p className="ict-section__eyebrow">
            {category.index} — {category.label}
          </p>
          <h2 className="ict-section__headline font-heading">{category.headline}</h2>
          <p className="ict-section__text">{category.intro}</p>
        </header>

        <div className="ict-section__grid">
          {projects.map((project) => (
            <ProjectGalleryCard
              key={project.id}
              project={project}
              detailPath={`${detailBasePath}/${project.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(IctCategorySection);
