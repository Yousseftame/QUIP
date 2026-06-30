import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import type { SoftwareProject } from "@/types/software-project";

type SoftwareProjectCardProps = {
  project: SoftwareProject;
  index: number;
};

function SoftwareProjectCard({ project, index }: SoftwareProjectCardProps) {
  return (
    <article className="software-card">
      <span className="software-card__index">{String(index).padStart(2, "0")}</span>
      <h3 className="software-card__title font-heading">{project.title}</h3>
      <p className="software-card__description">{project.description}</p>
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="software-card__demo"
      >
        Live demo
        <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden />
      </a>
    </article>
  );
}

export default memo(SoftwareProjectCard);
