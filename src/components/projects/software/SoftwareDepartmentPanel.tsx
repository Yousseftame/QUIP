import { memo } from "react";
import type { SoftwareDepartment, SoftwareProject } from "@/types/software-project";
import SoftwareProjectCard from "./SoftwareProjectCard";

type SoftwareDepartmentPanelProps = {
  department: SoftwareDepartment;
  projects: SoftwareProject[];
};

function SoftwareDepartmentPanel({ department, projects }: SoftwareDepartmentPanelProps) {
  return (
    <section
      className="software-section"
      role="tabpanel"
      id="software-works-panel"
      aria-labelledby={`software-tab-${department.id}`}
    >
      <div className="software-section__inner">
        <header className="software-section__header">
          <p className="software-section__eyebrow">
            Dept {department.index} — {department.label}
          </p>
          <h2 className="software-section__headline font-heading">{department.headline}</h2>
          <p className="software-section__intro">{department.intro}</p>
        </header>

        <ul className="software-section__grid">
          {projects.map((project, i) => (
            <li key={project.id}>
              <SoftwareProjectCard project={project} index={i + 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default memo(SoftwareDepartmentPanel);
